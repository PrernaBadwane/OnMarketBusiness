// utils/imageUtils.js

import { CameraRoll } from 'react-native';

export const saveImageToCameraRoll = async (uri) => {
  try {
    const savedImage = await CameraRoll.save(uri);
    console.log('Image saved to camera roll:', savedImage);
    return savedImage;
  } catch (error) {
    console.error('Error saving image to camera roll:', error);
    throw error;
  }
};
