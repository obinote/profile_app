import ButtonAction from 'components/ui/ButtonAction';
import useUploadPhoto from 'hooks/useUploadPhoto';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {setPicture} from 'reduxs/features/profileSlice';
import {message, validationFileSize} from 'utils/helper';
import tw from 'utils/tailwind';

interface IProps {
  onDoneTake: () => void;
}

const ChoosePicture: React.FC<IProps> = ({onDoneTake}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const {openCamera, openPicker} = useUploadPhoto();

  const onOpenCamera = useCallback(async () => {
    try {
      const image = await openCamera({includeBase64: true});
      const isValid = validationFileSize(image);
      if (isValid) {
        dispatch(setPicture(`data:image/png;base64,${image.data}`));
        onDoneTake();
      } else {
        message.error(t('errors.maximum_image_size_is_10_mb'));
      }
    } catch (error) {
      console.log(error);
      message.error(t('errors.failed_to_open_camera'));
    }
  }, [dispatch, onDoneTake, openCamera, t]);

  const onOpenPicker = useCallback(async () => {
    try {
      const image = await openPicker({
        width: 300,
        height: 400,
        cropping: false,
        includeBase64: true,
      });

      const isValid = validationFileSize(image);
      if (isValid) {
        dispatch(setPicture(`data:image/png;base64,${image.data}`));
        onDoneTake();
      } else {
        message.error(t('errors.maximum_image_size_is_10_mb'));
      }
    } catch (error) {
      message.error(t('errors.failed_to_galery'));
    }
  }, [dispatch, onDoneTake, openPicker, t]);

  return (
    <>
      <ButtonAction
        title={t('text.pick_image')}
        buttonStyle={tw.style('border-0 bg-transparent justify-start')}
        titleStyle={tw.style('text-black text-lg font-nunitoBold')}
        onPress={onOpenCamera}
      />
      <ButtonAction
        title={t('text.upload_image')}
        buttonStyle={tw.style('border-0 bg-transparent justify-start')}
        titleStyle={tw.style('text-black text-lg font-nunitoBold')}
        onPress={onOpenPicker}
      />
    </>
  );
};

export default ChoosePicture;
