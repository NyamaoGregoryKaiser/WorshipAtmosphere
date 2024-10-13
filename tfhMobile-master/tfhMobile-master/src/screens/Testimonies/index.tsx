import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setTestimonies,
  setTestimonyLoading,
} from '../../store/slices/testimony';
import SectionLoader from '../../common/Loader/SectionLoader';
import { DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import TestimonyCard from '../../components/TestimonyScreen/TestimonyCard';
import SendTestimonyButton from '../../components/TestimonyScreen/SendTestimonyButton';
import Pagination from '../../common/Pagination';
import { appAxios } from '../../api/axios';
import { sendCatchFeedback } from '../../functions/feedback';
import { TestimonyType } from '../../types/types';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const TestimoniesScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['TESTIMONIES']>) => {
  const { loading, testimonies, totalResults } = useAppSelector(
    state => state.testimonies,
  );

  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const getData = async () => {
    dispatch(setTestimonyLoading(true));
    try {
      const response = await appAxios.post(
        `/testimony/approved?page=${page || 1}`,
      );

      dispatch(setTestimonies(response.data.data));
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      dispatch(setTestimonyLoading(false));
    }
  };

  React.useEffect(() => {
    getData();
  }, [page]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getData();
    setRefreshing(false);
  }, [page]);

  const navigateToScreen = (screenName: string, testimony?: TestimonyType) => {
    navigation.navigate(screenName, { testimony });
  };
  return (
    <View style={{ flex: 1 }}>
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
        ) : testimonies && testimonies.length ? (
          <>
            {testimonies.map(testimony => (
              <TestimonyCard
                testimony={testimony}
                key={testimony.test_id}
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
          <Text style={styles.notFoundText}>No testimony found</Text>
        )}
      </ScrollView>
      <SendTestimonyButton navigateToScreen={navigateToScreen} />
    </View>
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
export default TestimoniesScreen;
