import fs from 'fs';
import { ImgQueries, ImgData } from './interfaces/interfaces';

const fullImgDir = './images/full';
const thumbDir = './images/thumb';

export async function isImgExist(imgPath: string): Promise<boolean> {
  try {
    await fs.promises.access(imgPath);
    return true;
  } catch {
    return false;
  }
}

export function generateImgData(imgQueries: ImgQueries): ImgData {
  const originalImgName = `${imgQueries.fileName}.jpg`;
  const originalImgPath = `${fullImgDir}/${originalImgName}`;
  const newImgName = `${imgQueries.fileName}_${imgQueries.width}_${imgQueries.height}.jpg`;
  const newImgPath = `${thumbDir}/${newImgName}`;

  return { originalImgName, originalImgPath, newImgName, newImgPath };
}
