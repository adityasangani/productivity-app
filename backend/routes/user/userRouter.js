const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { isAuthenticated } = require("../middlewares/middleware");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const prisma = new PrismaClient();

router.use(cookieParser());
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/dashboard", isAuthenticated, (req, res) => {
  res.json({
    message: "In the dashboard successfully",
  });
});
router.post("/tasks/create", isAuthenticated, async (req, res) => {
  const taskDetails = req.body;
  try {
    const newTask = await prisma.task.create({
      data: {
        title: taskDetails.title,
        description: taskDetails.description || "",
        label: taskDetails.label,
        userId: taskDetails.userId,
      },
    });
    res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });
  } catch (e) {
    return res.status(411).json({
      message: "Unable to create task",
      error: e.message,
    });
  }
});

router.get("/tasks", isAuthenticated, async (req, res) => {
  const userId = req.userId;
  try {
    const tasks = await prisma.task.findMany({
      where: {
        userId: userId,
      },
    });
    res.status(200).json({
      message: "Tasks retrieved successfully",
      tasks: tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while retrieving tasks.",
      error: error.message,
    });
  }
});

router.get("/tasks/:id", isAuthenticated, async (req, res) => {
  const taskId = parseInt(req.params.id);
  const userId = req.userId;
  try {
    const task = await prisma.task.findFirst({
      where: {
        id: taskId,
        userId: userId,
      },
    });
    if (task) {
      res.status(200).json({
        message: "Task retrieved successfully",
        task: task,
      });
    } else {
      res.status(404).json({
        message: "Task not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while retrieving the task.",
      error: error.message,
    });
  }
});

router.put("/tasks/:id", isAuthenticated, async (req, res) => {
  const taskId = parseInt(req.params.id);
  const userId = req.userId;
  try {
    const updatedTask = await prisma.task.update({
      where: {
        id: taskId,
        userId: userId,
      },
      data: {
        title,
        description,
        label,
      },
    });
    res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the task.",
      error: error.message,
    });
  }
});

router.delete("/tasks/:id", isAuthenticated, async (req, res) => {
  const taskId = parseInt(req.params.id);
  const userId = req.userId;
  try {
    const task = await prisma.task.findFirst({
      where: {
        id: taskId,
        userId,
      },
    });
    if (!task) {
      return res.status(404).json({
        message: "Task not found or not authorized to delete",
      });
    }
    await prisma.task.delete({
      where: {
        id: taskId,
        userId,
      },
    });
    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the task.",
      error: error.message,
    });
  }
});

module.exports = router;
