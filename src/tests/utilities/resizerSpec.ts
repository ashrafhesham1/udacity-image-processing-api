import resizeImg from '../../utilities/resizer';
import { isImgExist, generateImgData } from '../../utilities/fileSys';

describe('Images resizer tool', () => {
  it('check if resizing works correctly', async () => {
    const imgData = generateImgData({ fileName: 'fjord', width: 1, height: 1 });
    await resizeImg('fjord', 1, 1);
    isImgExist(imgData.newImgPath).then((res) => {
      expect(res).toBe(true);
    });
  });
});
