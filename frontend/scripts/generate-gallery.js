const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');
const galleryJsonPath = path.join(galleryDir, 'gallery.json');

// Supported image extensions
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.JPG', '.JPEG', '.PNG', '.GIF', '.webp', '.WEBP'];

try {
  // Read all files in the gallery directory
  const files = fs.readdirSync(galleryDir);
  
  // Filter only image files
  const imageFiles = files.filter(file => {
    return SUPPORTED_EXTENSIONS.some(ext => file.toLowerCase().endsWith(ext.toLowerCase()));
  });
  
  // Sort alphabetically for consistent ordering
  imageFiles.sort();
  
  // Create gallery.json structure
  const galleryData = {
    images: imageFiles
  };
  
  // Write to gallery.json
  fs.writeFileSync(galleryJsonPath, JSON.stringify(galleryData, null, 2));
  
  console.log(`✅ Gallery updated! Found ${imageFiles.length} image(s):`);
  imageFiles.forEach(file => console.log(`   - ${file}`));
  
} catch (error) {
  console.error('❌ Error generating gallery.json:', error.message);
  // Create empty gallery.json if directory doesn't exist
  if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true });
  }
  fs.writeFileSync(galleryJsonPath, JSON.stringify({ images: [] }, null, 2));
  console.log('Created empty gallery.json');
}
