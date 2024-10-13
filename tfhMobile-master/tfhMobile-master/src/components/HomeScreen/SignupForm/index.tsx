import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { DMBold, DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import Button from '../../../common/Button';
import { screenNames } from '../../../screens/screenNames';
import { useAppSelector } from '../../../store/hooks';
import { fontScale } from '../../../functions/font';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

const SignupForm = ({
  navigateToScreen,
}: {
  navigateToScreen: (screenName: string) => void;
}) => {
  const { user } = useAppSelector(state => state.user);

  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <Text style={styles.introText}>{`${
            user.fname || ''
          }, God bless you!`}</Text>
          <Text style={styles.introTextSub}>
            Welcome to The Father's House Church.
          </Text>
        </View>
      ) : (
        <ImageBackground
          source={require('../../../assets/images/home/signup.png')}
          style={styles.mainImage}
          imageStyle={{
            borderRadius: 10,
          }}>
          <Text style={styles.mainText}>New to The Father’s House Church?</Text>
          <Button
            title="Sign up Here"
            buttonStyle={styles.mainButton}
            textStyle={{
              fontSize: fontScale(10),
            }}
            onPress={() => navigateToScreen(screenNames.REGISTER)}
          />
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledWidth(15),
    marginTop: scaledHeight(16),
  },
  mainImage: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: scaledHeight(204),
    shadowColor: '#d8d0ff',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
    borderRadius: 10,
  },
  mainText: {
    fontSize: fontScale(20),
    fontFamily: DMBold,
    color: appColors.white,
    maxWidth: scaledWidth(250),
    textAlign: 'center',
    marginBottom: scaledHeight(16),
  },
  mainButton: {
    maxWidth: scaledWidth(141),
    borderRadius: 15,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: appColors.white,
    height: scaledHeight(37),
  },
  introText: {
    fontFamily: DMBold,
    fontSize: fontScale(11),
    color: appColors.primaryColor,
  },
  introTextSub: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.primaryColor,
  },
});

export default SignupForm;
