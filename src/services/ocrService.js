import OCRClient from 'ya-ocr';
import { Readable } from 'stream';
import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';

const client = new OCRClient();

const bufferToTempFile = async (buffer) => {
  const tempDir = os.tmpdir();
  const tempFilePath = path.join(tempDir, `upload-${Date.now()}.tmp`);
  await fs.writeFile(tempFilePath, buffer);
  return tempFilePath;
};

export const processImage = async (fileBuffer) => {
  let tempFilePath = null;
  try {
    // Convert buffer to temporary file
    tempFilePath = await bufferToTempFile(fileBuffer);
    
    // Process the image
    const result = await client.scanByFile(tempFilePath);
    
    return result.text;
  } catch (error) {
    throw error;
  } finally {
    // Clean up temporary file
    if (tempFilePath) {
      try {
        await fs.unlink(tempFilePath);
      } catch (cleanupError) {
        console.error('Error cleaning up temporary file:', cleanupError);
      }
    }
  }
};