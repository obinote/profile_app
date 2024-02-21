import {yupResolver} from '@hookform/resolvers/yup';
import InputText from 'components/ui/InputText';
import React, {forwardRef, useImperativeHandle} from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {BasicProfile} from 'reduxs/features/profileSlice';
import {basicProfileSelector} from 'reduxs/selectors';
import tw from 'utils/tailwind';
import * as Yup from 'yup';

interface IProps {
  onSubmit: SubmitHandler<BasicProfile>;
}

export type FormProfileHandler = {
  onSubmit: () => void;
};

const FormProfile: React.ForwardRefRenderFunction<
  FormProfileHandler,
  IProps
> = ({onSubmit}, forwardedRef) => {
  const {t} = useTranslation();
  const basicProfile = useSelector(basicProfileSelector);
  const methods = useForm<BasicProfile>({
    defaultValues: {
      email: basicProfile.email,
      name: basicProfile.name,
      phone: basicProfile.phone,
    },
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required().email(),
        phone: Yup.string()
          .required()
          .test('max_len', t('errors.max_x_char', {xChar: '20'}), val => {
            if (val) {
              if (val.length > 20) {
                return false;
              }
            }
            return true;
          })
          .test('format', t('errors.phone_number_zero_format'), val => {
            if (val) {
              const patern = /^0\d*$/;
              if (patern.test(val)) {
                return true;
              } else {
                return false;
              }
            }
            return true;
          })
          .test('min_len', t('errors.min_x_char', {xChar: '6'}), val => {
            if (val) {
              if (val.length < 6) {
                return false;
              }
            }
            return true;
          }),
      }),
    ),
  });

  useImperativeHandle(
    forwardedRef,
    () => {
      return {
        onSubmit: methods.handleSubmit(onSubmit),
      };
    },
    [methods, onSubmit],
  );

  return (
    <FormProvider {...methods}>
      <View style={tw.style('w-12/12 mt-4')}>
        <InputText
          name="name"
          props={{
            label: t('label.name'),
            placeholder: t('placeholder.name'),
            autoFocus: true,
          }}
          inputStyle={tw.style('text-2xl')}
        />
      </View>
      <View style={tw.style('w-12/12 mt-4')}>
        <InputText
          name="email"
          props={{
            label: t('label.email'),
            placeholder: t('placeholder.email'),
          }}
          inputStyle={tw.style('text-2xl')}
        />
      </View>
      <View style={tw.style('w-12/12 mt-4')}>
        <InputText
          name="phone"
          props={{
            label: t('label.phone'),
            placeholder: t('placeholder.phone'),
          }}
          inputStyle={tw.style('text-2xl')}
        />
      </View>
    </FormProvider>
  );
};

export default forwardRef(FormProfile);
