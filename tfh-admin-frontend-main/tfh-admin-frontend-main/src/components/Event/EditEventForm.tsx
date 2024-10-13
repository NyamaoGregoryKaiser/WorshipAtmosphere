import { useFormik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import * as yup from 'yup';
import {
  closeLoadingIndicator,
  openLoadingIndicator,
} from '../../store/slices/loadingIndicator';
import { appAxios } from '../../api/axios';
import { sendCatchFeedback, sendFeedback } from '../../functions/feedback';
import { useNavigate } from 'react-router-dom';
import LabelInput from '../../common/LabelInput/LabelInput';
import Button from '../../common/Button/Button';
import TextArea from '../../common/TextArea/TextArea';
import { getUserSession } from '../../functions/userSession';
import { EventType } from '../../../types/types';
import Dropdown from '../../common/Dropdown/Dropdown';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import RequiredRegistrationDetails from './RequiredRegistrationDetails';
import TextEditor from '../../common/TextEditor';

function EditEventForm({ event }: { event: EventType }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = getUserSession();

  interface Event {
    name: string;
    theme: string;
    mainText: string;
    date: string;
    time: string;
    allowRegistration: boolean;
    limitedNumberRegistration: boolean;
    registrationNumberLimit: number;
    limitedDateRegistration: boolean;
    registrationDateLimit: string;
    poster: string;
    changePoster: boolean;
    description?: string;
    location: string;
    eventType: 'offline' | 'online';
  }

  const formik = useFormik<Event>({
    initialValues: {
      name: event.name || '',
      time: event.time || '',
      mainText: event.mainText || '',
      theme: event.theme || '',
      allowRegistration: event.allowRegistration ? true : false,
      limitedDateRegistration: event.limitedDateRegistration ? true : false,
      limitedNumberRegistration: event.limitedNumberRegistration ? true : false,
      registrationDateLimit: event.registrationDateLimit
        ? new Date(event.registrationDateLimit).toISOString().split('T')[0]
        : undefined || '',
      registrationNumberLimit: event.registrationNumberLimit || 0,
      date: event.date
        ? new Date(event.date).toISOString().split('T')[0]
        : undefined || '',
      changePoster: false,
      poster: '',
      eventType: event.eventType || 'offline',
      location: event.location || '',
      description: event.description || '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      date: yup.string().required('Required'),
      allowRegistration: yup.boolean().required('Required'),
      limitedDateRegistration: yup.boolean().required('Required'),
      limitedNumberRegistration: yup.boolean().required('Required'),
      name: yup.string().required('Required'),
      time: yup.string().required('Required'),
      changePoster: yup.boolean().required('Required'),
    }),
    enableReinitialize: true,
  });

  const randomID = React.useMemo(() => uuidv4(), []);

  const [registrationDetails, setRegistrationDetails] = React.useState<any>({
    [randomID]: {
      id: randomID,
      name: '',
      type: 'text',
    },
  });

  React.useEffect(() => {
    if (event) {
      setRegistrationDetails(
        event.requiredRegistrationDetails.reduce(
          (initial, detail) => ({
            ...initial,
            [detail?.id || uuidv4()]: {
              id: detail?.id || uuidv4(),
              name: detail?.name?.replace(/_/g, ' '),
              type: detail?.type,
              options: detail?.options,
            },
          }),
          {}
        )
      );
    }
  }, [event, setRegistrationDetails]);

  const submitValues = async () => {
    // Check for poster upload error
    if (formik.values.changePoster && !formik.values.poster) {
      return sendFeedback('Select a poster image', 'error');
    }

    let registrationDetailError = Object.values(registrationDetails)?.find(
      (detail: any) => !detail.name || !detail.type
    );

    if (registrationDetailError && formik.values.allowRegistration) {
      return sendFeedback(
        'Name and type is required for each registration detail',
        'error'
      );
    }

    const formData = new FormData();
    {
      formik.values.changePoster && formData.append('poster', formik.values.poster);
    }
    formData.append('name', formik.values.name || '');
    formData.append('eventType', formik.values.eventType);
    formData.append('theme', formik.values.theme);

    formik.values.description &&
      formData.append('description', formik.values.description);
    formData.append('mainText', formik.values.mainText);
    formData.append('date', formik.values.date);
    formData.append('time', formik.values.time);
    formData.append('allowRegistration', formik.values.allowRegistration ? '1' : '0'); // allowed way to specify true and false in formdata
    formData.append(
      'limitedNumberRegistration',
      formik.values.limitedNumberRegistration ? '1' : '0'
    );
    formData.append(
      'registrationNumberLimit',
      formik.values.registrationNumberLimit?.toString()
    );
    formData.append(
      'limitedDateRegistration',
      formik.values.limitedDateRegistration ? '1' : '0'
    );
    formData.append('registrationDateLimit', formik.values.registrationDateLimit);
    formik.values.allowRegistration &&
      formData.append(
        'requiredRegistrationDetails',
        JSON.stringify(Object.values(registrationDetails))
      );

    dispatch(openLoadingIndicator({ text: 'Updating Event' }));
    try {
      const response = await appAxios.patch('/event/' + event.id, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: currentUser ? currentUser?.token : null,
        },
      });
      sendFeedback(response.data?.message, 'success');

      navigate('/event/view/' + response.data.event.id);
    } catch (error) {
      sendCatchFeedback(error);
    }
    dispatch(closeLoadingIndicator());
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <LabelInput formik={formik} name='name' label='Event name' className='mb-5' />
      <Dropdown
        values={[
          {
            label: 'Offline',
            value: 'offline',
          },
          {
            label: 'Online',
            value: 'online',
          },
        ]}
        label='Event Type'
        name='eventType'
        defaultValue={{
          label: formik.values.eventType,
          value: formik.values.eventType,
        }}
        formik={formik}
        className='mb-5'
      />
      <LabelInput formik={formik} name='date' label='Date' className='mb-5' type='date' />
      <LabelInput
        formik={formik}
        name='time'
        label='Time'
        hint='Add all the schedules for the event'
        className='mb-5'
      />
      <LabelInput formik={formik} name='theme' label='Theme' className='mb-5' />
      <LabelInput
        formik={formik}
        name='location'
        label='Event Location'
        className='mb-5'
      />
      <Dropdown
        values={[
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ]}
        label='Change Poster'
        name='changePoster'
        defaultValue={{
          label: formik.values.changePoster ? 'Yes' : 'No',
          value: formik.values.changePoster,
        }}
        formik={formik}
        className='mb-5'
      />
      {formik.values.changePoster && (
        <div className='flex flex-col gap-2 mb-5'>
          <label htmlFor='poster'>Event Poster</label>
          <input
            type='file'
            name='poster'
            id='poster'
            className='border-lightGrey border-2'
            accept='image/*'
            required
            onChange={(e: any) => {
              const file = e.target.files[0];
              formik.setFieldValue('poster', file);
            }}
          />
        </div>
      )}
      <LabelInput
        formik={formik}
        name='mainText'
        label='Main Bible Text'
        className='mb-5'
      />
      <TextEditor
        placeholder='Description'
        label='Event Description (optional)'
        containerClass='mb-5'
        name='description'
        updateState={(value) => formik.setFieldValue('description', value)}
        value={event?.description}
        required={false}
      />
      <Dropdown
        values={[
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ]}
        label='Allow Registration'
        name='allowRegistration'
        defaultValue={{
          label: formik.values.allowRegistration ? 'Yes' : 'No',
          value: formik.values.allowRegistration,
        }}
        formik={formik}
        className='mb-5'
      />
      {formik.values.allowRegistration && (
        <RequiredRegistrationDetails
          registrationDetails={registrationDetails}
          setRegistrationDetails={setRegistrationDetails}
        />
      )}
      {formik.values.allowRegistration && (
        <Dropdown
          values={[
            {
              label: 'Yes',
              value: true,
            },
            {
              label: 'No',
              value: false,
            },
          ]}
          label='Registration is limited by date'
          name='limitedDateRegistration'
          defaultValue={{
            label: formik.values.limitedDateRegistration ? 'Yes' : 'No',
            value: formik.values.limitedDateRegistration,
          }}
          formik={formik}
          className='mb-5'
        />
      )}

      {/* When the registration is limited by date */}
      {formik.values.limitedDateRegistration && (
        <LabelInput
          formik={formik}
          name='registrationDateLimit'
          label='Date Limit'
          className='mb-5'
          type='date'
        />
      )}

      {formik.values.allowRegistration && (
        <Dropdown
          values={[
            {
              label: 'Yes',
              value: true,
            },
            {
              label: 'No',
              value: false,
            },
          ]}
          label='Registration is limited by number'
          name='limitedNumberRegistration'
          defaultValue={{
            label: formik.values.limitedNumberRegistration ? 'Yes' : 'No',
            value: formik.values.limitedNumberRegistration,
          }}
          formik={formik}
          className='mb-5'
        />
      )}

      {/* When the registration is limited by date */}
      {formik.values.limitedNumberRegistration && (
        <LabelInput
          formik={formik}
          name='registrationNumberLimit'
          label='Number Limit'
          className='mb-5'
          type='number'
        />
      )}
      <Button type='submit' className='mt-10'>
        Update Event
      </Button>
    </form>
  );
}

export default EditEventForm;
