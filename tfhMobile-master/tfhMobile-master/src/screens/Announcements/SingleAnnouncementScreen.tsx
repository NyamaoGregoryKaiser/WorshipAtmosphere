import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { screenNames } from '../screenNames';
import { AnnouncementType } from '../../types/types';
import { ScrollView } from 'react-native';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale, lineHeight } from '../../functions/font';
import ReactNativeModal from 'react-native-modal';
import Button from '../../common/Button';
import HTMLRenderer from '../../common/HTMLRenderer';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const SingleAnnouncementScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<any, screenNamesTypes['SINGLE_ANNOUNCEMENT']>) => {
  const routeParams = route.params as
    | Readonly<{ announcement: AnnouncementType }>
    | undefined;

  const announcement = routeParams?.announcement;

  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    // In case the announcement's details is lost along the way
    if (!routeParams?.announcement) {
      navigation.navigate(screenNames.ANNOUNCEMENTS);
    }
  }, []);

  if (!announcement) return null;

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Image
            source={{
              uri: announcement.image,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{announcement.title}</Text>
          <View style={styles.separator} />
          <HTMLRenderer
            source={{
              html: announcement.details,
            }}
            baseStyle={{
              fontFamily: DMRegular,
              fontSize: fontScale(12),
              color: '#888888',
            }}
          />
        </View>
      </ScrollView>
      <ReactNativeModal
        isVisible={modalOpen}
        onBackdropPress={() => setModalOpen(false)}
        onBackButtonPress={() => setModalOpen(false)}>
        <Image
          source={{
            uri: announcement.image,
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
    paddingBottom: scaledHeight(20),
  },
  contentContainer: {
    paddingHorizontal: scaledWidth(25),
  },
  image: {
    width: '100%',
    height: scaledHeight(241),
    resizeMode: 'cover',
  },
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: fontScale(24),
    marginTop: scaledHeight(17),
  },
  separator: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D8D8D8',
    marginVertical: scaledHeight(17),
  },
  description: {
    fontFamily: DMRegular,
    fontSize: fontScale(12),
    color: '#888888',
    lineHeight: lineHeight,
  },
});

export default SingleAnnouncementScreen;
