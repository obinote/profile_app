import {Button} from '@rneui/themed';
import {ButtonProps} from '@rneui/base';
import React from 'react';
import tw from 'utils/tailwind';
import {StyleProp, TextStyle} from 'react-native';

interface BtnInterface extends ButtonProps {
  textStyle?: StyleProp<TextStyle>;
}

const ButtonAction: React.FC<BtnInterface> = props => {
  return (
    <Button
      radius={4}
      titleStyle={[tw.style('text-lg font-nunitoBold'), props.textStyle]}
      {...props}
    />
  );
};

export default ButtonAction;
