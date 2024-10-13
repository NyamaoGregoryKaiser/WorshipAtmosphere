import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import AboutBrandImage from '../../components/AboutScreen/AboutBrandImage';
import { DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale, lineHeight } from '../../functions/font';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const HistoryScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['HISTORY']
>) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingHorizontal: scaledWidth(31),
        paddingBottom: scaledHeight(20),
      }}>
      <AboutBrandImage />

      <Text style={styles.text}>
        The Vision of The Father's House started in the place of prayer at a
        time in January 2003. Apostle Richard Udoh had just resigned from an
        executive position in one of the leading new generation banks in Nigeria
        with the sole intention to run a full time ministerial assignment with
        The Foursquare Gospel Church, Saabo, Lagos.
      </Text>
      <Text style={styles.text}>
        From January 1st 2003, he began to seek the face of the Lord for
        direction in full time ministry. As he prayed, a word came clearly from
        the Lord that he should start an independent ministry. This was quite
        unexpected and incredible to him because he went to pray with the
        mindset of a ministry in The Foursquare Gospel Church in Nigeria but God
        began to point him in another direction entirely.
      </Text>
      <Text style={styles.text}>
        He promptly shared this with his wife, who at that time felt he should
        focus on the work at hand without plunging into something new. He kept
        praying and also requested that God should convince her. Then came
        August 2003, after a series of prayers, she became convinced and moves
        were made for proper and procedural exiting of the organization he was
        serving in at that time.
      </Text>
      <Text style={styles.text}>
        Having received the full permission of the then General Overseer of The
        Foursquare Gospel Church to leave, he handed over the Pastorate of Saabo
        Foursquare Gospel Church to a new Pastor on December 28th 2003 and began
        preparations for the commencement of the new ministry, The Manifest
        Ministry. December 2003 marked a turning point in his ministry and life.
        First, it marked the end of his service in the Foursquare movement and
        secondly, the beginning of an independent ministry, The Manifest
        Ministry ordained by God, of which church's arm is The Father's House.
      </Text>
      <Text style={styles.text}>
        The maiden service of The Father's House was a crossover service on
        December 31st, 2003 held at 28, Bola Oshikoya Street, Alagbole. The
        service attracted all those who had heard about the new spiritual
        initiative and made enquiries to know its location. A total of 58
        worshippers (adult and children) attended the inaugural service.
      </Text>
      <Text style={styles.text}>
        After the maiden edition, subsequent services in January were held at
        the same venue until God provided a landed property at 90, Ojodu-Akute
        Road. The church moved there in February 2004 and ever since the Lord
        has built for Himself a befitting worship sanctuary with a modern office
        complex. God has been so faithful.
      </Text>
      <Text style={styles.text}>
        As at July 2011, The Father's House had planted seven other branches
        around the nation and is planning to do more by the grace of God. To God
        be the glory, great things He has done for us.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontScale(10),
    fontFamily: DMRegular,
    marginBottom: scaledHeight(12),
    lineHeight: lineHeight,
    color: appColors.black,
  },
});

export default HistoryScreen;
