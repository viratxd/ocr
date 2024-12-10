export const errorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        error: 'File size exceeds limit (5MB)'
      });
    }
  }
  
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
};