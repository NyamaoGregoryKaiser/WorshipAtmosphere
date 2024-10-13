import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import { TFCCCellType } from '../../types/types';
import Card from '../../common/Card';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const CenterCard = ({ item }: { item: TFCCCellType }) => {
  const separateText = (text: string) => {
    // separating by colon (:)
    return text.split(/:(.*)/s);
  };
  return (
    <Card
      containerStyle={{
        paddingHorizontal: scaledWidth(10),
        paddingVertical: scaledHeight(10),
      }}>
      <Text style={styles.content}>{item.host_address}</Text>
      <Text style={styles.cellLeader}>
        {item.cell_leader}, {item.phone}
      </Text>
      <Text style={styles.zone}>Zone: {item.tfccZone.zonal}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    color: appColors.primaryColor,
    fontSize: fontScale(12),
    fontFamily: DMRegular,
    marginBottom: scaledHeight(5),
  },
  cellLeader: {
    color: appColors.black,
    fontSize: fontScale(12),
    fontFamily: DMBold,
    marginBottom: scaledHeight(5),
  },
  zone: {
    color: appColors.grey,
    fontSize: fontScale(10),
    fontFamily: DMRegular,
  },
});

export default CenterCard;
