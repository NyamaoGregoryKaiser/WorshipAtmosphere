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

const LoginPage = () => {
  const router = useRouter();
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
      email: yup.string().email('Enter a valid email').required('Email is required'),
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
        updateUser({ user: { ...response.data?.user, token: response.data?.token } })
      );

      formik.resetForm();

      router.push('/');
    } catch (error) {
      sendCatchFeedback(error);
    }

    formik.setFieldValue('loading', false);
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
      <LabelInput
        formik={formik}
        name='password'
        placeholder='Password'
        type='password'
        className='mb-5 w-full'
      />
      <Button
        className='mt-5 mb-[30px] !w-full'
        disabled={!formik.isValid}
        onClick={() => formik.handleSubmit()}
        loading={formik.values.loading}
      >
        Log in
      </Button>
      <Link className='text-white font-bold mb-[77px]' href='/auth/forgot-password'>
        Forgot Password?
      </Link>
      <Link className='text-white font-bold' href='/auth/register'>
        Don’t have an account? <span className='text-secondary'>Sign Up</span>
      </Link>
    </AuthLayout>
  );
};

export default LoginPage;
