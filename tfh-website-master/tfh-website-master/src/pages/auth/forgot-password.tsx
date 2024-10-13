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

const ForgotPasswordPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

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
      email: yup.string().email('Enter a valid email').required('Email is required'),
    }),
  });

  const submitValues = async () => {
    try {
      formik.setFieldValue('loading', true);

      const response = await appAxios.post('/user/reset-password', {
        email: formik.values.email,
      });

      sendFeedback(response.data?.message, 'success');
      formik.resetForm();

      router.push('/auth/reset-password?email=' + formik.values.email);
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      formik.setFieldValue('loading', false);
    }
  };

  return (
    <AuthLayout>
      <LabelInput
        formik={formik}
        name='email'
        placeholder='Email Address'
        type='email'
        className='mb-5 w-full'
      />

      <Button
        className='mt-5 mb-[30px] !w-full'
        disabled={!formik.isValid}
        onClick={() => formik.handleSubmit()}
        loading={formik.values.loading}
      >
        Reset Password
      </Button>
      <Link className='text-white font-bold mb-[77px]' href='/auth/login'>
        Back to Login
      </Link>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
