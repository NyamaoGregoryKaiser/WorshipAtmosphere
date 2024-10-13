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
import { DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import ShowPasswordIcon from '../../assets/icons/svgs/auth/show-password.svg';
import HidePasswordIcon from '../../assets/icons/svgs/auth/hide-password.svg';
import { scaledHeight, scaledWidth } from '../../functions/utils';

interface Props {
  value?: string | number;
  onChangeText?: Dispatch<SetStateAction<string>>;
  formik?: FormikProps<any>;
  name: string;
  useFormik?: boolean;
  showError?: boolean;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
}

const CustomInput = ({
  value,
  onChangeText,
  useFormik = true,
  formik,
  showError,
  error,
  name,
  containerStyle,
  inputStyle,
  secureTextEntry,
  ...rest
}: Props & TextInputProps) => {
  const [passwordState, setPasswordState] = React.useState(false);

  const togglePasswordState = () => {
    return setPasswordState(!passwordState);
  };

  return (
    <View style={[{ width: '100%' }, containerStyle]}>
      {useFormik && formik ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, inputStyle]}
            onChangeText={formik.handleChange(name)}
            onBlur={formik.handleBlur(name)}
            value={formik.values[name]}
            placeholderTextColor={appColors.grey}
            id={name}
            secureTextEntry={secureTextEntry && passwordState === false}
            {...rest}
          />
          {formik.touched[name] && formik.errors[name] && (
            <Text style={styles.errorText}>
              {formik.errors[name] as string}
            </Text>
          )}
          {/* Show password toggle when secureTextEntry is true */}
          {secureTextEntry &&
            (passwordState === true ? (
              <HidePasswordIcon
                style={styles.passwordIcon}
                onPress={() => togglePasswordState()}
              />
            ) : (
              <ShowPasswordIcon
                style={styles.passwordIcon}
                onPress={() => togglePasswordState()}
              />
            ))}
        </View>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            id={name}
            secureTextEntry={secureTextEntry}
            {...rest}
          />
          {showError && <Text style={styles.errorText}>{error}</Text>}
          {/* Show password toggle when secureTextEntry is true */}
          {secureTextEntry &&
            (passwordState ? (
              <TouchableOpacity>
                <HidePasswordIcon
                  style={styles.passwordIcon}
                  onPress={togglePasswordState}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <ShowPasswordIcon
                  style={styles.passwordIcon}
                  onPress={togglePasswordState}
                />
              </TouchableOpacity>
            ))}
        </View>
      )}
    </View>
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
    fontFamily: DMRegular,
    fontSize: fontScale(10),
  },
  errorText: {
    fontSize: fontScale(5),
    color: appColors.errorColor,
    alignSelf: 'flex-start',
    marginTop: scaledHeight(3),
    fontFamily: DMRegular,
  },
  inputContainer: {
    position: 'relative',
    flex: 1,
  },
  passwordIcon: {
    position: 'absolute',
    top: (45 - 11.24 * 2) / 2, // (height - padding) / 2
    right: (45 - 11.24 * 2) / 2,
  },
});

export default CustomInput;
