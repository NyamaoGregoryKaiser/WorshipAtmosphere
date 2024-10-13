import { appAxios } from '@/api/axios';
import Button from '@/common/Button';
import Dropdown from '@/common/Dropdown';
import LabelInput from '@/common/LabelInput/LabelInput';
import AuthLayout from '@/components/auth/AuthLayout';
import churchBranches from '@/components/auth/churchBranches';
import genders from '@/components/auth/genders';
import maritalStatuses from '@/components/auth/maritalStatuses';
import titles from '@/components/auth/titles';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { useAppDispatch } from '@/store/hooks';
import { updateUser } from '@/store/slices/user';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import * as yup from 'yup';

const RegisterPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  interface FormValues {
    titles: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    churchCenter: string;
    dateOfBirth: Date | undefined;
    member: boolean | undefined;
    registrationSource: string;
    loading: boolean;
    gender: '' | 'Male' | 'Female';
    marital: 'Married' | 'Single' | 'Widowed' | 'Divorced' | 'Engaged' | '';
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      titles: '',
      email: '',
      password: '',
      address: '',
      confirmPassword: '',
      churchCenter: '',
      dateOfBirth: undefined,
      gender: '',
      firstName: '',
      marital: '',
      lastName: '',
      member: undefined,
      phoneNumber: '',
      registrationSource: 'mobile',
      loading: false,
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      titles: yup.string().required('Title is required'),
      email: yup.string().email('Enter a valid email').required('Email is required'),
      password: yup.string().required('Password is required'),
      confirmPassword: yup
        .string()
        .required('Confirm your password')
        .oneOf([yup.ref('password')], "Passwords don't match"),
      dateOfBirth: yup.string().required('Required'),
      firstName: yup.string().required('Required'),
      lastName: yup.string().required('Required'),
      address: yup.string().required('Required'),
      gender: yup.string().required('Required'),
      marital: yup.string().required('Required'),
      member: yup.boolean().required('Required'),
      churchCenter: yup.string().when('member', {
        is: true,
        then: (schema) => schema.required('Required'),
      }),
      phoneNumber: yup.string().required('Required'),
    }),
    enableReinitialize: true,
  });

  const submitValues = async () => {
    try {
      formik.setFieldValue('loading', true);
      const response = await appAxios.post('/user/register', {
        titles: formik.values.titles?.trim(),
        email: formik.values.email?.trim(),
        password: formik.values.password,
        phone: formik.values.phoneNumber?.trim(),
        member: formik.values.member,
        lname: formik.values.lastName?.trim(),
        fname: formik.values.firstName?.trim(),
        dob: formik.values.dateOfBirth,
        churchCenter: formik.values.churchCenter,
        registrationSource: formik.values.registrationSource,
        address: formik.values.address?.trim(),
        gender: formik.values.gender,
        marital: formik.values.marital,
      });

      sendFeedback(response.data?.message, 'success');
      formik.resetForm();

      router.push('/auth/login');
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      formik.setFieldValue('loading', false);
    }
  };

  return (
    <AuthLayout>
      <Dropdown
        values={titles.map((item) => ({
          label: item,
          value: item,
        }))}
        label='Title'
        name='titles'
        formik={formik}
        className='mb-5 w-full'
        labelClass='!text-white'
      />
      <LabelInput
        labelClass='!text-white'
        formik={formik}
        name='firstName'
        placeholder='First Name'
        label='First Name'
        className='mb-5 w-full'
      />
      <LabelInput
        labelClass='!text-white'
        formik={formik}
        name='lastName'
        placeholder='Last Name'
        label='Last Name'
        className='mb-5 w-full'
      />

      <LabelInput
        labelClass='!text-white'
        formik={formik}
        name='address'
        label='Address'
        placeholder='Address'
        className='mb-5 w-full'
      />
      <Dropdown
        values={genders.map((item) => ({
          label: item,
          value: item,
        }))}
        label='Gender'
        name='gender'
        formik={formik}
        className='mb-5 w-full'
        labelClass='!text-white'
      />

      <LabelInput
        labelClass='!text-white'
        formik={formik}
        name='email'
        placeholder='Email Address'
        label='Email Address'
        type='email'
        className='mb-5 w-full'
      />
      <LabelInput
        labelClass='!text-white'
        formik={formik}
        name='phoneNumber'
        placeholder='Phone Number'
        label='Phone Number'
        type='tel'
        className='mb-5 w-full'
      />
      <LabelInput
        labelClass='!text-white'
        formik={formik}
        name='dateOfBirth'
        placeholder='Date of Birth'
        label='Date of Birth'
        className='mb-5 w-full'
        type='date'
      />
      <Dropdown
        values={maritalStatuses.map((item) => ({
          label: item,
          value: item,
        }))}
        label='Marital Status'
        name='marital'
        formik={formik}
        className='mb-5 w-full'
        labelClass='!text-white'
      />
      <Dropdown
        values={[
          { label: 'Yes', value: true },
          { label: 'No', value: false },
        ].map((item) => ({
          label: item.label,
          value: item.value,
        }))}
        label="Are you a member of worship atmosphere House"
        name='member'
        formik={formik}
        className='mb-5 w-full'
        labelClass='!text-white'
      />

      {formik.values.member && (
        <Dropdown
          values={churchBranches.map((item) => ({
            label: item.name,
            value: item.name,
          }))}
          label='Which branch are you in?'
          name='churchCenter'
          formik={formik}
          className='mb-5 w-full'
          labelClass='!text-white'
        />
      )}
      <LabelInput
        labelClass='!text-white'
        formik={formik}
        name='password'
        placeholder='Password'
        label='Password'
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
      <Button
        className='mt-5 mb-[30px] !w-full'
        disabled={!formik.isValid}
        onClick={() => formik.handleSubmit()}
        loading={formik.values.loading}
      >
        Create Account
      </Button>

      <Link className='text-white font-bold ' href='/auth/login'>
        Have an account? <span className='text-secondary'>Login</span>
      </Link>
    </AuthLayout>
  );
};

export default RegisterPage;
