// server/routes/dashboardRoutes.js
import express from "express";

const router = express.Router();

// GET /api/dashboard
router.get("/", async (req, res) => {
  try {
    // لاحقًا بتجيبي هاي القيم من الداتابيز بدل الهارد كود
    const data = {
      totalInterviews: 12,
      averageScore: 7.8,
      timeSpentHours: 3.2,
      reportsGenerated: 5,
      recentActivity: [
        { title: "Frontend Interview", score: 8.5 },
        { title: "Behavioral Round", score: 7.2 },
        { title: "Technical Full Stack", score: 6.8 },
      ],
    };

    res.json(data);
  } catch (error) {
    console.error("Error in /api/dashboard:", error);
    res.status(500).json({ message: "Failed to load dashboard data" });
  }
});

export default router;
