import { Http } from './http';

/**
 * 클라우디너리 이미지 저장 [https://cloudinary.com/documentation/upload_images#landingpage]
 * 상품 썸네일, 상세 이미지 저장 목적으로 사용하였습니다.
 */

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
