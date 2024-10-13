import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import { scaledHeight } from '../../functions/utils';

interface ItemType {
  heading: string;
  content: string[];
}

const ServiceCard = ({ item }: { item: ItemType }) => {
  const separateText = (text: string) => {
    // separating by colon (:)
    return text.split(/:(.*)/s);
  };
  return (
    <View>
      <Text style={styles.title}>{item.heading}</Text>
      {item.content.map((schedule, index) => (
        <Text style={styles.content} key={index}>
          {schedule}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    marginBottom: scaledHeight(5),
    fontSize: fontScale(12),
  },
  content: {
    color: appColors.black,
    fontFamily: DMRegular,
    marginBottom: scaledHeight(10),
    fontSize: fontScale(10),
  },
  listContainer: {
    gap: scaledHeight(10),
    marginTop: scaledHeight(10),
  },
  listTitle: {
    fontFamily: DMBold,
    color: appColors.black,
    fontSize: fontScale(10),
    marginTop: scaledHeight(10),
  },
});

export default ServiceCard;
