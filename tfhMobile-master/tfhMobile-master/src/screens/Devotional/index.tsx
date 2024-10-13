import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setDevotionalLoading,
  setDevotionals,
} from '../../store/slices/devotional';
import { appAxios } from '../../api/axios';
import { sendCatchFeedback } from '../../functions/feedback';
import { DevotionalType } from '../../types/types';
import { DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import SectionLoader from '../../common/Loader/SectionLoader';
import DevotionalList from '../../components/Devotional/DevotionalList';
import SelectedDevotional from '../../components/Devotional/SelectedDevotional';

const DevotionalsScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['DEVOTIONALS']>) => {
  const { loading, devotionals } = useAppSelector(state => state.devotionals);
  const dispatch = useAppDispatch();
  const [selectedDevotional, setSelectedDevotional] = React.useState<
    DevotionalType | undefined
  >(undefined);

  const getDevotionalsCall = async () => {
    dispatch(setDevotionalLoading(true));
    try {
      const response = await appAxios.get(`/devotional/user`);
      dispatch(setDevotionals(response.data.data?.data));
      setSelectedDevotional(response.data.data?.data[0]);
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      dispatch(setDevotionalLoading(false));
    }
  };

  React.useEffect(() => {
    getDevotionalsCall();
  }, []);

  const navigateToScreen = (screenName: string, devotional: DevotionalType) => {
    navigation.navigate(screenName, { devotional });
  };

  const changeSelectedDevotional = (devotional: DevotionalType) => {
    setSelectedDevotional(devotional);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/devotional/devotional-page.png')}
        style={{
          resizeMode: 'cover',
          height: 297,
          width: '100%',
        }}
      />
      {loading ? (
        <SectionLoader style={{ alignSelf: 'center', margin: 20 }} />
      ) : devotionals && devotionals.length ? (
        <View style={{ flex: 1 }}>
          <DevotionalList
            changeSelectedDevotional={changeSelectedDevotional}
            selectedDevotional={selectedDevotional}
          />
          {selectedDevotional && (
            <SelectedDevotional
              devotional={selectedDevotional}
              navigateToScreen={navigateToScreen}
            />
          )}
        </View>
      ) : (
        <Text style={styles.notFoundText}>No devotional found </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
    margin: 20,
  },
});

export default DevotionalsScreen;
