import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import AboutBrandImage from '../../components/AboutScreen/AboutBrandImage';
import faithItems from '../../components/AboutScreen/faithItems';
import FaithCard from '../../components/AboutScreen/FaithCard';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import { DMBold } from '../../theme/fonts';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const StatementOfFaithScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['STATEMENT_OF_FAITH']
>) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutBrandImage />
      <Text style={styles.title}>Statement of Faith</Text>
      <View style={styles.listContainer}>
        {faithItems.map(item => (
          <FaithCard key={item.title} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scaledWidth(31),
    paddingBottom: scaledHeight(20),
  },
  title: {
    fontSize: fontScale(16),
    color: appColors.primaryColor,
    marginBottom: scaledHeight(19),
    fontFamily: DMBold,
    textAlign: 'center',
  },
  listContainer: {
    gap: scaledHeight(15),
  },
});

export default StatementOfFaithScreen;
