import { processImage } from '../services/ocrService.js';

export const handleOCR = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const text = await processImage(req.file.buffer);
    
    res.status(200).json({
      success: true,
      text
    });
  } catch (error) {
    console.error('OCR Processing Error:', error);
    res.status(500).json({
      success: false,
      error: 'Error processing image'
    });
  }
};