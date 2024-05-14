import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackPramList } from '../App';
const previous = require('../images/back.png');

type BillingProps = NativeStackScreenProps<RootStackPramList>;

interface Product {
  id: string;
  product: string;
  price: number;
}

interface ItemProps {
  item: Product;
  onPress: (product: Product) => void;
}

const DATA: Product[] = [
  { id: '1', product: 'Product 1', price: 0 },
  { id: '2', product: 'Product 2', price: 20 },
  { id: '3', product: 'Product 3', price: 30 },
  { id: '4', product: 'Product 4', price: 40 },
  { id: '5', product: 'Product 5', price: 50 },
  { id: '6', product: 'Product 6', price: 0 },
  { id: '7', product: 'Product 7', price: 0 },
  { id: '8', product: 'Product 8', price: 80 },
];

const Item: React.FC<ItemProps> = ({ item, onPress }) => {
  const handlePress = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <ScrollView>
        <Text style={{ color: 'black', width: '100%', marginVertical: 4 }}>
          {item.product}
        </Text>
      </ScrollView>
      {item.price > 0 ? <Text style={styles.price}>{item.price}/-</Text> : null}
    </TouchableOpacity>
  );
};

const SelectionItem: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [payAmount, setPayAmount] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [inputPrice, setInputPrice] = useState('');

  const removeItemFromCart = (productId: string) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  useEffect(() => {
    const newTotalAmount = cart.reduce((acc, cur) => acc + cur.price, 0);
    setTotalAmount(newTotalAmount);
  }, [cart]);

  const handlePressItem = (product: Product) => {
    if (product.price === 0) {
      setSelectedProduct(product);
    } else {
      setSelectedProduct(null); // Reset custom price input field visibility
      setCart(prevCart => [...prevCart, product]);
    }
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      const price = parseFloat(inputPrice);
      if (!isNaN(price) && price > 0) {
        const productWithPrice: Product = { ...selectedProduct, price };
        setCart(prevCart => [...prevCart, productWithPrice]);
        setInputPrice('');
        setSelectedProduct(null);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} onPress={handlePressItem} />}
        keyExtractor={item => item.id + item.product}
        numColumns={3}
      />
      <View style={styles.marginDiv}>
        {selectedProduct && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              value={inputPrice}
              onChangeText={setInputPrice}
              placeholder="Enter price"
              placeholderTextColor="#b2b2b2"
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.marginDiv}>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <ScrollView horizontal>
                <Text
                  style={{ color: 'black', width: '100%', marginVertical: 4 }}>
                  {item.product}
                </Text>
              </ScrollView>
              <View style={styles.itemProperty}>
                <Text style={{ color: 'black', marginHorizontal: 8 }}>
                  {item.price}/-
                </Text>
                <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
                  <Text style={{ color: 'red' }}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.id + item.product}
        />
      </View>
      {totalAmount > 0 && (
        <View>
          <View style={styles.amountBlock}>
            <Text style={styles.amount}>Total Amount:</Text>
            <Text style={[styles.amount, { width: '40%' }]}>{totalAmount}/-</Text>
          </View>
          <View style={styles.amountBlock}>
            <Text style={styles.amount}>Pay Amount:</Text>
            <TextInput
              value={payAmount}
              onChangeText={text => setPayAmount(text)}
              cursorColor="#9BDDFF"
              placeholder="Amount"
              placeholderTextColor="#b2b2b2"
              style={styles.inputField}
              keyboardType="numeric"
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const Billing: React.FC<BillingProps> = ({ navigation }) => {
  const back = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={back} style={styles.imgDiv}>
        <Image style={styles.img} source={previous} />
      </TouchableOpacity>
      <ScrollView>
        <SelectionItem />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('GenerateBill')}
            style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Billing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F9F9F9',
  },
  button: {
    backgroundColor: '#1e90ff',
    elevation: 4,
    padding: 12,
    marginHorizontal: 4,
    borderRadius: 64 / 2,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlignVertical: 'center',
    margin: 4,
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
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 4,
    width: '30%',
    aspectRatio: 1,
    marginVertical: 8,
    marginHorizontal: 4,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: 'green',
    width: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
    padding: 20,
  },
  marginDiv: {
    marginVertical: 10,
  },
  cartItem: {
    backgroundColor: '#ffffff',
    elevation: 4,
    margin: 4,
    borderRadius: 4,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemProperty: {
    flexDirection: 'row',
    gap: 8,
    marginHorizontal: 10,
  },
  amountBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 15,
  },
  amount: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  inputField: {
    backgroundColor: 'white',
    elevation: 4,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    color: 'black',
    paddingHorizontal: 20,
    width: '50%',
    fontSize: 18,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#1e90ff',
    elevation: 4,
    marginTop: 20,
    marginHorizontal: 4,
    borderRadius: 64 / 2,
    padding: 12,
    width: '90%',
    height: 60,
    alignSelf: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlignVertical: 'center',
    margin: 4,
  },
});
