import express from 'express';
import { upload } from '../middleware/upload.js';
import { handleOCR } from '../controllers/ocrController.js';

const router = express.Router();

router.post('/ocr', upload.single('image'), handleOCR);

export default router;