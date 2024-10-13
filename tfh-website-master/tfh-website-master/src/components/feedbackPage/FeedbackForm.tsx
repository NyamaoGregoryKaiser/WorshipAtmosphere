import { appAxios } from '@/api/axios';
import Button from '@/common/Button';
import Checkbox from '@/common/Checkbox';
import LabelInput from '@/common/LabelInput/LabelInput';
import TextArea from '@/common/TextArea/TextArea';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as yup from 'yup';

interface FormValues {
  source: string;
  fullName: string;
  content: string;
  phoneNumber: string;
  email: string;
  loading: boolean;
}

const FeedbackForm = () => {
  const router = useRouter();
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      fullName: '',
      content: '',
      phoneNumber: '',
      loading: false,
      source: 'web',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      email: yup.string().email('Enter a valid email').required('Email is required'),
      fullName: yup.string().required('Required'),
      content: yup.string().required('Required'),
      phoneNumber: yup.string().required('Required'),
    }),
  });

  const submitValues = async () => {
    try {
      formik.setFieldValue('loading', true);
      const response = await appAxios.post('/feedback/new', {
        email: formik.values.email,
        source: formik.values.source,
        fullName: formik.values.fullName,
        content: formik.values.content,
        phoneNumber: formik.values.phoneNumber,
      });

      sendFeedback(response.data?.message, 'success');
      formik.resetForm();
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      formik.setFieldValue('loading', false);
    }
  };
  return (
    <form className='w-full flex flex-col' onSubmit={formik.handleSubmit}>
      <LabelInput
        formik={formik}
        name='fullName'
        label='Full Name'
        className='mb-[29px]'
      />
      <LabelInput formik={formik} name='email' label='Email' className='mb-[29px]' />
      <LabelInput
        formik={formik}
        name='phoneNumber'
        label='Phone number'
        className='mb-[29px]'
        type='tel'
      />

      <TextArea
        formik={formik}
        name='content'
        label='Your Feedback'
        placeholder='Write your feedback here...'
        className='mb-[29px]'
        rows={10}
      />

      <Button type='submit' className='mt-20 !w-[313px]' loading={formik.values.loading}>
        Submit Feedback
      </Button>
    </form>
  );
};

export default FeedbackForm;
