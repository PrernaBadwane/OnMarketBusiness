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



const AddNewCategory = () => {
  const screenHeight = Dimensions.get('window').height;
  const [category, setCategory] = useState('');

  const [rank, setRank] = useState('');
  const [price, setPrice] = useState('');
  const [hsnCode, setHsnCode] = useState('');
  const [gst, setGST] = useState('');


  // save this data on data based
  const [data, setData] = useState({});

  const handleCategoryChange = (text: string) => {
    
    setCategory(text);
  };
  const handleRankChange = (text: string) => {
    
    setRank(text);
  };
  const handlePriceChange = (text: string) => {
    
    setPrice(text);
  };
  const handleHsnCodeChange = (text: string) => {
    
    setHsnCode(text);
  };
  const handleGSTChange = (text: string) => {
    
    setGST(text);
  };

  

  const handleSubmit = () => {
    // Check if phone number is valid (e.g., 10 digits for a basic example)
    setData({rank,price,category,gst,hsnCode})
  };

  return (
    <SafeAreaView style={{height: screenHeight}}>
      <View style={styles.container}>
      <View style={styles.imgDiv}>
            <Image style={styles.img} source={previous} />
            </View>
        
        
        <View style={styles.input}>
        <View>
          <Text style={styles.heading}>New Category </Text>
        </View>
          <TextInput
            onChangeText={handleCategoryChange}
            value={category}
            cursorColor="#9BDDFF"
            placeholder="New Category"
            placeholderTextColor="#b2b2b2"
            style={styles.inputField}
          /> 
          <TextInput
            onChangeText={handleRankChange}
            value={rank}
            cursorColor="#9BDDFF"
            placeholder="Rank"
            placeholderTextColor="#b2b2b2"
            style={styles.inputField}
          /> 
          <TextInput
            onChangeText={handlePriceChange}
            value={price}
            cursorColor="#9BDDFF"
            placeholder="Price"
            placeholderTextColor="#b2b2b2"
            style={styles.inputField}
          /> 
          <TextInput
            onChangeText={handleHsnCodeChange}
            value={hsnCode}
            cursorColor="#9BDDFF"
            placeholder="HsnCode"
            placeholderTextColor="#b2b2b2"
            style={styles.inputField}
          /> 
          <TextInput
            onChangeText={handleGSTChange}
            value={gst}
            cursorColor="#9BDDFF"
            placeholder="GST%"
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

export default AddNewCategory;

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
    height:30,
    width:30,
    borderRadius:20/2,
    backgroundColor:"#0202020"
  
  },
  img:{
    height:15,
    width:15
  }
});
