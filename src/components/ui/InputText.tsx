import {Input, InputProps} from '@rneui/themed';
import React, {useCallback, useEffect} from 'react';
import {Controller, useFormContext, useWatch} from 'react-hook-form';
import {StyleProp, TextStyle, View} from 'react-native';
import tw from 'utils/tailwind';

type TInputText = {
  name: string;
  defaulValue?: string;
  props?: InputProps;
  inputStyle?: StyleProp<TextStyle>;
  onChange?: (text: string | undefined) => void;
};

const InputText: React.FC<TInputText> = ({
  name,
  defaulValue = '',
  props,
  inputStyle,
  onChange,
}) => {
  const {control, setError, setValue} = useFormContext();
  const textValue = useWatch({control, name});

  const isMultiLine = props?.multiline || false;

  const handleChangeText = useCallback(
    (text: string | undefined) => {
      setValue(name, text, {shouldValidate: true, shouldDirty: true});
      setError(name, {}, {shouldFocus: true});
    },
    [name, setError, setValue],
  );

  const handleEndEditing = useCallback(() => {
    if (typeof onChange === 'function' && textValue !== defaulValue) {
      onChange(textValue);
    }
  }, [defaulValue, onChange, textValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (
        typeof onChange === 'function' &&
        defaulValue &&
        defaulValue !== textValue
      ) {
        onChange(textValue);
      }
    }, 0);

    return () => {
      clearTimeout(handler);
    };
  }, [defaulValue, name, onChange, textValue]);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaulValue}
      render={({field: {onBlur, value}, fieldState: {error}}) => {
        return (
          <View style={tw.style('flex-row items-start mb-4')}>
            <Input
              onBlur={onBlur}
              onChangeText={text => handleChangeText(text)}
              onEndEditing={handleEndEditing}
              value={value}
              inputStyle={[tw.style('font-nunitoBold py-0'), inputStyle]}
              leftIcon
              labelStyle={tw`font-nunitoBold text-sm mb-2`}
              errorMessage={error?.message || ''}
              renderErrorMessage={!!error?.message}
              errorStyle={tw.style('font-nunito text-sm')}
              inputContainerStyle={tw.style(
                'py-0 font-nunito text-base border-b-[1px]',
                {
                  'border-2 border-[#D4D4D4] py-3': isMultiLine,
                },
              )}
              containerStyle={tw.style('self-end p-0')}
              {...props}
            />
          </View>
        );
      }}
    />
  );
};

export default InputText;
