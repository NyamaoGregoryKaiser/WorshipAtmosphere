import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { EventType } from '../../types/types';
import { StyleSheet } from 'react-native';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import { DMBold, DMRegular } from '../../theme/fonts';
import Card from '../../common/Card';
import { screenNames } from '../../screens/screenNames';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const EventCard = ({
  event,
  navigateToScreen,
}: {
  event: EventType;
  navigateToScreen: (screenName: string, event: EventType) => void;
}) => {
  const checkIfDateIsPassed = () => {
    const currentDate = new Date();
    return currentDate > new Date(event.date);
  };

  return (
    <TouchableOpacity
      onPress={() => navigateToScreen(screenNames.SINGLE_EVENT, event)}>
      <Card containerStyle={styles.container}>
        <Image
          source={{
            uri: event.poster,
          }}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{event.name}</Text>
          <Text style={styles.date}>{new Date(event.date).toDateString()}</Text>
          <View
            style={[
              styles.upcomingIndicatorContainer,
              {
                backgroundColor: checkIfDateIsPassed() ? '#FFDED4' : '#D9FEDF',
              },
            ]}>
            <Text
              style={[
                styles.upcomingIndicatorText,
                {
                  color: checkIfDateIsPassed() ? '#FC9C0C' : '#08A05C',
                },
              ]}>
              {checkIfDateIsPassed() ? 'Past Event' : 'Upcoming'}
            </Text>
          </View>

          {event.allowRegistration && (
            <Text style={styles.registrationText}>
              Registration is compulsory
            </Text>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledWidth(13),
    paddingVertical: scaledHeight(13),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaledWidth(20),
  },
  image: {
    width: scaledWidth(105.52),
    height: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: fontScale(16),
    color: appColors.primaryColor,
    fontFamily: DMBold,
    marginBottom: scaledHeight(3),
    textTransform: 'capitalize',
  },
  date: {
    color: appColors.black,
    fontSize: fontScale(10),
    fontFamily: DMRegular,
    marginBottom: scaledHeight(5),
  },
  upcomingIndicatorContainer: {
    paddingHorizontal: scaledWidth(14),
    paddingVertical: scaledHeight(5),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upcomingIndicatorText: {
    fontSize: fontScale(10),
    fontFamily: DMBold,
  },

  registrationText: {
    fontSize: fontScale(8),
    color: appColors.primaryColor,
    fontFamily: DMRegular,
    marginTop: 10,
  },
});

export default EventCard;
