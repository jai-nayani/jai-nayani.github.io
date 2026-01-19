# Photo Gallery

## How to Add Photos

**Simply upload your images to this folder!** The gallery will automatically detect and display all images.

1. **Place your image files** in this folder (`/public/images/gallery/`)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
   - You can name them anything you want - the system will automatically detect them
   - Example: `my-photo.jpg`, `vacation.png`, `IMG_1234.JPG`, etc.

2. **Run the gallery generator** (or it runs automatically during build):
   ```bash
   yarn generate-gallery
   ```
   
   Or just build/deploy - it runs automatically:
   ```bash
   yarn build
   # or
   yarn deploy
   ```

3. **That's it!** All images in this folder will be automatically displayed in the gallery.

## How It Works

- The `generate-gallery.js` script automatically scans this folder for image files
- It creates/updates `gallery.json` with all found images
- The gallery component reads from `gallery.json` to display images
- The script runs automatically before every build/deploy

## Example

If you upload these files to this folder:
- `photo1.jpg`
- `vacation.png`
- `IMG_1234.JPG`
- `my-image.webp`

They will all automatically appear in the gallery - no manual configuration needed!
