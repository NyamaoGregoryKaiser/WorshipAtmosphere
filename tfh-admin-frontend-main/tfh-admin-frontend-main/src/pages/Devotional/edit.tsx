import React from 'react';
import { useParams } from 'react-router-dom';
import { appAxios } from '../../api/axios';
import BackButton from '../../common/Button/BackButton';
import EditDevotionalForm from '../../components/Devotional/EditDevotionalForm';
import AppLayout from '../../layout/AppLayout';
import { useAppDispatch } from '../../store/hooks';
import {
  closeLoadingIndicator,
  openLoadingIndicator,
} from '../../store/slices/loadingIndicator';
import { DevotionalType } from '../../../types/types';

function EditDevotional() {
  const [devotionalDetails, setDevotionalDetails] = React.useState<
    DevotionalType | undefined
  >(undefined);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getDevotional = async () => {
      dispatch(openLoadingIndicator({ text: 'Retrieving Devotional' }));

      try {
        const response = await appAxios.get('/devotional/view/' + id);
        setDevotionalDetails(response.data.devotional);
      } catch (error) {
        setDevotionalDetails(undefined);
      }
      dispatch(closeLoadingIndicator());
    };
    getDevotional();
  }, []);

  return (
    <AppLayout pageAction={<BackButton />} pageTitle='Edit Devotional'>
      <EditDevotionalForm devotional={devotionalDetails} />
    </AppLayout>
  );
}

export default EditDevotional;
