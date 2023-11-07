import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../config";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

export const uploadFile = async (filePath: string) => {
  try {
    return await cloudinary.uploader.upload(filePath, {
      folder: "videos_API",
      resource_type: "video",
    });
  } catch (err: any) {
    console.log(`CLOUDINARY ERROR: ${err}`);
  }
};

export const deleteFile = async (publicId: string) => {
  try {
    return await cloudinary.uploader.destroy(publicId);
  } catch (err: any) {
    console.log(`CLOUDINARY ERROR: ${err}`);
  }
};
