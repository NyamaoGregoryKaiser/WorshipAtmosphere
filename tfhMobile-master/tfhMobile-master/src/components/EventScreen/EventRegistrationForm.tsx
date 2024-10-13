import { Text, View } from 'react-native';
import React from 'react';
import { EventType } from '../../types/types';
import Button from '../../common/Button';
import appColors from '../../theme/colors';
import CustomInput from '../../common/CustomInput';
import { sendCatchFeedback, sendFeedback } from '../../functions/feedback';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { appAxios } from '../../api/axios';
import { screenNames } from '../../screens/screenNames';
import { StyleSheet } from 'react-native';
import { capitalize } from '../../functions/stringManipulations';
import CustomDatePicker from '../../common/DatePicker';
import DropdownButton from '../../common/DropdownButton';
import ReactNativeModal from 'react-native-modal';
import DropdownItem from '../../common/DropdownItem';
import { DMBold } from '../../theme/fonts';
import { ScrollView } from 'react-native';
import { scaledHeight, scaledWidth } from '../../functions/utils';
import { fontScale } from '../../functions/font';

const EventRegistrationForm = ({
  event,
  navigateToScreen,
}: {
  event: EventType;
  navigateToScreen: (screenName: string) => void;
}) => {
  const [dropdownModalState, setDropdownModalState] = React.useState(false);

  interface inputType {
    name: string;
    type:
      | string
      | 'text'
      | 'number'
      | 'dropdown'
      | 'email'
      | 'tel'
      | 'date'
      | 'url';
  }

  const formik = useFormik<any>({
    initialValues: {
      ...event.requiredRegistrationDetails.reduce(
        (initial, field: inputType) => ({
          ...initial,
          [field.name]: field.type !== 'number' ? '' : 0,
        }),
        {},
      ),
      loading: false,
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object(
      event.requiredRegistrationDetails.reduce(
        (initial, field: inputType) => ({
          ...initial,
          [field.name]:
            field.type !== 'number'
              ? yup.string().required('Required')
              : yup.number().required('Required').typeError('Must be a number'),
        }),
        {},
      ),
    ),
  });

  const submitValues = async () => {
    formik.setFieldValue('loading', true);

    try {
      const response = await appAxios.post(`/event/${event.id}/register`, {
        ...event.requiredRegistrationDetails.reduce(
          (initial, field: inputType) => ({
            ...initial,
            [field.name]: formik.values[field.name],
          }),
          {},
        ),
      });

      sendFeedback(response.data?.message, 'success');

      formik.resetForm();
      navigateToScreen(screenNames.EVENTS);
    } catch (error) {
      sendCatchFeedback(error);
    }

    formik.setFieldValue('loading', false);
  };

  const selectItem = (name: string, value: string) => {
    formik.setFieldValue(name, value);
    setTimeout(() => {
      setDropdownModalState(false);
    }, 700);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{ gap: 10 }}>
          {event.requiredRegistrationDetails.map(detail => {
            if (detail.type === 'date') {
              return (
                <CustomDatePicker
                  formik={formik}
                  key={detail.name}
                  name={detail.name}
                  placeholder={capitalize(detail.name.split('_').join(' '))}
                />
              );
            } else if (detail.type === 'dropdown') {
              return (
                <View key={detail.name}>
                  <DropdownButton
                    value={formik.values[detail.name]}
                    placeholder={capitalize(detail.name.split('_').join(' '))}
                    error={formik.errors[detail.name] as any}
                    showError={
                      formik.touched[detail.name] && formik.errors[detail.name]
                        ? true
                        : false
                    }
                    containerStyle={{
                      marginTop: 10,
                    }}
                    onPress={() => {
                      setDropdownModalState(true);
                      formik.setFieldTouched(detail.name, true);
                    }}
                  />
                  <ReactNativeModal
                    isVisible={dropdownModalState}
                    style={{
                      justifyContent: 'flex-end',
                      margin: 0,
                    }}
                    onBackdropPress={() => setDropdownModalState(false)}
                    onBackButtonPress={() => setDropdownModalState(false)}>
                    <ScrollView
                      contentContainerStyle={styles.dropdownContainer}>
                      <Text style={styles.dropdownTitle}>Select an option</Text>

                      {detail.options &&
                        detail.options
                          .split(',')
                          .map(item => (
                            <DropdownItem
                              onPress={() => selectItem(detail.name, item)}
                              selected={formik.values[detail.name] === item}
                              name={item}
                              key={item}
                            />
                          ))}
                      <Button
                        title="Close"
                        onPress={() => setDropdownModalState(false)}
                        buttonStyle={{
                          marginTop: 'auto',
                        }}
                      />
                    </ScrollView>
                  </ReactNativeModal>
                </View>
              );
            } else {
              return (
                <CustomInput
                  formik={formik}
                  key={detail.name}
                  name={detail.name}
                  placeholder={capitalize(detail.name.split('_').join(' '))}
                />
              );
            }
          })}
        </View>
        <Button
          title="Submit Form"
          buttonStyle={{
            marginTop: 58,
            marginBottom: 23,
            backgroundColor: !formik.isValid
              ? appColors.grey
              : appColors.primaryColor,
          }}
          disabled={!formik.isValid}
          onPress={formik.handleSubmit}
          loading={formik.values.loading}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: scaledHeight(10),
  },
  dropdownContainer: {
    flex: 0.5,
    backgroundColor: appColors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: scaledWidth(15),
    paddingVertical: scaledHeight(37),
    gap: scaledHeight(15),
    marginTop: 'auto',
  },
  dropdownTitle: {
    fontFamily: DMBold,
    fontSize: fontScale(14),
    color: appColors.primaryColor,
    marginBottom: scaledHeight(17),
    alignSelf: 'center',
  },
});

export default EventRegistrationForm;
