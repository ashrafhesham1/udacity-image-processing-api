import { Router, Request, Response } from 'express';
import path from 'path';
import resizeImg from '../../utilities/resizer';
import { isImgExist, generateImgData } from '../../utilities/fileSys';

const route = Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const fileName = req.query.filename as unknown as string;

  if (!fileName && !width && !height) {
    res.send('Image resizer API \n Please Enter your query to start resizing');
    return;
  }

  if (!fileName || !width || !height) {
    res.send(
      `Wrong query, Please enter a correct file name, width, and height`
    );
    return;
  }

  if (width < 0 || height < 0) {
    res.send(`Wrong query, Please enter valid dimentions`);
    return;
  }

  const imgData = generateImgData({ fileName, width, height });

  if (!(await isImgExist(imgData.originalImgPath))) {
    res.send(`Image doesn't exist , please enter a valid image`);
    return;
  }

  if (!(await isImgExist(imgData.newImgPath))) {
    const resized = await resizeImg(fileName, width, height);
    if (!resized) {
      res.send('something went wrong!, Please try again ');
      return;
    }
  }

  res.sendFile(
    imgData.newImgName,
    { root: path.resolve('./images/thumb') },
    (err) => {
      if (err) console.log(err);
    }
  );
});

route.get('/:sub', (req: Request, res: Response): void => {
  res.send(`this sub domin doesn't exist `);
});

export default route;
