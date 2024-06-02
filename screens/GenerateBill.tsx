import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import Cards from './Cards';
const add = require('../images/add.png');
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackPramList } from '../App';
const previous = require('../images/back.png');

type GenerateBillProps = NativeStackScreenProps<RootStackPramList>;

const GenerateBill = ({ navigation }: GenerateBillProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');

  const handlePhoneChange = (text: string) => {
    const cleanedPhoneNumber = text.replace(/[^0-9]/g, '');
    setPhoneNumber(cleanedPhoneNumber);
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleSubmit = () => {
    if (phoneNumber.length === 10) {
      Alert.alert('Success', 'Phone number is valid: ' + phoneNumber);
      navigation.navigate('Bill');
    } else {
      Alert.alert('Error', 'Please enter a valid phone number.');
    }
  };

  const back = () => {
    navigation.navigate('Billing');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.div}>
        <View style={[styles.colDivMain, styles.alignRight]}>
          <TouchableOpacity onPress={back} style={styles.imgDiv}>
            <Image style={styles.img} source={previous} />
          </TouchableOpacity>
          <TouchableOpacity onPress={back} style={[styles.imgDiv, styles.addBtn]}>
            <Text style={styles.addButtonText}>Add New Coins</Text>
            <Image style={styles.img} source={add} />
          </TouchableOpacity>
        </View>
        <View style={styles.mainDiv}>
          <TextInput
            onChangeText={handlePhoneChange}
            value={phoneNumber}
            cursorColor="#9BDDFF"
            placeholder="Phone Number"
            placeholderTextColor="#b2b2b2"
            style={styles.inputField}
            keyboardType="numeric"
          />
          <TextInput
            onChangeText={handleNameChange}
            value={name}
            cursorColor="#9BDDFF"
            placeholder="Name"
            placeholderTextColor="#b2b2b2"
            style={styles.inputField}
          />
          <View style={styles.cardsContainer}>
            <Cards />
          </View>
          <View style={styles.btnDiv}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GenerateBill;

const styles = StyleSheet.create({
  div: {
    paddingTop: '5%',
    paddingHorizontal: 20,
    backgroundColor: '#F9F9F9',
    flex: 1,
  },
  inputField: {
    backgroundColor: 'white',
    elevation: 4,  
    marginVertical: 8,
    borderRadius: 8,
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 12, // Added vertical padding for better appearance
  },
  btnDiv: {
    marginTop:300,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#1e90ff',
    height: 42,
    elevation: 4,
    borderRadius: 21,
    padding: 8,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#2b0b0b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imgDiv: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 11,
    paddingVertical: 10,
  },
  img: {
    height: 15,
    width: 15,
  },
  mainDiv: {
  
  },
  addBtn: {
    flex: 1,
    flexDirection: 'row',
    color: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colDivMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#2b0b0b',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10, // Added margin to space out text from image
  },
  alignRight: {
    gap: 200, // Reduced gap to a more reasonable amount
  },
  cardsContainer: {
    flex: 1,
    justifyContent: 'center',
    height:400,
    backgroundColor:"black"
  },
});
