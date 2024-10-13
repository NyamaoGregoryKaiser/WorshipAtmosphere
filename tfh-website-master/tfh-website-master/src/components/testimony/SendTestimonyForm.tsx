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
  summary: string;
  content: string;
  phoneNumber: string;
  email: string;
  loading: boolean;
  consent: boolean;
}

const SendTestimonyForm = () => {
  const router = useRouter();
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      fullName: '',
      summary: '',
      content: '',
      phoneNumber: '',
      loading: false,
      source: 'web',
      consent: false,
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      email: yup.string().email('Enter a valid email').required('Email is required'),
      fullName: yup.string().required('Required'),
      summary: yup.string().required('Required'),
      content: yup.string().required('Required'),
      phoneNumber: yup.string().required('Required'),
      consent: yup
        .bool()
        .oneOf([true], 'Please provide your consent to share your testimony'),
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
        `${response.data?.message}, Your testimony would be reviewed for approval`,
        'success'
      );
      formik.resetForm();

      router.push('/testimony');
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
      <LabelInput
        formik={formik}
        name='summary'
        label='Title of your Testimony'
        className='mb-[29px]'
      />
      <TextArea
        formik={formik}
        name='content'
        label='Your Testimony'
        placeholder='Write your testimony here...'
        className='mb-[29px]'
        rows={10}
      />

      <Checkbox
        id='consent'
        checked={formik.values.consent}
        onChange={() => {
          formik.setFieldTouched('consent', true);
          formik.setFieldValue('consent', !formik.values.consent);
        }}
        label='I consent that worship atmosphere’s House can share my testimony publicly to encourage others'
      />
      {formik.touched.consent && formik.errors.consent && (
        <div className='error mt-2'>{formik.errors.consent}</div>
      )}
      <Button type='submit' className='mt-20 !w-[313px]' loading={formik.values.loading}>
        Submit Testimony
      </Button>
    </form>
  );
};

export default SendTestimonyForm;
