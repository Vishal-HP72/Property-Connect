import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { addPost } from "../controllers/post.controller.js";
import { deletePost } from "../controllers/post.controller.js";
import { getPost } from "../controllers/post.controller.js";
import { getPosts } from "../controllers/post.controller.js";
import { updatePost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyToken, addPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);

export default router;
