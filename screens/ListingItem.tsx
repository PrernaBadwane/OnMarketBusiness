import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  
  const ListItem = () => {
    const [payableAmount, setPayableAmount] = useState('');
    const [TotalAmount, setTotalAmount] = useState('500');
    const [productsPurchased, setProductsPurchased] = useState([
      {name: 'Product 1', price: 100},
      {name: 'Product 2', price: 200},
      {name: 'Product 3', price: 300},
    ]);
  
    const handlePayableChange = (text: string) => {
      const cleanedPhoneNumber = text.replace(/[^0-9]/g, '');
      setPayableAmount(cleanedPhoneNumber);
    };
   
  
    return (
      <SafeAreaView>
        <View>
          <View>
            {productsPurchased.map((product, index) => (
              <View style={styles.listCard} key={index}>
                <View>
                  <Text style={{color: 'black'}}> {product.name}</Text>
                </View>
                <Text style={{color: 'black'}}>RS. {product.price}</Text>
              </View>
            ))}
          </View>
          <View>
            <View style={styles.amountBlock}>
              <Text style={styles.amount}>Total Amount:</Text>
              <Text style={[styles.amount, {width: '40%'}]}>{TotalAmount}</Text>
            </View>
            <View style={styles.amountBlock}>
              <Text style={styles.amount}>Pay Amount:{}</Text>
              <TextInput
                onChangeText={handlePayableChange}
                value={payableAmount}
                cursorColor="#9BDDFF"
                placeholder="Amount to pay"
                placeholderTextColor="#b2b2b2"
                style={styles.inputField}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ListItem;
  
  const styles = StyleSheet.create({
    inputField: {
      backgroundColor: 'white',
      elevation: 4,
      marginVertical: 8,
      marginHorizontal: 4,
      borderRadius: 8,
      color: 'black',
      paddingHorizontal: 10,
      width: '40%',
    },
    listCard: {
      backgroundColor: '#ffffff',
      elevation: 4,
      margin: 4,
      borderRadius: 4,
      flex: 1,
      flexDirection: 'row',
      height: 40,
      padding: 10,
      justifyContent: 'space-between',
    },
    amountBlock: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 60,
    },
    amount: {
      color: 'black',
      padding: 15,
      fontSize: 18,
      fontWeight: '600',
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
  });
  