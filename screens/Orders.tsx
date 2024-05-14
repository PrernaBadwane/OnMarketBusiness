import {
  StyleSheet,
  FlatList,
  Image,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

interface Product {
  orderId: string;
  product: string;
  price: number;
  quantity: number;
  consumerId: string;
  deliveryType: string;
  productsDetails: string;
  orderedOn: Date;
  productImage: string;
  deliveryStatus: false;
}

interface OrderProps {
  orderedProduct: Product;
  onPress?: (product: Product) => void;
  onDispatch?: (product: Product) => void;
}

const Orders: React.FC = () => {
  const [pendingOrders, setPendingOrders] = useState<Product[]>([
    {
      orderId: '4',
      product: 'product1',
      price: 90,
      quantity: 1,
      consumerId: 'khbdhfv',
      deliveryType: 'nbsdjkf',
      productsDetails:
        'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
      orderedOn: new Date(2024, 9, 29, 12, 30),
      productImage:
        'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
      deliveryStatus: false,
    },
    {
      orderId: '1',
      product: 'product1',
      price: 90,
      quantity: 1,
      consumerId: 'khbdhfv',
      deliveryType: 'nbsdjkf',
      productsDetails:
        'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
      orderedOn: new Date(2024, 9, 29, 12, 30),
      productImage:
        'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
      deliveryStatus: false,
    },
    {
      orderId: '2',
      product: 'product1',
      price: 90,
      quantity: 1,
      consumerId: 'khbdhfv',
      deliveryType: 'nbsdjkf',
      productsDetails:
        'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
      orderedOn: new Date(2024, 9, 29, 12, 30),
      productImage:
        'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
      deliveryStatus: false,
    },
    {
      orderId: '3',
      product: 'product1',
      price: 90,
      quantity: 1,
      consumerId: 'khbdhfv',
      deliveryType: 'nbsdjkf',
      productsDetails:
        'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
      orderedOn: new Date(2024, 9, 29, 12, 30),
      productImage:
        'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
      deliveryStatus: false,
    },
  ]);
  const [dispatchedProducts, setDispatchedProducts] = useState<Product[]>([]);

  const handlePressItem = (product: Product) => {
    setDispatchedProducts([...dispatchedProducts, product]);
    setPendingOrders(
      pendingOrders.filter(order => order.orderId !== product.orderId),
    );
  };

  const handleDispatch = (product: Product) => {
    handlePressItem(product);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {pendingOrders.length > 0 && (
          <View>
            <Text style={styles.heading}>Orders</Text>
            <FlatList
              data={pendingOrders}
              renderItem={({item}) => (
                <Products
                  orderedProduct={item}
                  onPress={handlePressItem}
                  onDispatch={handleDispatch}
                />
              )}
              keyExtractor={item => item.orderId}
              numColumns={1}
            />
          </View>
        )}

        {dispatchedProducts.length > 0 && (
          <View>
            <Text style={styles.heading}>Dispatched & Delivered</Text>
            <FlatList
              data={dispatchedProducts}
              renderItem={({item}) => <Products orderedProduct={item} />}
              keyExtractor={item => item.orderId}
              numColumns={1}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const Products: React.FC<OrderProps> = ({ orderedProduct, onPress, onDispatch }) => {
  const handlePress = () => {
    if (onPress) {
      onPress(orderedProduct);
    }
  };

  const handleDispatchClick = () => {
    if (onDispatch) {
      onDispatch(orderedProduct);
    }
  };

  return (
    <View>
      <View style={styles.orderCard}>
        <View style={styles.imageDiv}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
            }}
          />
        </View>
        <View style={styles.detailsDiv}>
          <View style={styles.colDivMain}>
            <View style={{justifyContent: 'flex-end'}}>
              <Text style={styles.productName}>{orderedProduct.product}</Text>
            </View>

            {!onDispatch ? null : (
              <TouchableOpacity
                style={styles.button}
                onPress={handleDispatchClick}>
                <Text style={styles.buttonText}>Dispatch</Text>
              </TouchableOpacity>
            )}
          </View>
          <ScrollView horizontal={true} style={styles.detailsWidth}>
            <Text style={[styles.productDetails]} numberOfLines={1}>
              {orderedProduct.productsDetails}
            </Text>
          </ScrollView>
          <View style={styles.colDivMain}>
            <View style={styles.colDiv}>
              <Text style={styles.productDetails}>price:</Text>
              <Text style={styles.productDetailsValue}>
                {'\u20B9'}
                {'' + orderedProduct.price}
              </Text>
            </View>
            <View style={styles.colDiv}>
              <Text style={styles.productDetails}>Qty:</Text>
              <Text style={styles.productDetailsValue}>
                {orderedProduct.quantity}
              </Text>
            </View>
          </View>
          <View style={styles.colDiv}>
            <Text style={styles.productDetails}>Order ID:</Text>
            <Text style={styles.productDetailsValue}>
              {orderedProduct.orderId}
            </Text>
          </View>
          <View style={styles.colDiv}>
            <Text style={styles.productDetails}>Consumer Id:</Text>
            <Text style={styles.productDetailsValue}>
              {orderedProduct.consumerId}
            </Text>
          </View>
          <View style={styles.colDiv}>
            <Text style={styles.productDetails}>Delivery Type:</Text>
            <Text style={styles.productDetailsValue}>
              {orderedProduct.deliveryType}
            </Text>
          </View>

          <View style={styles.colDiv}>
            <Text style={styles.productDetails}>Ordered on:</Text>
            <Text style={styles.productDetailsValue}>
              {orderedProduct.orderedOn.toLocaleString()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
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
  orderCard: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    elevation: 4,
    borderRadius: 8,
    marginVertical: 10,
    paddingEnd: 10,
    width: '100%',
  },
  imageDiv: {
    width: '40%',
    height: '100%',
    margin: 0,
    padding: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  img: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  detailsDiv: {
    marginVertical: 8,
    paddingVertical: 8,
    paddingStart: 10,
    paddingEnd: '30%',
    width: '100%',
  },
  detailsWidth: {
    width: '70%',
  },
  productName: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
  },
  productDetails: {
    color: 'gray',
    marginVertical: 4,
  },
  productDetailsValue: {
    color: 'black',
    marginVertical: 4,
    fontWeight: '500',
  },
  colDiv: {
    flex: 1,
    flexDirection: 'row',
    color: 'black',
  },
  colDivMain: {
    flex: 1,
    flexDirection: 'row',
    color: 'black',
    justifyContent: 'space-between',
    paddingEnd: 20,
  },
  button: {
    backgroundColor: '#1e90ff',
    height: 30,
    elevation: 4,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#2b0b0b',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
