import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {
  getUser,
  updateUser,
  createUser,
} from "../controllers/userController.js";

const router = express.Router();

// GET user
router.post("/get-user", userAuth, getUser);

// UPDATE USER || PUT
router.put("/update-user", userAuth, updateUser);

// CREATE USER || POST
router.post("/create-user", createUser);

export default router;
