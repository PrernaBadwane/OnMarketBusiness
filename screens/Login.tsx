import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackPramList } from '../App';

type LoginProps=NativeStackScreenProps<RootStackPramList>
// .png
const loginImage = require('../images/login.png');

const Login= ({navigation}:LoginProps) => {
  
  const screenHeight: number = Dimensions.get('window').height;
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlePhoneChange = (text: string): void => {
    const cleanedPhoneNumber: string = text.replace(/[^0-9]/g, '');
    setPhoneNumber(cleanedPhoneNumber);
  };

  const handlePasswordChange = (text: string): void => {
    setPassword(text);
  };

  const handleSubmit = (): void => {
    
    if (phoneNumber.length === 10) {
       navigation.navigate('Dashboard')
    } else {
      Alert.alert('Error', 'Please enter a valid phone number.');
    }
  };

  return (
    <SafeAreaView style={{ height: screenHeight }}>
      <View style={styles.logDiv}>
        <Text style={styles.heading}>Login</Text>
        <View>
          <View>
            <TextInput
              onChangeText={handlePhoneChange}
              value={phoneNumber}
              cursorColor="#9BDDFF"
              placeholder="Phone Number"
              placeholderTextColor="#b2b2b2"
              style={styles.inputField}
              keyboardType='numeric'
            />
            <TextInput
              onChangeText={handlePasswordChange}
              secureTextEntry={true}
              value={password}
              cursorColor="#9BDDFF"
              placeholder="Password"
              placeholderTextColor="#b2b2b2"
              style={styles.inputField}
            />
          </View>
          <View>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imgDiv}>
            <Image height={240} width={240} source={loginImage} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logDiv: {
    paddingTop: '30%',
    paddingHorizontal: 20,
    backgroundColor: '#F9F9F9',
    flex: 1, // Make the logDiv fill the entire parent View
  },
  heading: {
    color: 'black',
    fontSize: 40,
    fontWeight: '900',
    margin: 8,
    padding: 2,
  },
  inputField: {
    backgroundColor: 'white',
    elevation: 4,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    color: 'black',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1e90ff',
    height: 42,
    elevation: 4,
    marginTop: 16,
    marginHorizontal: 4,
    borderRadius: 42 / 2,
    padding: 3,
  },
  buttonText: {
    color: '#2b0b0b',
    fontSize: 18,
    fontWeight: 'bold', // make the text bold
    alignSelf: 'center',
    textAlignVertical: 'center',
    margin: 4,
  },
  imgDiv: {
    margin: 80,
    flex: 1,
    alignItems:"center"
  },
});
