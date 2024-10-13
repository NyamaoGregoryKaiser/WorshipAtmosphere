import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import appColors from '../../theme/colors';
import { FormikProps } from 'formik/dist/types';
import CalendarIcon from '../../assets/icons/svgs/auth/calendar.svg';
import DatePicker from 'react-native-date-picker';
import { DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import { scaledHeight, scaledWidth } from '../../functions/utils';

interface Props {
  value?: Date;
  onChangeText?: Dispatch<SetStateAction<Date>>;
  formik?: FormikProps<any>;
  name: string;
  useFormik?: boolean;
  showError?: boolean;
  error?: string;
  containerStyle?: ViewStyle;
  title?: string;
}

const CustomDatePicker = ({
  value,
  onChangeText,
  useFormik = true,
  formik,
  showError,
  error,
  name,
  containerStyle,
  title,
  placeholder,
  ...rest
}: Props & TextInputProps) => {
  const [open, setOpen] = React.useState(false);

  const inputContainsValues = () => {
    let containsValue = false;

    if (useFormik && formik?.values[name]) {
      containsValue = true;
    } else if (!useFormik && value) {
      containsValue = true;
    } else {
      containsValue = false;
    }

    return containsValue;
  };

  return (
    <>
      <TouchableOpacity
        style={[
          { width: '100%', position: 'relative' },
          styles.input,
          containerStyle,
        ]}
        onPress={() => {
          setOpen(true);
          formik?.setFieldTouched(name, true);
        }}
        id={name}>
        <View style={styles.iconContainer}>
          <CalendarIcon />
        </View>
        <Text
          style={[
            styles.text,
            {
              color: inputContainsValues()
                ? appColors.primaryColor
                : appColors.grey,
            },
          ]}>
          {inputContainsValues()
            ? formik?.values[name]?.toDateString() || value?.toDateString()
            : placeholder}
        </Text>
      </TouchableOpacity>
      {useFormik && formik ? (
        <>
          {formik.touched[name] && formik.errors[name] && (
            <Text style={styles.errorText}>
              {formik.errors[name] as string}
            </Text>
          )}
        </>
      ) : (
        <>{showError && <Text style={styles.errorText}>{error}</Text>}</>
      )}
      <DatePicker
        modal
        open={open}
        date={formik?.values[name] || new Date()}
        onConfirm={date => {
          setOpen(false);
          useFormik
            ? formik?.setFieldValue(name, date)
            : onChangeText && onChangeText(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode="date"
        title={placeholder || 'Select Date'}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: scaledHeight(45),
    borderWidth: 0.5,
    borderColor: '#D1D1D1',
    borderRadius: 5,
    paddingHorizontal: scaledWidth(11.24),
    paddingVertical: scaledHeight(11.24),
    width: '100%',
    color: appColors.primaryColor,
  },
  errorText: {
    fontSize: fontScale(10),
    color: appColors.errorColor,
    alignSelf: 'flex-start',
    marginTop: scaledHeight(3),
  },
  iconContainer: {
    position: 'absolute',
    right: 17,
    top: 13,
    bottom: 16,
  },
  text: {
    fontFamily: DMRegular,
    fontSize: fontScale(10),
  },
});

export default CustomDatePicker;
