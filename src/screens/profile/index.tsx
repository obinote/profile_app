import {useNavigation} from '@react-navigation/native';
import FormProfile, {
  FormProfileHandler,
} from 'components/app/profile/FormProfile';
import ButtonAction from 'components/ui/ButtonAction';
import React, {useCallback, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {BasicProfile, setProfile} from 'reduxs/features/profileSlice';
import tw from 'utils/tailwind';

const Profile: React.FC<{}> = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const formRef = useRef<FormProfileHandler>(null);

  const onSubmit = useCallback(
    async (values: BasicProfile) => {
      await dispatch(setProfile(values));
      navigation.goBack();
    },
    [dispatch, navigation],
  );

  const handleSubmit = useCallback(() => {
    formRef.current?.onSubmit();
  }, []);

  return (
    <View style={tw.style('flex-1')}>
      <View style={tw.style('flex-1 p-6 pt-2')}>
        <FormProfile onSubmit={onSubmit} ref={formRef} />
      </View>
      <View
        style={tw.style(
          'flex-row bg-white items-center w-full justify-center py-2 shadow',
        )}>
        <ButtonAction
          title={t('button.save')}
          containerStyle={tw.style('w-11/12')}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default Profile;
