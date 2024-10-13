import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import FeedbackForm from '../../components/Feedback/FeedbackForm';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const FeedbackScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['FEEDBACK']>) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Feedback</Text>
      <Text style={styles.subtitle}>
        Feel free to tell us where we need to improve. Your feedback will be
        attended to and taken seriously.
      </Text>
      <FeedbackForm navigateToScreen={navigateToScreen} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scaledWidth(26),
    paddingVertical: scaledHeight(35),
  },
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    marginBottom: scaledHeight(5),
    fontSize: fontScale(24),
  },
  subtitle: {
    fontFamily: DMRegular,
    color: appColors.primaryColor,
    fontSize: fontScale(11),
    marginBottom: scaledHeight(40),
  },
});

export default FeedbackScreen;
