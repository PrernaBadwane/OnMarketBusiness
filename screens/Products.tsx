import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

interface Product {
  id: string;
  product: string;
  price: number;
  productsDetails: string;
  productImage: string;
}

const DATA: Product[] = [
  {
    id: '1',
    product: 'product1',
    price: 90,
    productsDetails: 'hh',
    productImage:
      'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
  {
    id: '2',
    product: 'product2',
    price: 90,
    productsDetails: 'hh',
    productImage:
      'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
  {
    id: '3',
    product: 'product2',
    price: 90,
    productsDetails: 'hh',
    productImage:
      'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
  {
    id: '4',
    product: 'product2',
    price: 90,
    productsDetails: 'hh',
    productImage:
      'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
  {
    id: '5',
    product: 'product2',
    price: 90,
    productsDetails: 'hh',
    productImage:
      'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
  {
    id: '6',
    product: 'product2',
    price: 90,
    productsDetails: 'hh',
    productImage:
      'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
  {
    id: '7',
    product: 'product2',
    price: 90,
    productsDetails: 'hh',
    productImage:
      'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
  
];

const Products = () => {
  const [products, setProducts] = useState(DATA);

  const deleteProduct = (id: string) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.productImage }} style={styles.image} />
      <Text style={styles.productDetails}>{item.product}</Text>
      <Text style={styles.productDetails}>Price: {'\u20B9'}{item.price}</Text>
      <Button title="Delete" onPress={() => deleteProduct(item.id)} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
        <Text style={styles.heading}>All Products</Text>
      </View>
           <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      
    />

      </ScrollView>
      
      
    </SafeAreaView>
    
  );
};

export default Products;

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    backgroundColor:"white",
    elevation:4,
    width:"45%",
    margin:10,
    borderRadius:8,
    paddingBottom:10
  },
  image: {
    width: "100%",
    height:200,
    marginBottom: 10,
    borderTopRightRadius:8,
    borderTopLeftRadius:8,

    
  },
  container: {
    flex: 1,
    paddingVertical: "20%",
    backgroundColor: '#F9F9F9',
   

  },
 
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight: '900',
    margin: 8,
    padding: 2,
    alignContent: 'flex-start',
  },
  productDetails: {
    color: 'gray',
    marginVertical: 4,
  },
});
