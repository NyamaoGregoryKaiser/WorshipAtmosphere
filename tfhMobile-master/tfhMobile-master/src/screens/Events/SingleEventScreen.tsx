import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Share,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { screenNames } from '../screenNames';
import { EventType } from '../../types/types';
import ReactNativeModal from 'react-native-modal';
import Button from '../../common/Button';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale, lineHeight } from '../../functions/font';
import ShareIcon from '../../assets/icons/svgs/event/share.svg';
import EventRegistrationForm from '../../components/EventScreen/EventRegistrationForm';
import EventGallery from '../../components/EventScreen/EventGallery';
import HTMLRenderer from '../../common/HTMLRenderer';
import { scaledHeight, scaledWidth } from '../../functions/utils';
import { WEBSITE_URL } from '../../functions/environmentVariables';

const SingleEventScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<any, screenNamesTypes['SINGLE_EVENT']>) => {
  const routeParams = route.params as
    | Readonly<{ event: EventType }>
    | undefined;

  const event = routeParams?.event;
  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    // In case the event's details is lost along the way
    if (!routeParams?.event) {
      navigation.navigate(screenNames.EVENTS);
    }
  }, []);

  if (!event) return null;

  const navigateToScreen = (screenName: string) => {
    navigation.push(screenName);
  };

  const shouldAllowRegistration = () => {
    let allow = true;

    if (
      event.limitedNumberRegistration &&
      event.registrationEntries.length >= event.registrationNumberLimit
    ) {
      // if the number has exceeded
      allow = false;
    } else if (
      event.limitedDateRegistration &&
      new Date() > new Date(event.date)
    ) {
      // If the date has passed
      allow = false;
    } else {
      allow = true;
    }
    return allow;
  };

  const generateCalendarLink = () => {
    const nameString = event.name.replace(/ /g, '+'); //replacing all spaces with plus
    const dateString = new Date(event.date)
      .toISOString()
      .split('T')[0]
      .split('-')
      .join(''); //did this to get the format: YYYYMMDD
    const link = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${dateString}%2F${dateString}&location=&text=${nameString}`;
    return link;
  };

  const checkIfDateIsPassed = () => {
    const currentDate = new Date();
    return currentDate > new Date(event.date);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          onPress={() => setModalOpen(true)}
          style={styles.imageContainer}>
          <Image
            source={{
              uri: event.poster,
            }}
            style={styles.image}
          />
          {event.allowRegistration && (
            <View style={styles.registrationNotificationContainer}>
              <Text style={styles.registrationNotificationText}>
                *Requires Registration
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{event.name}</Text>
          <Text style={styles.date}>{new Date(event.date).toDateString()}</Text>
          <Button
            title="Add this Event to Calendar"
            buttonStyle={{
              marginTop: 31,
            }}
            onPress={() => Linking.openURL(generateCalendarLink())}
          />
          <TouchableOpacity
            style={styles.shareContainer}
            onPress={() =>
              Share.share({
                title: 'TFHC Event',
                // message: `Check out this event at The Father's House Church: ${event.name}`,
                message: `${WEBSITE_URL}/events/details?id=${event.id}`,
                // url: `${WEBSITE_URL}/events/details?id=${event.id}`,
              })
            }>
            <ShareIcon />
            <Text style={styles.shareText}>Share the Event</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <View style={{ gap: 5 }}>
            <Text style={styles.text}>Event Type: {event.eventType}</Text>
            <Text style={styles.text}>Theme: {event.theme}</Text>
            <Text style={styles.text}>Time: {event.time}</Text>
            <Text style={styles.text}>Main Text: {event.mainText}</Text>
            {event.location && (
              <Text style={styles.text}>Event Location: {event.location}</Text>
            )}
            {event.limitedDateRegistration && (
              <Text style={styles.text}>
                Registration Deadline:{' '}
                {new Date(event.registrationDateLimit).toDateString()}
              </Text>
            )}
            {event.limitedNumberRegistration && (
              <>
                <Text style={styles.text}>
                  Registration Limit: {event.registrationNumberLimit}
                </Text>
                <Text style={styles.text}>
                  Total Registrations: {event.registrationEntries.length}
                </Text>
              </>
            )}
            {event.description && (
              <HTMLRenderer
                source={{
                  html: event.description,
                }}
                baseStyle={{
                  color: '#888888',
                  fontSize: fontScale(12),
                  fontFamily: DMRegular,
                  lineHeight: lineHeight,
                }}
              />
            )}
            {event.allowRegistration &&
              shouldAllowRegistration() &&
              !checkIfDateIsPassed() && (
                <>
                  <View style={styles.separator} />
                  <Text style={[styles.text, { fontFamily: DMBold }]}>
                    Registration
                  </Text>

                  <EventRegistrationForm
                    event={event}
                    navigateToScreen={navigateToScreen}
                  />
                </>
              )}
          </View>

          {/* Event Gallery */}
          {checkIfDateIsPassed() && (
            <>
              <View style={styles.separator} />
              <EventGallery gallery={event.gallery} />
            </>
          )}
        </View>
      </ScrollView>
      <ReactNativeModal
        isVisible={modalOpen}
        onBackdropPress={() => setModalOpen(false)}
        onBackButtonPress={() => setModalOpen(false)}>
        <Image
          source={{
            uri: event.poster,
          }}
          style={{
            width: '100%',
            height: '50%',
            resizeMode: 'contain',
            marginBottom: 20,
          }}
        />
        <Button title="Close" onPress={() => setModalOpen(false)} />
      </ReactNativeModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: scaledHeight(241),
    width: '100%',
    resizeMode: 'cover',
  },
  registrationNotificationContainer: {
    backgroundColor: '#FF1100CF',
    position: 'absolute',
    left: 0,
    bottom: 0,
    paddingVertical: scaledHeight(8),
    paddingHorizontal: scaledWidth(17),
    alignItems: 'center',
    justifyContent: 'center',
  },
  registrationNotificationText: {
    color: appColors.white,
    fontFamily: DMBold,
    fontSize: fontScale(11),
  },
  contentContainer: {
    paddingHorizontal: scaledWidth(23),
    paddingVertical: scaledHeight(13),
  },
  name: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: fontScale(22),
    marginBottom: scaledHeight(5),
  },

  date: {
    fontFamily: DMBold,
    color: appColors.black,
    fontSize: fontScale(11),
    marginBottom: scaledHeight(10),
  },

  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scaledWidth(5),
    marginTop: scaledHeight(17),
  },
  shareText: {
    fontFamily: DMBold,
    fontSize: fontScale(13),
    color: appColors.secondaryColor,
  },
  separator: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D8D8D8',
    marginVertical: scaledHeight(14),
  },
  text: {
    fontFamily: DMRegular,
    color: appColors.black,
    fontSize: fontScale(11),
    textTransform: 'capitalize',
  },
});

export default SingleEventScreen;
