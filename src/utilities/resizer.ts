import sharp from 'sharp';
import { generateImgData } from './fileSys';

async function resizeImg(
  fileName: string,
  width: number,
  height: number
): Promise<boolean> {
  try {
    const imgData = generateImgData({ fileName, width, height });
    await sharp(imgData.originalImgPath)
      .resize(width, height)
      .toFile(imgData.newImgPath)
      .then(() => {
        return true;
      });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export default resizeImg;
