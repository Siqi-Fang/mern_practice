import express from 'express';
const router = express.Router();

import {
    createNote,
    deleteNote,
    updateNote,
    showStats,
    getAllNotes,
} from "../controllers/noteController.js";

router.route('/').post(createNote).get(getAllNotes);
router.route('/stats').get(showStats);
router.route('/:id').delete(deleteNote).patch();
export default router