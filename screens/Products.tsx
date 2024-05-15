import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Product {
  id: string;
  product: string;
  price: number;
  productsDetails: string;
  productImage: string;
  catogry: string;
}

interface Category {
  category: string;
  categoryImage: string;
}

const categories: Category[] = [
  {
    category: '1',
    categoryImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
  {
    category: '2',
    categoryImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
  {
    category: '3',
    categoryImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
  {
    category: '4',
    categoryImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
  {
    category: '5',
    categoryImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
  {
    category: '6',
    categoryImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
  },
];

const DATA: Product[] = [
  {
    id: '1',
    product: 'product1',
    price: 90,
    productsDetails: 'hh',
    productImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
    catogry: '1',
  },
  {
    id: '2',
    product: 'product2',
    price: 90,
    productsDetails: 'hh',
    productImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
    catogry: '1',
  },
  {
    id: '3',
    product: 'product3',
    price: 90,
    productsDetails: 'hh',
    productImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
    catogry: '2',
  },
  {
    id: '4',
    product: 'product4',
    price: 80,
    productsDetails: 'hh',
    productImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
    catogry: '2',
  },
  {
    id: '5',
    product: 'product5',
    price: 90,
    productsDetails: 'hh',
    productImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
    catogry: '3',
  },
  {
    id: '6',
    product: 'product6',
    price: 90,
    productsDetails: 'hh',
    productImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
    catogry: '3',
  },
  {
    id: '7',
    product: 'product7',
    price: 90,
    productsDetails: 'hh',
    productImage: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
    catogry: '3',
  },
];

const Products = () => {
  const [products, setProducts] = useState(DATA);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const deleteProduct = (id: string) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const filteredProducts = selectedCategory
    ? products.filter(p => p.catogry === selectedCategory)
    : products;

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.productImage }} style={styles.image} />
      <Text style={styles.productDetails}>{item.product}</Text>
      <Text style={styles.productDetails}>
        Price: {'\u20B9'}{item.price}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => deleteProduct(item.id)}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setSelectedCategory(null)}>
          <View style={[styles.imageBackground, selectedCategory === null && styles.selectedImageBackground]}>
            <Image
              source={{ uri: "https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg" }}
              style={[styles.categoryImage, selectedCategory === null && styles.selectedCategoryButton]}
            />
          </View>
          <Text style={styles.categoryButtonText}>All</Text>
        </TouchableOpacity>
        {categories.map(category => (
          <TouchableOpacity
            key={category.category}
            style={styles.categoryButton}
            onPress={() => setSelectedCategory(category.category)}>
            <View style={[styles.imageBackground, selectedCategory === category.category && styles.selectedImageBackground]}>
              <Image
                source={{ uri: category.categoryImage }}
                style={[styles.categoryImage, selectedCategory === category.category && styles.selectedCategoryButton]}
              />
            </View>
            <Text style={styles.categoryButtonText}>{category.category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
        <View>
          <Text style={styles.heading}>All Products</Text>
        </View>
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    alignItems:"center",
    alignSelf:"flex-start",
    elevation: 4,
    width: '45%',
    margin: 10,
    borderRadius: 8,
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  container: {
    flex: 1,
    paddingVertical: '20%',
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
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  categoryButton: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 50,
  },
  selectedCategoryButton: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: 'gray',
    width: 65,
    height: 65,
  },
  selectedImageBackground: {
    backgroundColor: '#FFFFFF',
    padding: 0,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: "white",
    width: 65,
    height: 65,
    elevation: 16,
  },
  imageBackground: {
    backgroundColor: '#FFFFFF',
    padding: 2,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: 'gray',
    width: 65,
    height: 65,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  categoryButtonText: {
    marginVertical: 8,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
