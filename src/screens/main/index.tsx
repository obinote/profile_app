import {useNavigation} from '@react-navigation/native';
import ButtonAction from 'components/ui/ButtonAction';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {profileSelector} from 'reduxs/selectors';
import tw from 'utils/tailwind';

const Main: React.FC<{}> = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const profile = useSelector(profileSelector);

  const updateProfile = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  return (
    <View style={tw.style('flex-1 bg-blue-200')}>
      <View style={tw.style('flex-1')}>
        <Text>{profile.name}</Text>
        <Text>{profile.email}</Text>
        <Text>{profile.phone}</Text>
      </View>
      <View
        style={tw.style(
          'flex-row bg-white items-center w-full justify-center py-2 shadow gap-x-2',
        )}>
        <ButtonAction
          // icon={<LocalSvgIcon name="logo" style={tw`mr-2`} />}
          title={t('button.update')}
          containerStyle={tw.style('w-11/12')}
          onPress={updateProfile}
        />
      </View>
    </View>
  );
};

export default Main;
