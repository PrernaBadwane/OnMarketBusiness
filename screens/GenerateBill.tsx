import React, {useState, useEffect, useRef} from 'react';
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
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import Cards from './Cards';
const add =require('../images/add.png');
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackPramList } from '../App';
const previous = require('../images/back.png');
type GenerateBillProps=NativeStackScreenProps<RootStackPramList>




const GenerateBill = ({navigation}:GenerateBillProps) => {
  const screenHeight = Dimensions.get('window').height;
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
    } else {
      Alert.alert('Error', 'Please enter a valid phone number.');
    }
  };
  const back=()=>{
    navigation.navigate("Billing")
   }  
  

  

  return (
    <SafeAreaView style={{height: screenHeight}}>
      <View style={styles.div}>
      <TouchableOpacity onPress={back} style={styles.imgDiv}>
            <Image style={styles.img} source={previous} />
            </TouchableOpacity>
        
        <View style={styles.mainDiv}>
          <View>
            <TextInput
              onChangeText={handlePhoneChange}
              value={phoneNumber}
              cursorColor="#9BDDFF"
              placeholder="phone number"
              placeholderTextColor="#b2b2b2"
              style={styles.inputField}
              keyboardType='numeric'
            />
            <TextInput
              onChangeText={handleNameChange}
              value={name}
              cursorColor="#9BDDFF"
              placeholder="Name"
              placeholderTextColor="#b2b2b2"
              style={styles.inputField}
            />
          </View>
          <SafeAreaView>
            <Cards/>
            <TouchableOpacity onPress={()=>{navigation.navigate("AddNewCoin")}} style={styles.addBtn}>
    <Image style={[styles.grid, styles.add]} source={add} />
    </TouchableOpacity>
          </SafeAreaView>
          
          <View style={styles.btnDiv}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
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
    marginHorizontal: 4,
    borderRadius: 8,
    color: 'black',
    paddingHorizontal: 10,
  },
  
  btnDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 6,
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
  imgDiv:{
    height:35,
    width:35,
    borderRadius:20,
    backgroundColor:"#F0F0F0",
    paddingHorizontal:11,
    paddingVertical:10,
    
  
  },
  img:{
    height:15,
    width:15
  },
  add:{
    height:20,
    width:20,
    
    
  },
  mainDiv:{
    padding:15,
  }
  ,
  addBtn:{
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
 
});
