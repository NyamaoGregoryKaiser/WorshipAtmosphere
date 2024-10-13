import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackwardIcon from '../../assets/icons/svgs/layout/backward.svg';
import ForwardIcon from '../../assets/icons/svgs/layout/forward.svg';
import { fontScale } from '../../functions/font';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setPageToken } from '../../store/slices/youtubeVideos';
import appColors from '../../theme/colors';
import { DMBold } from '../../theme/fonts';
import { scaledHeight, scaledWidth } from '../../functions/utils';

export default function YoutubePagination({
  setPage,
  page,
  nextPageToken: propNextPageToken,
  prevPageToken: propPrevPageToken,
  propsSetPageToken,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  nextPageToken?: string;
  prevPageToken?: string;
  propsSetPageToken?: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { nextPageToken, prevPageToken } = useAppSelector(
    state => state.youtubeVideos,
  );

  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setPage(page - 1);
          if (propsSetPageToken) {
            propsSetPageToken(propPrevPageToken || '');
          } else {
            dispatch(setPageToken(prevPageToken ? prevPageToken : ''));
          }
        }}
        disabled={page <= 1}>
        <BackwardIcon strokeOpacity={page <= 1 ? 0.2 : 1} />
      </TouchableOpacity>

      <Text style={styles.text}>Page {page}</Text>

      <TouchableOpacity
        onPress={() => {
          setPage(page + 1);
          if (propsSetPageToken) {
            propsSetPageToken(propNextPageToken || '');
          } else {
            dispatch(setPageToken(nextPageToken ? nextPageToken : ''));
          }
        }}
        disabled={!nextPageToken}>
        <ForwardIcon strokeOpacity={!nextPageToken ? 0.2 : 1} />
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
