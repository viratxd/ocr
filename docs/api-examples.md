# OCR API Documentation

## Endpoint
```
POST /api/ocr
```

## cURL Examples

### Basic Image Upload
```bash
curl -X POST \
  http://localhost:3000/api/ocr \
  -H "Content-Type: multipart/form-data" \
  -F "image=@/path/to/your/image.jpg"
```

### With Additional Headers (CORS)
```bash
curl -X POST \
  http://localhost:3000/api/ocr \
  -H "Content-Type: multipart/form-data" \
  -H "Origin: http://yourdomain.com" \
  -F "image=@/path/to/your/image.jpg"
```

## Example Response

### Success Response
```json
{
  "success": true,
  "text": "Extracted text from the image will appear here"
}
```

### Error Response - No File
```json
{
  "error": "No file uploaded"
}
```

### Error Response - Invalid File Type
```json
{
  "success": false,
  "error": "Invalid file type. Only JPG and PNG files are allowed."
}
```

### Error Response - File Too Large
```json
{
  "success": false,
  "error": "File size exceeds limit (5MB)"
}
```

## Important Notes

1. Maximum file size: 5MB
2. Supported file types: JPG, JPEG, PNG
3. The image file should be sent with the field name "image"
4. The API expects multipart/form-data content type

## Testing with Different Image Types

### PNG Image
```bash
curl -X POST \
  http://localhost:3000/api/ocr \
  -H "Content-Type: multipart/form-data" \
  -F "image=@/path/to/your/image.png"
```

### JPEG Image
```bash
curl -X POST \
  http://localhost:3000/api/ocr \
  -H "Content-Type: multipart/form-data" \
  -F "image=@/path/to/your/image.jpg"
```

## Production Usage
When using the deployed Vercel API, replace `http://localhost:3000` with your Vercel deployment URL:

```bash
curl -X POST \
  https://your-app-name.vercel.app/api/ocr \
  -H "Content-Type: multipart/form-data" \
  -F "image=@/path/to/your/image.jpg"
```