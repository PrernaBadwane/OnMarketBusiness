import {all} from 'axios';
import React, {useRef, useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ViewShot from 'react-native-view-shot';

interface BillItem {
  description: string;
  qty: string;
  unitAmt: string;
}

const Bill = () => {
  const [capturedUri, setCapturedUri] = useState<string | null>(null);

  const ref = useRef<ViewShot>(null);

  const onCapture = useCallback((uri: string) => {
    console.log('Captured URI: ', uri);
    setCapturedUri(uri);
  }, []);

  const data: BillItem[] = [
    {
      description: 'STMC01 ST T1B 012 FL WDN SO S',
      qty: '1 PC',
      unitAmt: '₹699.00',
    },
    {
      description: 'STMC01 ST T1B 012 FL WDN SO S',
      qty: '1 PC',
      unitAmt: '₹699.00',
    },
    {
      description: 'STMC01 ST T1B 012 FL WDN SO S',
      qty: '1 PC',
      unitAmt: '₹699.00',
    },
    {
      description: 'STMC01 ST T1B 012 FL WDN SO S',
      qty: '1 PC',
      unitAmt: '₹699.00',
    },
    {
      description: 'STMC01 ST T1B 012 FL WDN SO S',
      qty: '1 PC',
      unitAmt: '₹699.00',
    },
    {
      description: 'STMC01 ST T1B 012 FL WDN SO S',
      qty: '1 PC',
      unitAmt: '₹699.00',
    },
    {
      description: 'STMC01 ST T1B 012 FL WDN SO S',
      qty: '1 PC',
      unitAmt: '₹699.00',
    },
    {
      description: 'STMC01 ST T1B 012 FL WDN SO S',
      qty: '1 PC',
      unitAmt: '₹699.00',
    },
    {
      description: 'STMC01 ST T1B 012 FL WDN SO S',
      qty: '1 PC',
      unitAmt: '₹699.00',
    },
    {
      description: 'STMC01 ST T1B 012 FL WDN SO S',
      qty: '1 PC',
      unitAmt: '₹699.00',
    },
  ];

  const renderItem: ListRenderItem<BillItem> = ({item}) => (
    <View style={[styles.Row, styles.StylingDiv]}>
      <Text style={[styles.billText, styles.itemWidth]}>
        {item.description}
      </Text>
      <Text style={[styles.billText, styles.startText]}>{item.qty}</Text>
      <Text style={[styles.billText]}>{item.unitAmt}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <ViewShot
        onCapture={onCapture}
        captureMode="mount"
        ref={ref}
        style={styles.billBg}>
        <View>
          <Text style={[styles.center]}>Invoice</Text>
          <Text style={[styles.center, styles.heading]}>Store Name</Text>
          <View style={[styles.border]}>
            <View>
              <View style={[styles.Row, styles.StylingDiv]}>
                <Text style={[styles.billText,styles.billHeading]}>Date & Time:</Text>
                <Text style={[styles.billText,styles.billHeading]}>Mobile No:</Text>
              </View>
            </View>
            <View style={[styles.StylingDiv]}>
              <Text style={[styles.billText,styles.billHeading]}>Bill id:</Text>
            </View>
          </View>
          <View style={[styles.Row, styles.StylingDiv]}>
            <Text style={[styles.billHeading, styles.qtyWidth]}>Item</Text>
            <Text style={[styles.billHeading]}>Qty</Text>
            <Text style={[styles.billHeading]}>Amount</Text>
          </View>
          <FlatList
            style={[styles.border]}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={[styles.Row, styles.StylingDiv, styles.border]}>
            <Text style={[styles.billHeading, styles.qtyWidth]}>
              Total Qty:
            </Text>
            <Text style={[styles.billHeading]}>Total Items :</Text>
            <Text style={[styles.billHeading]}>Grand Total : </Text>
          </View>
          <View style={[styles.StylingDiv, styles.border]}>
            <View style={[styles.Row, styles.StylingDiv]}>
              <Text style={styles.billHeading}>Total Discount</Text>
              <Text style={styles.billText}>{}</Text>
            </View>
            <View style={[styles.Row, styles.StylingDiv]}>
              <Text style={styles.billHeading}>Net Payable</Text>
              <Text style={styles.billText}>{}</Text>
            </View>
          </View>
        </View>
      </ViewShot>
      <View style={styles.btnDiv}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      {/* {capturedUri && (
        <View style={styles.capturedContainer}>
          <Image source={{uri: capturedUri}} style={styles.capturedImage} />
        </View>
      )} */}
    </ScrollView>
  );
};

export default Bill;

const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    minHeight: screenHeight,
  
  },
  capturedContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  capturedText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  capturedImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  billBg: {
    margin: 20,
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 50,
    elevation:4
  },
  center: {
    alignSelf: 'center',
    color: 'black',
  },
  billText: {
    color: 'black',
  },
  heading: {
    fontSize: 24,
  },
  StylingDiv: {
    padding: 5,
  },
  Row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  border: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },
  billHeading: {
    fontWeight: '600',
    color: 'black',
  },
  itemWidth: {
    width: '40%',
  },
  qtyWidth: {
    width: '40%',
  },
  startText: {
    alignContent: 'flex-start',
  },
  btnDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 6,
  },
  button: {
    backgroundColor: '#1e90ff',
    height: 42,
    elevation: 4,
    borderRadius: 21,
    padding: 8,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#2b0b0b',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
