import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {navigationRef} from './refNavigation';
import {ROUTES} from './routes';
import {useTranslation} from 'react-i18next';

const {Navigator, Screen, Group} =
  createNativeStackNavigator<RootStackParamList>();

function RootNavigator(): JSX.Element {
  const {t} = useTranslation();
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator initialRouteName={ROUTES.Main}>
        <Group
          screenOptions={{
            headerTitleAlign: 'center',
            animation: 'slide_from_right',
          }}>
          <Screen
            name={ROUTES.Main}
            getComponent={() => require('screens/main').default}
            options={{
              title: t('main.title'),
              headerShown: false,
            }}
          />
          <Screen
            name={ROUTES.Profile}
            getComponent={() => require('screens/profile').default}
            options={{
              title: t('profile.title'),
            }}
          />
          <Screen
            name={ROUTES.Upload}
            getComponent={() => require('screens/upload').default}
            options={{
              headerShown: false,
              animation: 'none',
              presentation: 'containedTransparentModal',
            }}
          />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
