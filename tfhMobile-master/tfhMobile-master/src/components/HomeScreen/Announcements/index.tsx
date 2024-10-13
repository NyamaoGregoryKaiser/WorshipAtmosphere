import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import SectionTitle from '../../../common/SectionTitle';
import { DMBold, DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import Button from '../../../common/Button';
import { fontScale, lineHeightSmall } from '../../../functions/font';
import { useAppSelector } from '../../../store/hooks';
import SectionLoader from '../../../common/Loader/SectionLoader';
import { AnnouncementType } from '../../../types/types';
import { screenNames } from '../../../screens/screenNames';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

const Announcements = ({
  navigateToScreen,
}: {
  navigateToScreen: (screenName: string, objectToTransfer?: any) => void;
}) => {
  const { announcements, loading } = useAppSelector(
    state => state.announcements,
  );

  return (
    <View style={styles.container}>
      <SectionTitle mainText="Announcements" />

      {loading ? (
        <SectionLoader />
      ) : announcements ? (
        <ScrollView
          contentContainerStyle={styles.cardContainer}
          horizontal={true}>
          {announcements.slice(0, 10).map((announcement: AnnouncementType) => (
            <View style={styles.card} key={announcement.id}>
              <Image
                source={{
                  uri: announcement.image,
                }}
                style={styles.cardImage}
              />
              <View style={styles.cardContentContainer}>
                <Text style={styles.cardTitle}>{announcement.title}</Text>
                <Button
                  title="View Details"
                  buttonStyle={styles.buttonStyle}
                  textStyle={{
                    fontSize: fontScale(7),
                  }}
                  onPress={() =>
                    navigateToScreen(screenNames.SINGLE_ANNOUNCEMENT, {
                      announcement,
                    })
                  }
                />
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.notFoundText}>No announcement found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scaledHeight(30),
    marginBottom: scaledHeight(30),
    paddingHorizontal: scaledWidth(16),
  },
  cardContainer: {
    gap: scaledHeight(15),
  },
  card: {
    borderRadius: 10,
    flexDirection: 'column',
    shadowColor: '#aeaeae',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
    width: scaledWidth(200),
  },
  cardImage: {
    width: '100%',
    height: scaledHeight(88),
    resizeMode: 'cover',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardContentContainer: {
    paddingVertical: scaledHeight(10),
    paddingHorizontal: scaledWidth(8),
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: '#F6FAFF',
    flex: 1,
  },
  cardTitle: {
    fontFamily: DMBold,
    fontSize: fontScale(10),
    color: appColors.primaryColor,
    lineHeight: lineHeightSmall,
    marginBottom: scaledHeight(5),
  },
  buttonStyle: {
    maxWidth: scaledWidth(111.64),
    height: scaledHeight(25),
    borderRadius: 3,
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
  },
});

export default Announcements;
