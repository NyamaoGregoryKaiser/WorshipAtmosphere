import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import SectionLoader from '../../common/Loader/SectionLoader';
import Pagination from '../../common/Pagination';
import EventCard from '../../components/EventScreen/EventCard';
import { DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import { sendCatchFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { setEventLoading, setEvents } from '../../store/slices/event';
import { EventType } from '../../types/types';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const EventsScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['EVENTS']>) => {
  const { loading, events, totalResults } = useAppSelector(
    state => state.events,
  );
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const getEventsCall = async () => {
    dispatch(setEventLoading(true));
    try {
      const response = await appAxios.get(`/event?page=${page || 1}`);
      dispatch(setEvents(response.data.data));
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      dispatch(setEventLoading(false));
    }
  };

  React.useEffect(() => {
    getEventsCall();
  }, [page]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getEventsCall();
    setRefreshing(false);
  }, [page]);

  const navigateToScreen = (screenName: string, event: EventType) => {
    navigation.navigate(screenName, { event });
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {loading ? (
        <SectionLoader
          style={{
            alignSelf: 'center',
          }}
        />
      ) : events && events.length ? (
        <>
          {events.map(event => (
            <EventCard
              event={event}
              key={event.id}
              navigateToScreen={navigateToScreen}
            />
          ))}
          <Pagination
            page={page}
            totalResults={totalResults}
            setPage={setPage}
          />
        </>
      ) : (
        <Text style={styles.notFoundText}>No event found</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scaledWidth(16),
    paddingVertical: scaledHeight(19),
    gap: scaledHeight(22),
    position: 'relative',
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
  },
});
export default EventsScreen;
