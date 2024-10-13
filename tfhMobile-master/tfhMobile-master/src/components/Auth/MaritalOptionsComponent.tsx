import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import { DMBold } from '../../theme/fonts';
import maritalStatuses from './maritalStatuses';
import MaritalStatusItem from './MaritalStatusItem';
import { scaledHeight, scaledWidth } from '../../functions/utils';
import { fontScale } from '../../functions/font';

const MaritalOptionsComponent = ({
  selectItem,
  selectedItem,
}: {
  selectItem: (item: string) => void;
  selectedItem: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your marital status</Text>
      <ScrollView
        contentContainerStyle={{
          gap: 9,
        }}>
        {maritalStatuses.map(status => (
          <MaritalStatusItem
            status={status}
            key={status}
            selected={selectedItem === status}
            onPress={() => selectItem(status)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: appColors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: scaledWidth(15),
    paddingVertical: scaledHeight(37),
  },
  title: {
    fontFamily: DMBold,
    fontSize: fontScale(14),
    color: appColors.primaryColor,
    marginBottom: scaledHeight(17),
    alignSelf: 'center',
  },
});

export default MaritalOptionsComponent;
