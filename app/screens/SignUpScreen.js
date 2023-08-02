import {
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Appearance,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';
// -------------custom import
import Card from '../components/Card';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import ErrorText from '../components/ErrorText';
import {CHECK, GET_STATES} from '../constants/api';
import getContries from '../utils/getContries';
import {validateEmail, validateInput} from '../utils/validators';
// ------------------------
export default function SignUpScreen({navigation}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // ----------------------------------------------
  const [statesData, setStatesData] = useState([]);
  // ---------------------------------------------------
  const [countryCode, setCountryCode] = useState('234');
  const [countryName, setCountryName] = useState('Country');
  const [state, setState] = useState(' State');
  const [stateId, setStateId] = useState('');
  const [countryId, setCountryId] = useState(null);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [searchText, setSearchText] = useState('');

  // -----------------------------
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [countryError, setCountryError] = useState('');
  const countryData = getContries();
  const [stateError, setStateError] = useState('');
  const [otp, setOtp] = useState(null);
  // -------------
  const [modalVisible, setModalVisible] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [check, setCheck] = useState(true);
  const [hide, setHide] = useState(false);
  const theme = Appearance.getColorScheme();
  const [phone,setPhone]=useState('')
  const [emptyData, setEmptyData] = useState('');
  //---------------------
  // getting states
  useEffect(() => {
    axios
      .get(GET_STATES + countryId)
      .then(response => setStatesData(response.data?.states))

      .catch(error => console.log(error));
  }, [countryId]);
  useEffect(() => {
    if (otp) {
      navigation.navigate('VerifyNumber', {
        fullName,
        email,
        phoneNumber,
        countryId,
        stateId,
        otp: otp,
      });
    }
  }, [otp]);
console.log(otp)
  // ----------------

  useEffect(() => {
    setFullNameError('');
    setEmailError('');
    setPhoneNumberError('');
  }, [fullName, email, phoneNumber]);
  // ---------------------------------
  // --------------------------------
  // Validation rules

  function handleSearchChange(value) {
    setSearchText(value);

    setFilteredCountry(
      countryData.filter(data =>
        data.name.toLowerCase().includes(searchText.toLowerCase()),
      ),
    );
  }

  // -------------------------------------------
  let formData = new FormData();
  formData.append('phone_number', phoneNumber);
  formData.append('email_id', email);

  const handleSignUp = () => {
    const isFullNameValid = validateInput(
      'Full name',
      fullName,
      setFullNameError,
    );
    const isEmailValid = validateEmail(email, setEmailError);
    const isPhoneNumberValid = validateInput(
      'Phone number',
      phoneNumber,
      setPhoneNumberError,
    );
    const isCountryValid = validateInput(
      'Country',
      countryName,
      setCountryError,
    );
    const isStateValid = validateInput('State', state, setStateError);

    if (
      isFullNameValid &&
      isEmailValid &&
      isPhoneNumberValid &&
      isCountryValid &&
      isStateValid
    ) {
      axios({
        method: 'post',
        url: CHECK,
        timeout: 5000,
        data: formData,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => {
          setOtp(response.data.otp);
          setTimeout(() => {
            Snackbar.show({
              text: 'OTP sent succesfully',
              duration: Snackbar.LENGTH_SHORT,
            });
          }, 2000);
        })
        .catch(error => {
          const errormsg = JSON.stringify(error?.response?.data?.message);
          Snackbar.show({
            text: errormsg.slice(1, -1),
            duration: Snackbar.LENGTH_SHORT,
          });
        });
    } else {
      Snackbar.show({
        text: 'All fields are required',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

  return (
    <>
      <Card
        title="Sign Up"
        title1="Create better"
        title2="together"
        description="Join our community"
        hide={hide}>
        {!modalVisible && !stateModal && (
          <View
            style={{
              gap: 20,
              width: '100%',
              alignItems: 'center',
              paddingHorizontal: '7%',
            }}>
            <CustomTextInput
              placeholder="Enter your full name"
              value={fullName}
              onChangeText={value => setFullName(value)}></CustomTextInput>
            {fullNameError && <ErrorText>{fullNameError}</ErrorText>}
            <CustomTextInput
              placeholder="Enter your email id"
              value={email}
              onChangeText={value => setEmail(value)}></CustomTextInput>
            {emailError && <ErrorText>{emailError}</ErrorText>}
            {/* ----------- */}
            <View style={styles.phonenumberContainer}>
              <Pressable
                style={{flexDirection: 'row', alignItems: 'center', gap: 4}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setCheck(true);
                  setHide(!hide);
                }}>
                <Text style={{fontSize: 13, color: 'black'}}>
                  +{countryCode}
                </Text>
                <Icon name="chevron-down" color="black" size={20}></Icon>
              </Pressable>
              <TextInput
                value={phone}
                keyboardType="number-pad"
                style={{fontSize: 13, fontWeight: '400'}}
                placeholder="Enter your phone number"
                placeholderTextColor="#7D7463"
                onChangeText={value =>{
                  setPhoneNumber(countryCode + value)
                  setPhone(value)
                }
                  
                }></TextInput>
            </View>

            {phoneNumberError && <ErrorText>{phoneNumberError}</ErrorText>}

            <View style={{flexDirection: 'row', gap: 10}}>
              <Pressable
                style={[styles.pressable]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setCheck(false);
                  setHide(!hide);
                }}>
                <Text style={{fontSize: 13, color: '#525252'}}>
                  {countryName}
                </Text>
                <Icon name="chevron-down" color="#525252" size={20}></Icon>
              </Pressable>

              <Pressable
                style={[styles.pressable]}
                onPress={() => {
                  setStateModal(!stateModal);
                  setHide(!hide);
                }}>
                <Text style={{fontSize: 13, color: '#525252'}}>{state}</Text>
                <Icon name="chevron-down" color="#525252" size={20}></Icon>
              </Pressable>
            </View>

            <CustomButton
              title="CONTINUE"
              icon="arrow-right"
              onPress={handleSignUp}></CustomButton>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#4F4F4F',
                  fontWeight: '400',
                }}>
                Already a member?
              </Text>
              <Pressable
                style={{marginLeft: 2}}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={{fontSize: 12, color: 'red', fontWeight: '400'}}>
                  Sign In
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </Card>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          setHide(!hide);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: '50%',
              paddingHorizontal: 10,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}>
            <CustomTextInput
              placeholder="search"
              style={{marginVertical: 25}}
              onChangeText={handleSearchChange}></CustomTextInput>
            <ScrollView>
              {(filteredCountry.length !== 0
                ? filteredCountry
                : countryData
              ).map(data => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setCountryCode(data.mobile_code);
                    setCountryId(data.id);
                    setCountryName(data.name);
                    setModalVisible(!modalVisible);
                    setHide(!hide);
                  }}
                  key={data.id}>
                  <Text
                    style={{
                      padding: 10,
                      borderBottomWidth: 1,
                      borderColor: '#F1F1F1',
                      color: '#525252',
                    }}>
                    {check && `(+${data.mobile_code}) ${data.name} `}
                    {!check && ` ${data.name} `}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={stateModal}
        animationType="slide"
        onRequestClose={() => {
          setStateModal(!stateModal);
          setHide(!hide);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 10,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              height: '50%',
            }}>
            <View>
              <CustomTextInput
                placeholder="Search"
                style={{marginVertical: 25}}></CustomTextInput>
            </View>
            {statesData.length === 0 && <Text style={{color:"#525252",paddingLeft:10}}>No states available</Text>}
            
            <ScrollView>
              {statesData?.map(data => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setStateId(data.id);
                    setState(data.name);

                    setStateModal(!stateModal);
                    setHide(!hide);
                  }}
                  key={data.id}>
                  <Text
                    style={{
                      padding: 10,
                      borderBottomWidth: 1,
                      borderColor: '#F1F1F1',
                      color: '#525252',

                      //  color:theme === "dark" ? "#525252" : "black"
                    }}>
                    {data.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  pressable: {
    height: 44,
    // width: '50%',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    fontWeight: '400',
    paddingHorizontal: '5%',
    color: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  phonenumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    height: 44,
    width: '100%',
    borderRadius: 10,

    fontWeight: '400',
    paddingHorizontal: 10,
    color: 'black',
  },
});
