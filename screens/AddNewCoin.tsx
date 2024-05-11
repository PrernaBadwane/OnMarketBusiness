import {
    SafeAreaView,
    Alert,
    StyleSheet,
    Dimensions,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
   
  } from 'react-native';
  import React, {useState} from 'react';
  const previous = require('../images/back.png');

  import { NativeStackScreenProps } from '@react-navigation/native-stack';
  import { RootStackPramList } from '../App';
  
  type AddCoinProps=NativeStackScreenProps<RootStackPramList>
  
  
  
  const AddNewCoin = ({navigation}:AddCoinProps) => {
    const screenHeight = Dimensions.get('window').height;
    const [amount, setAmount] = useState('');
    const [discription, setDiscription] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [vendorID, setVendorID] = useState('');
    const [quantity, setQuantity] = useState('');

    
  // save this data on data based
    const [data, setData] = useState({});
  
    const handleAmountChange = (text: string) => {
      
      setAmount(text);
    };
    const handleDiscriptionChange = (text: string) => {
      
      setDiscription(text);
    };
    const handleExpiryDateChange = (text: string) => {
      
      setExpiryDate(text);
    };
    const handleVendorIDChange = (text: string) => {
      
      setVendorID(text);
    };
    const handleQuantityChange = (text: string) => {
      
      setQuantity(text);
    };
  
   const back=()=>{
    navigation.navigate("Billing")
   }  
  
    const handleSubmit = () => {
      // Check if phone number is valid (e.g., 10 digits for a basic example)
      setData({discription,expiryDate,amount,quantity,vendorID})
    };
  
    return (
      <SafeAreaView style={{height: screenHeight}}>
        <View style={styles.container}>
      
          <TouchableOpacity onPress={back} style={styles.imgDiv}>
            <Image style={styles.img} source={previous} />
            </TouchableOpacity>
        
          
          <View style={styles.input}>
          <View>
            <Text style={styles.heading}>New Coin </Text>
          </View>
            <TextInput
              onChangeText={handleAmountChange}
              value={amount}
              cursorColor="#9BDDFF"
              placeholder="New Amount"
              placeholderTextColor="#b2b2b2"
              style={styles.inputField}
            /> 
            <TextInput
              onChangeText={handleDiscriptionChange}
              value={discription}
              cursorColor="#9BDDFF"
              placeholder="Discription"
              placeholderTextColor="#b2b2b2"
              style={styles.inputField}
            /> 
            <TextInput
              onChangeText={handleExpiryDateChange}
              value={expiryDate}
              cursorColor="#9BDDFF"
              placeholder="ExpiryDate"
              placeholderTextColor="#b2b2b2"
              style={styles.inputField}
            /> 
            
            
            <TextInput
              onChangeText={handleVendorIDChange}
              value={vendorID}
              cursorColor="#9BDDFF"
              placeholder="Vendor ID"
              placeholderTextColor="#b2b2b2"
              style={styles.inputField}
            /> 
            <TextInput
              onChangeText={handleQuantityChange}
              value={quantity}
              cursorColor="#9BDDFF"
              placeholder="Quantity"
              placeholderTextColor="#b2b2b2"
              style={styles.inputField}
            /> 
            
            <View>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
          </View>
          
        </View>
        <View></View>
      </SafeAreaView>
    );
  };
  
  export default AddNewCoin;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 20,
      backgroundColor: '#F9F9F9',
    },
  
    
    heading: {
      color: 'black',
      fontSize: 40,
      fontWeight: '900',
      margin: 4,
      padding: 2,
    },
    inputField: {
      backgroundColor: 'white',
      elevation: 4,
      marginVertical: 8,
      marginHorizontal: 4,
      borderRadius: 8,
      color: 'black',
      paddingHorizontal:10,
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
    input:{marginTop:'20%'},
    buttonText: {
      color: '#2b0b0b',
      fontSize: 18,
      fontWeight: 'bold', // make the text bold
      alignSelf: 'center',
      textAlignVertical: 'center',
      margin: 4,
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
    }
  });
  