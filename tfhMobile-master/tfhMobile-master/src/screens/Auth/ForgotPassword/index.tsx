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
import { fontScale } from '../../../functions/font';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

const ForgotPasswordScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['FORGOT_PASSWORD']>) => {
  interface FormValues {
    email: string;
    loading: boolean;
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
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
    }),
  });

  const submitValues = async () => {
    formik.setFieldValue('loading', true);

    try {
      const response = await appAxios.post('/user/reset-password', {
        email: formik.values.email,
      });

      sendFeedback(response.data?.message, 'success');
      formik.resetForm();

      navigation.navigate(screenNames.FORGOT_PASSWORD_UPDATE, {
        email: formik.values.email,
      });
    } catch (error) {
      sendCatchFeedback(error);
    }

    formik.setFieldValue('loading', false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.mainText}>Reset Password</Text>
      <Text style={styles.subText}>
        We understand you are not a machine. Things like this happens. Enter
        your email address to reset your password.
      </Text>
      <CustomInput
        formik={formik}
        name="email"
        placeholder="Email Address"
        keyboardType="email-address"
      />

      <Button
        title="Reset"
        buttonStyle={{
          marginTop: 31,
        }}
        onPress={formik.handleSubmit}
        loading={formik.values.loading}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledWidth(30),
    flexGrow: 1,
    paddingVertical: scaledHeight(75),
    backgroundColor: appColors.white,
  },

  mainText: {
    fontFamily: DMBold,
    fontSize: fontScale(24),
    color: appColors.primaryColor,
    marginBottom: scaledHeight(10),
  },
  subText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.primaryColor,
    marginBottom: scaledHeight(15),
  },
});

export default ForgotPasswordScreen;
