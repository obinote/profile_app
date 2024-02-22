import Toast from 'react-native-simple-toast';

type FileTypes = {
  size: number;
};
export const validationFileSize = (file: FileTypes) =>
  file.size / 1024 / 1024 <= 10; // 10 MB

export const message = {
  success: (text: string) => Toast.showWithGravity(text, Toast.LONG, Toast.TOP),
  error: (text: string) => Toast.showWithGravity(text, Toast.LONG, Toast.TOP),
  warning: (text: string) => Toast.showWithGravity(text, Toast.LONG, Toast.TOP),
  info: (text: string) => Toast.showWithGravity(text, Toast.LONG, Toast.TOP),
  show: (text: string) => Toast.showWithGravity(text, Toast.LONG, Toast.TOP),
};
