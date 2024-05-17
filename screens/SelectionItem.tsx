import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';

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
  {id: '1', product: 'Product 1', price: 0},
  {id: '2', product: 'Product 2', price: 20},
  {id: '3', product: 'Product 3', price: 30},
  {id: '4', product: 'Product 4', price: 40},
  {id: '5', product: 'Product 5', price: 50},
  {id: '6', product: 'Product 6', price: 0},
  {id: '7', product: 'Product 7', price: 0},
  {id: '9', product: 'Product 8', price: 80},
  {id: '10', product: 'Product 5', price: 50},
  {id: '11', product: 'Product 6', price: 0},
  {id: '12', product: 'Product 7', price: 0},
  {id: '13', product: 'Product 8', price: 80},
];

const Item: React.FC<
  ItemProps & {productCounts: {[productId: string]: number}}
> = ({item, onPress, productCounts}) => {
  const handlePress = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <View style={styles.numberOfProductc}>
        {productCounts[item.id] && productCounts[item.id] > 0 && (
          <View>
            <Text style={{color: 'black'}}>{productCounts[item.id]}</Text>
          </View>
        )}
      </View>
      <ScrollView>
        <Text style={{color: 'black', width: '100%'}}>
          {item.product}
        </Text>
      </ScrollView>
      {item.price > 0 ? <Text style={styles.price}>{'\u20B9'}{item.price}/-</Text> : null}
    </TouchableOpacity>
  );
};

const SelectionItem: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [productCounts, setProductCounts] = useState<{
    [productId: string]: number;
  }>({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [payAmount, setPayAmount] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [inputPrice, setInputPrice] = useState('');

  const removeItemFromCart = (productId: string) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    updateProductCounts(updatedCart);
  };

  const updateProductCounts = (updatedCart: Product[]) => {
    const counts: {[productId: string]: number} = {};
    updatedCart.forEach(item => {
      counts[item.id] = (counts[item.id] || 0) + 1;
    });
    setProductCounts(counts);
  };

  useEffect(() => {
    const newTotalAmount = cart.reduce((acc, cur) => acc + cur.price, 0);
    setTotalAmount(newTotalAmount);
    updateProductCounts(cart);
  }, [cart]);

  const handlePressItem = (product: Product) => {
    setSelectedProduct(product);
    if (product.price === 0) {
      setSelectedProduct(product);
    } else {
      setCart(prevCart => [...prevCart, product]);
      setSelectedProduct(null);
    }
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      const price = parseFloat(inputPrice);
      if (!isNaN(price) && price > 0) {
        const productWithPrice: Product = {...selectedProduct, price};
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
        renderItem={({item}) => (
          <Item
            item={item}
            onPress={handlePressItem}
            productCounts={productCounts}
          />
        )}
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
          data={cart.slice().reverse()}
          renderItem={({item}) => (
            <View style={styles.cartItem}>
              <ScrollView horizontal>
                <Text
                  style={{color: 'black', width: '100%', marginVertical: 4}}>
                  {item.product}
                </Text>
              </ScrollView>
              <View style={styles.itemProperty}>
                <Text style={{color: 'black', marginHorizontal: 8}}>
                  {"\u20B9"}{item.price}/-
                </Text>
                <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
                  <Text style={{color: 'red'}}>Remove</Text>
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
            <Text style={[styles.amount, {width: '40%'}]}>{'\u20B9'}{totalAmount}/-</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 5,
    padding: 5,
  },
  item: {
    backgroundColor: 'white',
    
    borderRadius: 10,
    padding:15,
    elevation: 4,
    width: '30%',
    aspectRatio: 1,
    marginVertical: 8,
    marginHorizontal: 4,
    position:"relative"
  },
  title: {
    fontSize: 15,
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
    alignSelf: 'center',
    margin: 10,
    padding: 20,
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
    fontWeight: 'bold', // make the text bold
    alignSelf: 'center',
    textAlignVertical: 'center',
    margin: 4,
  },

  marginDiv: {
    marginVertical: 10,
  },
  cartTitleContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
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
  numberOfProductc:{
    backgroundColor:'#1e90ff',
    elevation:4,
    width:16,
    alignItems:"center",
    alignSelf:"flex-end",
    borderRadius:8,
    position:"absolute",
    top: 4, 
    right: 4, 
  }
});

export default SelectionItem;
