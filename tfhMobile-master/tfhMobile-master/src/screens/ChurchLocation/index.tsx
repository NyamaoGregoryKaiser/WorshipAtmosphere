import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import churchLocations from '../../components/HomeScreen/ChurchLocation/churchLocations';
import LocationCard from '../../components/ChurchLocationScreen/LocationCard';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const ChurchLocationScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Find the church closest to you!</Text>
      <Text style={styles.subtitle}>
        You can worship with us at any of these locations.
      </Text>
      <View style={{ gap: 16 }}>
        {churchLocations.map(location => (
          <LocationCard key={location.name} location={location} />
        ))}
      </View>
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
    marginBottom: scaledHeight(34),
    fontSize: fontScale(24),
  },
  subtitle: {
    fontFamily: DMRegular,
    color: appColors.primaryColor,
    fontSize: fontScale(11),
    marginBottom: scaledHeight(34),
  },
});
export default ChurchLocationScreen;
