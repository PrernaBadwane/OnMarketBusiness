import {StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import React,{useState} from 'react';

interface Product {
  id: string;
  product: string;
  price: number;
  quantity: number;
  consumerId: string;
  deliveryType: string;
  productsDetails: string;
  orderedOn: Date;
  productImage: string;
  deliveryStatus:false
}

interface OrderProps {
  orderedProduct: Product;
  onPress: (product: Product) => void;
}
const DATA: Product[] = [
  {
    id: '1',
    product: 'product1',
    price: 90,
    quantity: 1,
    consumerId: 'khbdhfv',
    deliveryType: 'nbsdjkf',
    productsDetails: 'hh',
    orderedOn: new Date(2024, 9, 29),
    productImage:
      'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
      deliveryStatus:false,
  },
];

const Products= () => {
   
   

  return (

    <Text>products</Text>
  );
};

export default Products;

const styles = StyleSheet.create({});
