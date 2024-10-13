import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  LogBox,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../../screenNamesTypes';
import { StyleSheet } from 'react-native';
import appColors from '../../../theme/colors';
import { DMBold, DMRegular } from '../../../theme/fonts';
import CustomInput from '../../../common/CustomInput';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '../../../common/Button';
import { appAxios } from '../../../api/axios';
import { sendCatchFeedback, sendFeedback } from '../../../functions/feedback';
import { screenNames } from '../../screenNames';
import CustomDatePicker from '../../../common/DatePicker';
import Modal from 'react-native-modal';
import DropdownButton from '../../../common/DropdownButton';
import ChurchBranchComponent from '../../../components/Auth/ChurchBranchComponent';
import ChurchMemberLayout from '../../../components/Auth/ChurchMemberLayout';
import { fontScale } from '../../../functions/font';
import TitleOptionsComponent from '../../../components/Auth/TitleOptionsComponent';
import GenderOptionsComponent from '../../../components/Auth/GenderOptionsComponent';
import MaritalOptionsComponent from '../../../components/Auth/MaritalOptionsComponent';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

const RegisterScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['REGISTER']>) => {
  interface FormValues {
    titles: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    churchCenter: string;
    dateOfBirth: Date | undefined;
    member: boolean | undefined;
    registrationSource: string;
    loading: boolean;
    gender: '' | 'Male' | 'Female';
    marital: 'Married' | 'Single' | 'Widowed' | 'Divorced' | 'Engaged' | '';
  }

  const [centreModalState, setCentreModalState] = React.useState(false);
  const [titleModalState, setTitleModalState] = React.useState(false);
  const [genderModalState, setGenderModalState] = React.useState(false);
  const [maritalModalState, setMaritalModalState] = React.useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      titles: '',
      email: '',
      password: '',
      address: '',
      confirmPassword: '',
      churchCenter: '',
      dateOfBirth: undefined,
      gender: '',
      firstName: '',
      marital: '',
      lastName: '',
      member: undefined,
      phoneNumber: '',
      registrationSource: 'mobile',
      loading: false,
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      titles: yup.string().required('Title is required'),
      email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
      password: yup.string().required('Password is required'),
      confirmPassword: yup
        .string()
        .required('Confirm your password')
        .oneOf([yup.ref('password')], "Passwords don't match"),
      dateOfBirth: yup.string().required('Required'),
      firstName: yup.string().required('Required'),
      lastName: yup.string().required('Required'),
      address: yup.string().required('Required'),
      gender: yup.string().required('Required'),
      marital: yup.string().required('Required'),
      member: yup.boolean().required('Required'),
      churchCenter: yup.string().when('member', {
        is: true,
        then: schema => schema.required('Required'),
      }),
      phoneNumber: yup.string().required('Required'),
    }),
    enableReinitialize: true,
  });

  const submitValues = async () => {
    formik.setFieldValue('loading', true);

    try {
      const response = await appAxios.post('/user/register', {
        titles: formik.values.titles?.trim(),
        email: formik.values.email?.trim(),
        password: formik.values.password,
        phone: formik.values.phoneNumber?.trim(),
        member: formik.values.member,
        lname: formik.values.lastName?.trim(),
        fname: formik.values.firstName?.trim(),
        dob: formik.values.dateOfBirth,
        churchCenter: formik.values.churchCenter,
        registrationSource: formik.values.registrationSource,
        address: formik.values.address?.trim(),
        gender: formik.values.gender,
        marital: formik.values.marital,
      });

      sendFeedback(response.data?.message, 'success');
      formik.resetForm();

      navigation.navigate(screenNames.LOGIN);
    } catch (error) {
      sendCatchFeedback(error);
    }

    formik.setFieldValue('loading', false);
  };

  const selectChurchBranch = (branch: string) => {
    formik.setFieldValue('churchCenter', branch);
    setCentreModalState(false);
  };
  const selectTitle = (title: string) => {
    formik.setFieldValue('titles', title);
    setTitleModalState(false);
  };
  const selectMemberStatus = (status: boolean) => {
    formik.setFieldValue('member', status);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../../assets/brand/logo.png')}
          style={styles.image}
        />
        <Text style={styles.mainText}>Signup</Text>
        <Text style={styles.subText}>
          Join the mission's assignment of the New Testament Church to be an
          impact to your immediate community.
        </Text>
        <SafeAreaView>
          <DropdownButton
            value={formik.values.titles}
            placeholder="Title"
            error={formik.errors.titles}
            showError={
              formik.touched.titles && formik.errors.titles ? true : false
            }
            containerStyle={{
              marginTop: 10,
            }}
            onPress={() => {
              setTitleModalState(true);
              formik.setFieldTouched('titles', true);
            }}
          />
          <CustomInput
            formik={formik}
            name="firstName"
            placeholder="First Name"
            containerStyle={{
              marginTop: 10,
            }}
          />
          <CustomInput
            formik={formik}
            name="lastName"
            placeholder="Last Name"
            containerStyle={{
              marginTop: 10,
            }}
          />
          <CustomInput
            formik={formik}
            name="address"
            placeholder="Address"
            containerStyle={{
              marginTop: 10,
            }}
          />
          <DropdownButton
            value={formik.values.gender}
            placeholder="Gender"
            error={formik.errors.gender}
            showError={
              formik.touched.gender && formik.errors.gender ? true : false
            }
            containerStyle={{
              marginTop: 10,
            }}
            onPress={() => {
              setGenderModalState(true);
              formik.setFieldTouched('gender', true);
            }}
          />
          <CustomInput
            formik={formik}
            name="email"
            placeholder="Email Address"
            keyboardType="email-address"
            containerStyle={{
              marginTop: 10,
            }}
          />
          <CustomInput
            formik={formik}
            name="phoneNumber"
            placeholder="Phone Number"
            keyboardType="phone-pad"
            containerStyle={{
              marginTop: 10,
            }}
          />
          <CustomDatePicker
            formik={formik}
            name="dateOfBirth"
            placeholder="Date of Birth"
            containerStyle={{
              marginTop: 10,
            }}
          />
          <DropdownButton
            value={formik.values.marital}
            placeholder="Marital Status"
            error={formik.errors.marital}
            showError={
              formik.touched.marital && formik.errors.marital ? true : false
            }
            containerStyle={{
              marginTop: 10,
            }}
            onPress={() => {
              setMaritalModalState(true);
              formik.setFieldTouched('marital', true);
            }}
          />
          <ChurchMemberLayout
            value={formik.values.member}
            error={formik.errors.member}
            showError={
              formik.touched.member && formik.errors.member ? true : false
            }
            selectMemberStatus={selectMemberStatus}
          />

          {formik.values.member && (
            <DropdownButton
              value={formik.values.churchCenter}
              placeholder="Which branch are you in?"
              error={formik.errors.churchCenter}
              showError={
                formik.touched.churchCenter && formik.errors.churchCenter
                  ? true
                  : false
              }
              containerStyle={{
                marginTop: 10,
              }}
              onPress={() => {
                setCentreModalState(true);
                formik.setFieldTouched('churchCenter', true);
              }}
            />
          )}
          <CustomInput
            formik={formik}
            name="password"
            placeholder="Password"
            secureTextEntry
            containerStyle={{
              marginTop: 10,
            }}
          />
          <CustomInput
            formik={formik}
            name="confirmPassword"
            placeholder="Confirm Password"
            secureTextEntry
            containerStyle={{
              marginTop: 10,
            }}
          />
          <Button
            title="Submit Form"
            buttonStyle={{
              marginTop: 25,
              marginBottom: 19,
              backgroundColor: !formik.isValid
                ? appColors.grey
                : appColors.secondaryColor,
            }}
            disabled={!formik.isValid}
            onPress={formik.handleSubmit}
            loading={formik.values.loading}
          />
        </SafeAreaView>

        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.LOGIN)}>
          <Text style={styles.signInText}>
            Have an account?{' '}
            <Text
              style={{
                fontFamily: DMBold,
                color: appColors.secondaryColor,
              }}>
              Login
            </Text>
          </Text>
        </TouchableOpacity>
        <Modal
          isVisible={centreModalState}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
          }}
          onBackdropPress={() => setCentreModalState(false)}
          onBackButtonPress={() => setCentreModalState(false)}>
          <ChurchBranchComponent
            selectItem={selectChurchBranch}
            selectedItem={formik.values.churchCenter}
          />
        </Modal>
        <Modal
          isVisible={titleModalState}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
          }}
          onBackdropPress={() => setTitleModalState(false)}
          onBackButtonPress={() => setTitleModalState(false)}>
          <TitleOptionsComponent
            selectItem={selectTitle}
            selectedItem={formik.values.titles}
          />
        </Modal>
        <Modal
          isVisible={genderModalState}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
          }}
          onBackdropPress={() => setGenderModalState(false)}
          onBackButtonPress={() => setGenderModalState(false)}>
          <GenderOptionsComponent
            selectItem={value => {
              formik.setFieldValue('gender', value);
              setGenderModalState(false);
            }}
            selectedItem={formik.values.gender}
          />
        </Modal>
        <Modal
          isVisible={maritalModalState}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
          }}
          onBackdropPress={() => setMaritalModalState(false)}
          onBackButtonPress={() => setMaritalModalState(false)}>
          <MaritalOptionsComponent
            selectItem={value => {
              formik.setFieldValue('marital', value);
              setMaritalModalState(false);
            }}
            selectedItem={formik.values.marital}
          />
        </Modal>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledWidth(30),
    flexGrow: 1,
    paddingTop: scaledHeight(3),
    paddingBottom: scaledHeight(33),
    backgroundColor: appColors.white,
  },
  image: {
    height: scaledHeight(75),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainText: {
    fontFamily: DMBold,
    fontSize: fontScale(24),
    color: appColors.primaryColor,
    marginTop: scaledHeight(4),
    marginBottom: scaledHeight(11),
  },
  subText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.primaryColor,
    marginBottom: scaledHeight(33),
  },
  forgotText: {
    fontFamily: DMBold,
    fontSize: fontScale(11),
    color: appColors.secondaryColor,
    marginBottom: scaledHeight(50),
  },
  signInText: {
    fontFamily: DMRegular,
    fontSize: fontScale(10),
    color: appColors.primaryColor,
    alignSelf: 'center',
  },
});

export default RegisterScreen;
