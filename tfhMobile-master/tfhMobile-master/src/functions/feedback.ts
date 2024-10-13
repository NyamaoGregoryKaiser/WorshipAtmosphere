import Toast from 'react-native-toast-message';

type Type = 'success' | 'info' | 'warning' | 'error';
type Message = string;

export const sendFeedback = (
  message: Message,
  type?: Type,
  secondaryMessage?: Message,
) => {
  Toast.show({
    type: type || 'info',
    text1: message || (type === 'success' ? 'Successful' : 'Error'),
    text2: secondaryMessage,
  });
};

export const sendCatchFeedback = (error: any) => {
  const errorText = error.response?.data?.errors
    ? error.response.data.errors[0].msg
    : error.response?.data?.message
    ? error.response?.data?.message
    : 'Request unsuccessful';

  console.log('API ERROR: ', error);
  Toast.show({
    type: 'error',
    text1: errorText,
  });
};
