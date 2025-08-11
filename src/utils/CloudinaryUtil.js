// const cloundinary = require("cloudinary").v2;

// const uploadFileToCloudinary = async (file) => {
//   cloundinary.config({
//     cloud_name: "dbddct7bj",
//     api_key: "929751252864828",
//     api_secret: "euCknzvAkSagGYgxNk0GS8byM7A",
//   });

//   const cloundinaryResponse = await cloundinary.uploader.upload(file.path);
//   return cloundinaryResponse;
// };
// module.exports = {
//   uploadFileToCloudinary,
// };
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dbddct7bj",
  api_key: "929751252864828",
  api_secret: "euCknzvAkSagGYgxNk0GS8byM7A",
});

const uploadFileToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "properties" }, // optional folder name
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    stream.end(fileBuffer);
  });
};

module.exports = { uploadFileToCloudinary };
