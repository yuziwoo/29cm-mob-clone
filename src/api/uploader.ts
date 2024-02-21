import { Http } from './http';

// docs: https://cloudinary.com/documentation/upload_images#landingpage
export const uploadeImage = async (file: File) => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET as string);

  const responseURL = Http.postWithoutClient<{ url: string }>({
    url: process.env.REACT_APP_CLOUDINARY_IMG_UPLOAD_URL as string,
    data,
  })
    .then((res) => res.data.url)
    .catch((error) => {
      console.log(error);
    });

  return responseURL;
};
