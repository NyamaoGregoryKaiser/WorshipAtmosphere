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
import EmailIcon from '../../../assets/icons/svgs/auth/email.svg';
import { fontScale } from '../../../functions/font';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

const ForgotPasswordUpdateScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<any, screenNamesTypes['FORGOT_PASSWORD_UPDATE']>) => {
  const routeParams = route.params as Readonly<{ email: string }> | undefined;

  interface FormValues {
    email: string | undefined;
    newPassword: string;
    confirmPassword: string;
    verificationCode: string;
    loading: boolean;
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      email: routeParams?.email,
      newPassword: '',
      confirmPassword: '',
      verificationCode: '',
      loading: false,
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      newPassword: yup.string().required('Password is required'),
      confirmPassword: yup
        .string()
        .required('Confirm your password')
        .oneOf([yup.ref('newPassword')], "Passwords don't match"),
      verificationCode: yup.string().required('Required'),
    }),
    enableReinitialize: true,
  });

  const submitValues = async () => {
    // In case the email param is lost along the way
    if (!formik.values.email) {
      return navigation.navigate(screenNames.FORGOT_PASSWORD);
    }

    formik.setFieldValue('loading', true);

    try {
      const response = await appAxios.post('/user/reset-password/update', {
        email: formik.values.email,
        newPassword: formik.values.newPassword,
        verificationCode: formik.values.verificationCode,
      });

      sendFeedback(response.data?.message, 'success');
      formik.resetForm();

      navigation.navigate(screenNames.LOGIN);
    } catch (error) {
      sendCatchFeedback(error);
    }

    formik.setFieldValue('loading', false);
  };

  const resendEmail = async () => {
    formik.setFieldValue('loading', true);

    try {
      const response = await appAxios.post('/user/reset-password', {
        email: routeParams?.email,
      });

      sendFeedback(response.data?.message, 'success');
    } catch (error) {
      sendCatchFeedback(error);
    }

    formik.setFieldValue('loading', false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <EmailIcon />
      <Text style={styles.mainText}>Email Sent</Text>
      <Text style={styles.subText}>
        We've sent you a verification code for your password recovery process.
      </Text>

      <CustomInput
        formik={formik}
        name="newPassword"
        placeholder="New Password"
        secureTextEntry
        containerStyle={{
          marginTop: 16,
        }}
      />
      <CustomInput
        formik={formik}
        name="confirmPassword"
        placeholder="Confirm Password"
        secureTextEntry
        containerStyle={{
          marginTop: 16,
        }}
      />
      <CustomInput
        formik={formik}
        name="verificationCode"
        placeholder="Verification Code"
        containerStyle={{
          marginTop: 16,
        }}
      />
      <Button
        title="Set New Password"
        buttonStyle={{
          marginTop: 25,
          marginBottom: 40,
          backgroundColor: !formik.isValid
            ? appColors.grey
            : appColors.secondaryColor,
        }}
        disabled={!formik.isValid}
        onPress={formik.handleSubmit}
        loading={formik.values.loading}
      />

      <TouchableOpacity
        onPress={() => {
          if (routeParams?.email) {
            resendEmail();
          } else {
            navigation.navigate(screenNames.FORGOT_PASSWORD);
          }
        }}>
        <Text style={styles.resendText}>
          Didn't get the email?{' '}
          <Text
            style={{
              fontFamily: DMBold,
              color: appColors.secondaryColor,
            }}>
            Resend
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
    paddingVertical: scaledHeight(22),
    backgroundColor: appColors.white,
    alignItems: 'center',
  },

  mainText: {
    fontFamily: DMBold,
    fontSize: fontScale(24),
    color: appColors.primaryColor,
    marginTop: scaledHeight(12),
    marginBottom: scaledHeight(10),
  },
  subText: {
    fontFamily: DMRegular,
    fontSize: fontScale(12),
    color: appColors.primaryColor,
    marginBottom: scaledHeight(40),
    textAlign: 'center',
  },

  resendText: {
    fontFamily: DMRegular,
    fontSize: fontScale(10),
    color: appColors.primaryColor,
  },
});

export default ForgotPasswordUpdateScreen;
