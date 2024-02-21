import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import tw from 'utils/tailwind';

const Main: React.FC<{}> = () => {
  const navigation = useNavigation();
  return (
    <View style={tw.style('flex-1 bg-blue-200')}>
      <Text>Main Page</Text>
      <Button
        title="go profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default Main;
