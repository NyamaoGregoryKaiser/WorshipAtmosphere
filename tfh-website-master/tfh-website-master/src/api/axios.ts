import { store } from './../store/store';
import { getUserSession } from './../functions/userSession';
import { API_KEY, API_URL } from './../functions/environmentVariables';
import axios from 'axios';
import { signOut } from '../store/slices/user';

const sessionDetails = getUserSession();

export const appAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
  baseURL: API_URL,
});

appAxios.interceptors.request.use(
  (config) => {
    const appState = store.getState();
    const storeUserDetails = appState?.user?.user;
    // get state is called here to be current at the time of rendering

    const token = storeUserDetails?.token || sessionDetails?.token;

    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

appAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    // Current expired token setup
    const possibleErrors = ['Login to continue!', 'jwt expired'];
    // If user's token is invalid, this message would be received.
    if (
      err.response?.data?.errors &&
      err.response.data.errors[0].msg &&
      possibleErrors.includes(err.response.data.errors[0].msg) // if one of the possible errors is sent
    ) {
      // Once token is cleared, reload and app would be redirected to login
      store.dispatch(signOut());
      // No need to reload is authentication isn't a major factor at the moment
    }

    // Normal 401 setup
    // const originalConfig = err.config;
    // if (
    //   // urls to avoid (don't logout when they fail)
    //   originalConfig.url !== `${API_URL}/auth/login` && //login
    //   err.response
    // ) {
    //   if (
    //     err.response.status === 401 &&
    //     sessionDetails // logout only when a user has session
    //   ) {
    //     // Log user out
    //     store.dispatch(signOut());

    //     // Reload window so user is redirected to login
    //     window.location.reload();

    //     return appAxios(originalConfig);
    //   }
    // }
    return Promise.reject(err);
  }
);
