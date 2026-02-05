import { Router } from "express";
import { getNotes, createNote, titleRenameNote } from "../controllers/notes";

const router = Router();

router.get("/", getNotes);
router.post("/", createNote);
router.patch("/:id", titleRenameNote)

export default router;
