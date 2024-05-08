import React, { useState,useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

interface Product {
  id: string;
  product: string;
  price: number;

}
interface ItemProps {
  item: Product;
  onPress: (product: Product) => void;
  onRemove: (productId: string) => void; // Assuming productId is a string
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

interface ItemProps {
  item: Product;
  onPress: (product: Product) => void;
}



const Item: React.FC<ItemProps> = ({ item, onPress }) => {


  // custom price input
  const [inputPrice, setInputPrice] = useState('');
  const handleInputChange = (text: string) => {
    setInputPrice(text);
  };

// handle on onpess event to add item in cart
  const handlePress = () => {
    if (item.price > 0) {
      onPress(item);
    }
  };

  //  handle on onpess event to add item in cart if price of product is not predefined
  const handleAddToCart = () => {
    const price = parseFloat(inputPrice);
    if (!isNaN(price) && price > 0) {
      const productWithPrice: Product = { ...item, price };
      onPress(productWithPrice);
      setInputPrice('');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <Text style={styles.title}>{item.product}</Text>
      {item.price > 0 ? (
        <Text style={styles.price}>{item.price}</Text>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            
            cursorColor="#9BDDFF"
            placeholder="price"
            placeholderTextColor="#b2b2b2"
            style={styles.inputField2}
            value={inputPrice}
            onChangeText={handleInputChange}
          />
          <TouchableOpacity onPress={handleAddToCart} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};


// ################################################################  REMOVE FUNCTION HAS BUS AS (need uniqur id for each)

const SelectionItem: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [payableAmount, setPayableAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to remove an item from the cart by ID
  const removeItemFromCart = (productId: string) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  // Calculate total amount whenever cart changes
  useEffect(() => {
    const newTotalAmount = cart.reduce((acc, cur) => acc + cur.price, 0);
    setTotalAmount(newTotalAmount);
  }, [cart]);

  // Render item function
  const renderItem: ({ item }: { item: Product }) => JSX.Element = ({ item }) => (
    <Item
      item={item}
      onPress={(product) => {
        setCart([...cart, product]);
      }}
      onRemove={(productId) => {
        removeItemFromCart(productId);
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
      <Text style={styles.cartTitle}>Cart:</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={{ color: 'black' }}>{item.product}</Text>
            <Text style={{ color: 'black' }}>{item.price}</Text>
            <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
              <Text style={{ color: 'red' }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <View>
        <View style={styles.amountBlock}>
          <Text style={styles.amount}>Total Amount:</Text>
          <Text style={[styles.amount, { width: '40%' }]}>{totalAmount}</Text>
        </View>
        <View style={styles.amountBlock}>
          <Text style={styles.amount}>Pay Amount:{}</Text>
          <TextInput
            onChangeText={setPayableAmount}
            value={payableAmount}
            cursorColor="#9BDDFF"
            placeholder="Amount"
            placeholderTextColor="#b2b2b2"
            style={styles.inputField}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    flex: 1,
    borderRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: 'green',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginRight: 5,
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    margin:2,
    height:35
  },
  addButtonText: {
    color: 'white',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  cartItem: {
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
  inputField: {
    backgroundColor: 'white',
    elevation: 4,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    color: 'black',
    paddingHorizontal: 20,
    width: '40%',
    fontSize: 18,
    fontWeight: '600',
  },
  inputField2: {
    backgroundColor: 'white',
    elevation: 4,
    marginVertical: 4,
    marginHorizontal: 2,
    borderRadius: 8,
    color: 'black',
    width: '60%',
    padding:0,
    height :35,
    paddingHorizontal:10
  },
});

export default SelectionItem;
