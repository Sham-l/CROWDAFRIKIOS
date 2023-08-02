import { useState } from 'react';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import { GET_OTP } from "../constants/api";

function useGenerateOtp() {
  const [otp, setOtp] = useState(null);

  const generateOtp = (formData) => {
    axios({
      method: 'post',
      url: GET_OTP,
      data: formData,
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
      .then(response => {
        setOtp(response.data.otp);
        setTimeout(() => {
          Snackbar.show({
            text: JSON.stringify(response?.data?.message),
            duration: Snackbar.LENGTH_SHORT,
          });
        }, 1000);
      })
      .catch(error => {
        const errorMsg =
          error.message === 'Network Error'
            ? 'check your internet'
            : error.response.data.message;
        Snackbar.show({
          text: JSON.stringify(errorMsg).slice(1, -1),
          duration: Snackbar.LENGTH_SHORT,
        });
      });
  };

  return [otp, generateOtp];
}

export default useGenerateOtp;
