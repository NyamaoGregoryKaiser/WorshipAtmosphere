import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setAnnouncementLoading,
  setAnnouncements,
} from '../../store/slices/announcement';
import AnnouncementCard from '../../components/AnnouncementScreen/AnnouncementCard';
import SectionLoader from '../../common/Loader/SectionLoader';
import { DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import { AnnouncementType } from '../../types/types';
import Pagination from '../../common/Pagination';
import { appAxios } from '../../api/axios';
import { sendCatchFeedback } from '../../functions/feedback';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const AnnouncementsScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['ANNOUNCEMENTS']>) => {
  const { announcements, loading, totalResults } = useAppSelector(
    state => state.announcements,
  );
  const [refreshing, setRefreshing] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const dispatch = useAppDispatch();

  const getAnnouncementsCall = async () => {
    dispatch(setAnnouncementLoading(true));
    try {
      const response = await appAxios.get(`/announcement?page=${page || 1}`);

      dispatch(setAnnouncements(response.data.data));
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      dispatch(setAnnouncementLoading(false));
    }
  };

  React.useEffect(() => {
    getAnnouncementsCall();
  }, [page]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getAnnouncementsCall();
    setRefreshing(false);
  }, [page]);

  const navigateToScreen = (
    screenName: string,
    announcement: AnnouncementType,
  ) => {
    navigation.navigate(screenName, { announcement });
  };
  return (
    <View style={styles.contentContainer}>
      {loading ? (
        <SectionLoader style={{ alignSelf: 'center', margin: 20 }} />
      ) : announcements && announcements.length > 0 ? (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={announcements}
          renderItem={({ item }) => (
            <AnnouncementCard
              announcement={item}
              navigateToScreen={navigateToScreen}
            />
          )}
          keyExtractor={item => item.id?.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          style={styles.container}
          ListFooterComponent={
            <Pagination
              page={page}
              totalResults={totalResults}
              setPage={setPage}
            />
          }
        />
      ) : (
        <Text style={styles.notFoundText}>No announcement found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: scaledHeight(47),
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scaledWidth(25),
  },
  separator: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D8D8D8',
    marginTop: scaledHeight(9),
    marginBottom: scaledHeight(14),
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
    marginBottom: scaledHeight(20),
  },
});

export default AnnouncementsScreen;
