import { appAxios } from '@/api/axios';
import Button from '@/common/Button';
import LabelInput from '@/common/LabelInput/LabelInput';
import AuthLayout from '@/components/auth/AuthLayout';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { useAppDispatch } from '@/store/hooks';
import { updateUser } from '@/store/slices/user';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import * as yup from 'yup';

const ResetPasswordPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { email, verificationCode } = router.query;

  interface FormValues {
    email: string | undefined;
    newPassword: string;
    confirmPassword: string;
    verificationCode: string;
    loading: boolean;
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      email: (email as string) || '',
      newPassword: '',
      confirmPassword: '',
      verificationCode: (verificationCode as string) || '',
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
      return router.push('/auth/forgot-password');
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

      router.push('/auth/login');
    } catch (error) {
      sendCatchFeedback(error);
    }

    formik.setFieldValue('loading', false);
  };

  const resendEmail = async () => {
    formik.setFieldValue('loading', true);

    try {
      const response = await appAxios.post('/user/reset-password', {
        email: email,
      });

      sendFeedback(response.data?.message, 'success');
    } catch (error) {
      sendCatchFeedback(error);
    }

    formik.setFieldValue('loading', false);
  };

  return (
    <AuthLayout>
      <LabelInput
        labelClass='!text-white'
        formik={formik}
        name='newPassword'
        placeholder='New Password'
        label='New Password'
        type='password'
        className='mb-5 w-full'
      />
      <LabelInput
        labelClass='!text-white'
        formik={formik}
        name='confirmPassword'
        placeholder='Confirm Password'
        label='Confirm Password'
        type='password'
        className='mb-5 w-full'
      />
      <LabelInput
        labelClass='!text-white'
        formik={formik}
        name='verificationCode'
        placeholder='Verification Code'
        label='Verification Code'
        className='mb-5 w-full'
      />
      <Button
        className='mt-5 mb-[30px] !w-full'
        disabled={!formik.isValid}
        onClick={() => formik.handleSubmit()}
        loading={formik.values.loading}
      >
        Update Password
      </Button>
      <button
        className='text-white font-bold mb-[77px] bg-transparent outline-none border-none'
        onClick={() => {
          if (email) {
            resendEmail();
          } else {
            router.push('/auth/forgot-password');
          }
        }}
      >
        Resend verification code
      </button>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
