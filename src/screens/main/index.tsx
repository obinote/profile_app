import {useNavigation} from '@react-navigation/native';
import {Avatar} from '@rneui/themed';
import ButtonAction from 'components/ui/ButtonAction';
import ViewText from 'components/ui/ViewText';
import LocalSvgIcon from 'components/ui/icons';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
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
    <View style={tw.style('flex-1')}>
      <View style={tw.style('flex-1 flex-col items-center justify-start p-6')}>
        <View style={tw.style('relative')}>
          <Avatar
            size={200}
            rounded
            containerStyle={tw`mb-8 border border-blue-300`}
            source={{uri: profile.picture}}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Upload')}>
            <View
              style={tw`absolute bottom-12 right-2 bg-sky-100 p-2 rounded-full border-2 border-blue-300`}>
              <LocalSvgIcon name="upload" />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={tw.style(
            'flex-col self-start border-blue-300 border p-4 rounded-md w-full flex-1',
          )}>
          <ViewText
            label={t('label.name')}
            value={profile.name}
            containerStyle={tw`mb-4`}
          />
          <ViewText
            label={t('label.email')}
            value={profile.email}
            containerStyle={tw`mb-4`}
          />
          <ViewText
            label={t('label.phone')}
            value={profile.phone}
            containerStyle={tw`mb-4`}
          />
        </View>
      </View>
      <View
        style={tw.style(
          'flex-row bg-white items-center w-full justify-center py-2 shadow gap-x-2',
        )}>
        <ButtonAction
          title={t('button.update')}
          containerStyle={tw.style('w-11/12')}
          onPress={updateProfile}
        />
      </View>
    </View>
  );
};

export default Main;
