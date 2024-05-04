import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserPofile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/userControllers.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutUser);
router.post("/login", loginUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserPofile);

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
