export const smoothScroll = (target) => {
    const element = document.getElementById(target);
    const offset = element.getBoundingClientRect().top + window.scrollY;
    const duration = 1000; // 1000 milliseconds (1 second) for slower scroll
    const start = window.scrollY;
    const startTime = performance.now();

    const easeInOutQuad = (time, start, change, duration) => {
      time /= duration / 2;
      if (time < 1) return (change / 2) * time * time + start;
      time--;
      return (-change / 2) * (time * (time - 2) - 1) + start;
    };

    const scroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const nextPosition = easeInOutQuad(
        elapsedTime,
        start,
        offset - start,
        duration
      );
      window.scrollTo(0, nextPosition);
      if (elapsedTime < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };