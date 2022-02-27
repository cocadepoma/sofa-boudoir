const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const imageDir = '../../../assets/media';
const Jimp = require('jimp');

async function handler(req, res) {
  const dirRelativeToPublicFolder = 'images';
  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  const filenames = fs.readdirSync(dir);

  const images = [];

  for await (const filename of filenames) {
    const filepath = path.resolve(dir, filename);
    const image = await getImagesFromDir(filepath, dirRelativeToPublicFolder, filename)
    images.push(image);
  }

  res.status(200).json({ images: images });
};

const getImagesFromDir = async (filepath, dirRelativeToPublicFolder, filename) => {
  const fetchedImage = await Jimp.read(filepath).then(jimpImage => {
    return {
      src: path.join('/', dirRelativeToPublicFolder, filename),
      width: jimpImage.bitmap.width,
      height: jimpImage.bitmap.height
    };
  });
  return fetchedImage;
};

export default handler;
