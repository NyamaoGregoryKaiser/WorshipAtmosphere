import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import SectionTitle from '../../../common/SectionTitle';
import Card from '../../../common/Card';
import Button from '../../../common/Button';
import { DMBold, DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import { useAppSelector } from '../../../store/hooks';
import SectionLoader from '../../../common/Loader/SectionLoader';
import { fontScale } from '../../../functions/font';
import { screenNames } from '../../../screens/screenNames';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

const DayDevotional = ({
  navigateToScreen,
}: {
  navigateToScreen: (screenName: string, objectToTransfer?: any) => void;
}) => {
  const { todayDevotional, loading } = useAppSelector(
    state => state.todayDevotional,
  );

  return (
    <View style={styles.container}>
      <SectionTitle mainText="Today's Menu" />
      {loading ? (
        <SectionLoader />
      ) : todayDevotional ? (
        <Card>
          <View style={styles.contentContainer}>
            <Image
              source={require('../../../assets/images/home/devotional.png')}
              style={{
                height: '100%',
                borderRadius: 6,
              }}
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.textHeader}>The Father’s Menu</Text>
              <Text style={styles.title}>{todayDevotional.titles}</Text>
              <Text style={styles.date}>
                {new Date(todayDevotional.ditto).toDateString()}
              </Text>
              <Button
                title="Read Devotional"
                buttonStyle={styles.buttonStyle}
                textStyle={{
                  fontSize: fontScale(9),
                }}
                onPress={() =>
                  navigateToScreen(screenNames.SINGLE_DEVOTIONAL, {
                    devotional: todayDevotional,
                  })
                }
              />
            </View>
          </View>
        </Card>
      ) : (
        <Text style={styles.notFoundText}>No devotional found for today</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledWidth(16),
    marginTop: scaledHeight(30),
  },
  contentContainer: {
    paddingVertical: scaledHeight(12),
    paddingHorizontal: scaledHeight(7),
    flexDirection: 'row',
    gap: scaledWidth(13),
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  textHeader: {
    fontFamily: DMBold,
    fontSize: fontScale(8),
    color: appColors.secondaryColor,
    textTransform: 'uppercase',
    maxWidth: scaledWidth(235),
    marginBottom: scaledHeight(5),
  },
  title: {
    fontFamily: DMBold,
    fontSize: fontScale(15),
    color: appColors.primaryColor,
    marginBottom: scaledHeight(2),
    textTransform: 'capitalize',
  },
  date: {
    fontFamily: DMRegular,
    fontSize: fontScale(9),
    color: appColors.black,
    marginBottom: scaledHeight(20),
  },
  buttonStyle: {
    maxWidth: scaledWidth(159),
    height: scaledHeight(32),
    borderRadius: 3.88,
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
  },
});

export default DayDevotional;
