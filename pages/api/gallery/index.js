const fs = require("fs");
const path = require("path");
const Jimp = require('jimp');

async function handler(req, res) {
  const dirRelativeToPublicFolder = 'images';
  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  const filenames = fs.readdirSync(dir);

  const images = [];

  try {
    for await (const filename of filenames) {
      const filepath = path.resolve(dir, filename);
      const image = await getImagesFromDir(filepath, dirRelativeToPublicFolder, filename)

      if (image) {
        images.push(image);
      }
    }

    res.status(200).json({ images: images, status: 200 });
  } catch (error) {
    res.status(500).json({ error: error.message, status: 500 });
  }
};

const getImagesFromDir = async (filepath, dirRelativeToPublicFolder, filename) => {
  console.log(path.extname(filename))
  if (path.extname(filename) === '.jpg' || path.extname(filename) === '.png') {
    const fetchedImage = await Jimp.read(filepath).then(jimpImage => {
      return {
        src: path.join('/', dirRelativeToPublicFolder, filename),
        width: jimpImage.bitmap.width,
        height: jimpImage.bitmap.height
      };
    });
    return fetchedImage;
  } else {
    return null;
  }
};

export default handler;
