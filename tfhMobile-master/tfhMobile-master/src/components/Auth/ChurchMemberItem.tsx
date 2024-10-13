import {
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { DMBold } from '../../theme/fonts';
import appColors from '../../theme/colors';
import SelectedIcon from '../../assets/icons/svgs/auth/selected.svg';
import NotSelectedIcon from '../../assets/icons/svgs/auth/not-selected.svg';
import { fontScale } from '../../functions/font';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const ChurchMemberItem = ({
  title,
  selected,
  ...rest
}: {
  title: string;
  selected: boolean;
} & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: selected ? '#08A05C' : '#DBDBDB',
          backgroundColor: selected ? '#F2FFF9' : '#FCFCFC',
        },
      ]}
      {...rest}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      {selected ? <SelectedIcon /> : <NotSelectedIcon />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFC',
    borderRadius: 5,
    paddingHorizontal: scaledWidth(24),
    paddingVertical: scaledHeight(16),
    borderWidth: 0.75,
    borderColor: '#DBDBDB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    gap: scaledWidth(5),
    flexWrap: 'wrap',
  },
  title: {
    fontFamily: DMBold,
    fontSize: fontScale(8),
    color: appColors.primaryColor,
    marginBottom: scaledHeight(2),
  },
});

export default ChurchMemberItem;
