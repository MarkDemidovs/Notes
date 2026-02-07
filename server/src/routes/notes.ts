import { Router } from "express";
import { getNotes, createNote, titleRenameNote, contentRenameNote, deleteNote } from "../controllers/notes";

const router = Router();

router.get("/", getNotes);
router.post("/", createNote);
router.patch("/:id/title", titleRenameNote);
router.patch("/:id/content", contentRenameNote);
router.delete("/:id", deleteNote)

export default router;
