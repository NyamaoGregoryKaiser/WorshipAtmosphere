import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackwardIcon from '../../assets/icons/svgs/layout/backward.svg';
import ForwardIcon from '../../assets/icons/svgs/layout/forward.svg';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import { DMBold } from '../../theme/fonts';
import { scaledHeight, scaledWidth } from '../../functions/utils';

export default function Pagination({
  totalResults,
  setPage,
  page,
}: {
  totalResults: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}) {
  const limit = 10;

  const totalPages: number = Math.ceil(totalResults / limit);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setPage(page - 1)} disabled={page <= 1}>
        <BackwardIcon strokeOpacity={page <= 1 ? 0.2 : 1} />
      </TouchableOpacity>

      <Text style={styles.text}>Page {page}</Text>

      <TouchableOpacity
        onPress={() => setPage(page + 1)}
        disabled={page >= totalPages}>
        <ForwardIcon strokeOpacity={page >= totalPages ? 0.2 : 1} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaledWidth(20),
    justifyContent: 'center',
    marginTop: scaledHeight(40),
  },
  text: {
    fontFamily: DMBold,
    fontSize: fontScale(10),
    color: appColors.secondaryColor,
    textAlign: 'center',
  },
});
