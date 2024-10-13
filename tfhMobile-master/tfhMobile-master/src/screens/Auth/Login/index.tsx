import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../../screenNamesTypes';
import { StyleSheet } from 'react-native';
import appColors from '../../../theme/colors';
import { DMBold, DMRegular } from '../../../theme/fonts';
import CustomInput from '../../../common/CustomInput';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '../../../common/Button';
import { appAxios } from '../../../api/axios';
import { sendCatchFeedback, sendFeedback } from '../../../functions/feedback';
import { screenNames } from '../../screenNames';
import { useAppDispatch } from '../../../store/hooks';
import { updateUser } from '../../../store/slices/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fontScale } from '../../../functions/font';
import { USER_STORAGE } from '../../../functions/environmentVariables';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['LOGIN']>) => {
  const dispatch = useAppDispatch();

  interface FormValues {
    email: string;
    password: string;
    loading: boolean;
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
      loading: false,
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
      password: yup.string().required('Password is required'),
    }),
  });

  const submitValues = async () => {
    formik.setFieldValue('loading', true);

    try {
      const response = await appAxios.post('/user/login', {
        email: formik.values.email?.trim(),
        password: formik.values.password,
      });

      sendFeedback(response.data?.message, 'success');

      // Set app state
      dispatch(
        updateUser({ user: response.data?.user, token: response.data?.token }),
      );

      // Set state in async storage
      await AsyncStorage.setItem(
        USER_STORAGE,
        JSON.stringify({
          user: response.data?.user,
          token: response.data?.token,
        }),
      );
      formik.resetForm();

      navigation.navigate(screenNames.HOME);
    } catch (error) {
      sendCatchFeedback(error);
    }

    formik.setFieldValue('loading', false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/brand/logo.png')}
        style={styles.image}
      />
      <Text style={styles.mainText}>Login</Text>
      <Text style={styles.subText}>Welcome back. We missed you!</Text>
      <CustomInput
        formik={formik}
        name="email"
        placeholder="Email Address"
        keyboardType="email-address"
      />
      <CustomInput
        formik={formik}
        name="password"
        placeholder="Password"
        secureTextEntry
        containerStyle={{
          marginTop: 16,
        }}
      />
      <Button
        title="Log in"
        buttonStyle={{
          marginTop: 58,
          marginBottom: 23,
          backgroundColor: !formik.isValid
            ? appColors.grey
            : appColors.secondaryColor,
        }}
        disabled={!formik.isValid}
        onPress={formik.handleSubmit}
        loading={formik.values.loading}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(screenNames.FORGOT_PASSWORD)}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(screenNames.REGISTER)}>
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text
            style={{
              fontFamily: DMBold,
              color: appColors.secondaryColor,
            }}>
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledWidth(30),
    flexGrow: 1,
    paddingVertical: scaledHeight(25),
    backgroundColor: appColors.white,
    alignItems: 'center',
  },
  image: {
    height: scaledHeight(122),
    resizeMode: 'contain',
  },
  mainText: {
    fontFamily: DMBold,
    fontSize: fontScale(24),
    color: appColors.primaryColor,
    marginTop: scaledHeight(27),
    marginBottom: scaledHeight(19),
  },
  subText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.primaryColor,
    marginBottom: scaledHeight(19),
  },
  forgotText: {
    fontFamily: DMBold,
    fontSize: fontScale(11),
    color: appColors.secondaryColor,
    marginBottom: scaledHeight(50),
  },
  signupText: {
    fontFamily: DMRegular,
    fontSize: fontScale(10),
    color: appColors.primaryColor,
  },
});

export default LoginScreen;
