import { v2 as cloudinary } from "cloudinary";
import { API_KEY, API_SECRET, CLOUD_NAME } from "../config";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});

export const uploadFile = async (tempFilePath: string) => {
  try {
    return await cloudinary.uploader.upload(tempFilePath, {
      folder: "audio files",
      resource_type: "video",
    });
  } catch (error) {
    throw error;
  }
};

export const deleteFile = async (publicId: string) => {
  try {
    return await cloudinary.uploader.destroy(publicId);
  } catch (err) {
    throw err;
  }
};
