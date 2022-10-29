import Resizer from 'react-image-file-resizer';
import axios from "axios";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      720,
      400,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

export const uploadImage = async (file) => {
  try {
    const image = await resizeFile(file);
    const imageFile = {
      name: file.name.split(".")[0],
      image: image,
      type: file.type
    };
    const res = await axios.post("/upload-image", imageFile);
    const imageURL = res.data.url;
    return imageURL;
  } catch (err) {
    console.log(err);
  }
};

