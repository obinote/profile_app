import {Text} from '@rneui/themed';
import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import tw from 'utils/tailwind';

type TViewText = {
  label: string;
  value: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const ViewText: React.FC<TViewText> = ({label, value, containerStyle}) => {
  return (
    <View style={containerStyle}>
      <Text style={tw.style('text-zinc-500 text-base font-nunitoBold mb-1')}>
        {label}
      </Text>
      <Text style={tw.style('text-black font-nunitoBold text-2xl')}>
        {value}
      </Text>
    </View>
  );
};

export default ViewText;
