const { ImageKit } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadfile(buffer) {
  const uploadedFile = await imagekit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.png"
  });
  return uploadedFile;
}

module.exports = uploadfile;