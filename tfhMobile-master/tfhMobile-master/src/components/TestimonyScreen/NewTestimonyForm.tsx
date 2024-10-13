import { View, Text } from 'react-native';
import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { screenNames } from '../../screens/screenNames';
import { sendCatchFeedback, sendFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import CustomInput from '../../common/CustomInput';
import Button from '../../common/Button';
import appColors from '../../theme/colors';
import { scaledHeight } from '../../functions/utils';

const NewTestimonyForm = ({
  navigateToScreen,
}: {
  navigateToScreen: (screenName: string) => void;
}) => {
  interface FormValues {
    source: string;
    fullName: string;
    summary: string;
    content: string;
    phoneNumber: string;
    email: string;
    loading: boolean;
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      fullName: '',
      summary: '',
      content: '',
      phoneNumber: '',
      loading: false,
      source: 'mobile',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
      fullName: yup.string().required('Required'),
      summary: yup.string().required('Required'),
      content: yup.string().required('Required'),
      phoneNumber: yup.string().required('Required'),
    }),
  });

  const submitValues = async () => {
    try {
      formik.setFieldValue('loading', true);
      const response = await appAxios.post('/testimony/new', {
        email: formik.values.email,
        source: formik.values.source,
        fullName: formik.values.fullName,
        summary: formik.values.summary,
        content: formik.values.content,
        phoneNumber: formik.values.phoneNumber,
      });

      sendFeedback(
        response.data?.message,
        'success',
        'Your testimony would be reviewed for approval',
      );
      formik.resetForm();

      navigateToScreen(screenNames.TESTIMONIES);
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      formik.setFieldValue('loading', false);
    }
  };

  return (
    <View style={{ gap: 10 }}>
      <CustomInput
        formik={formik}
        name="email"
        placeholder="Email Address"
        keyboardType="email-address"
      />
      <CustomInput formik={formik} name="fullName" placeholder="Full Name" />
      <CustomInput
        formik={formik}
        name="phoneNumber"
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <CustomInput
        formik={formik}
        name="summary"
        placeholder="Title of your Testimony"
      />
      <CustomInput
        formik={formik}
        name="content"
        placeholder="Share your testimony with us"
        numberOfLines={10}
        multiline={true}
        inputStyle={{
          height: 20 * 10,
        }}
        textAlignVertical="top"
      />
      <Button
        title="Submit Testimony"
        buttonStyle={{
          marginTop: scaledHeight(36),
          backgroundColor: !formik.isValid
            ? appColors.grey
            : appColors.secondaryColor,
        }}
        disabled={!formik.isValid}
        onPress={formik.handleSubmit}
        loading={formik.values.loading}
      />
    </View>
  );
};

export default NewTestimonyForm;
