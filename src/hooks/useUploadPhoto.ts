import {Platform} from 'react-native';
import ImagePicker, {Options} from 'react-native-image-crop-picker';

const defaultConfig: Options = {
  cropping: true,
  compressImageQuality: 0.5,
  mediaType: 'photo',
};

const useUploadPhoto = () => {
  const takePhotoFromCamera = (config = {}) => {
    if (Platform.OS === 'ios') {
      defaultConfig.compressImageQuality = 0.8;
      defaultConfig.width = 750;
      defaultConfig.height = 800;
    }
    return ImagePicker.openCamera({
      ...config,
      ...defaultConfig,
    });
  };

  const choosePhotoFromLibrary = (config = {}) => {
    return ImagePicker.openPicker({
      ...config,
      ...defaultConfig,
    });
  };

  return {
    openCamera: takePhotoFromCamera,
    openPicker: choosePhotoFromLibrary,
  };
};

export default useUploadPhoto;
