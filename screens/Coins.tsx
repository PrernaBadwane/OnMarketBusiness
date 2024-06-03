import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';

type GenerateBillProps = NativeStackScreenProps<RootStackPramList>;
interface CoinAdded {
  billingId:string;
  phoneNumber: string;
  name: string;
  time: string;
  selectedCoin: Coin | null;
}
interface Coin {
  id: number;
  value: number;
  validTill: string;
  type: string;
}
const DATA: CoinAdded[] = [
  {
    name: 'Hxhch',
    billingId:"kjndu",
    phoneNumber: '1234567890',
    selectedCoin: {
      id: 26,
      validTill: '2022-11-06',
      value: 4,
      type: 'one time use',
    },
    time: '2024-06-03T05:54:29.753Z',
  },
  {
    name: 'Hxhch',
    billingId:"kjndu",
    phoneNumber: '1234567890',
    selectedCoin: {
      id: 26,
      validTill: '2022-11-06',
      value: 4,
      type: 'one time use',
    },
    time: '2024-06-03T05:54:29.753Z',
  },
  {
    name: 'Hxhch',
    billingId:"kjndu",
    phoneNumber: '1234567890',
    selectedCoin: {
      id: 26,
      validTill: '2022-11-06',
      value: 4,
      type: 'one time use',
    },
    time: '2024-06-03T05:54:29.753Z',
  },
  {
    name: 'Hxhch',
    billingId:"kjndu",
    phoneNumber: '1234567890',
    selectedCoin: {
      id: 26,
      validTill: '2022-11-06',
      value: 4,
      type: 'one time use',
    },
    time: '2024-06-03T05:54:29.753Z',
  },
];

const Coins = ({navigation}: GenerateBillProps) => {
  const [coins, setCoins] = useState<CoinAdded | null>(null);

  const getTimeFromTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    return `${hours}:${minutes} ${period}`;
  };

  const getDateFromTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Coins</Text>
      </View>
      {DATA.map((coin, index) => (
        <View  key={index} style={styles.card}>
          <View  style={[styles.cardDiv,styles.designLeft]}>
            <Text style={styles.title}>{getTimeFromTimestamp(coin.time)}</Text>
            <Text style={styles.title}>{getDateFromTimestamp(coin.time)}</Text>
          </View>
          <View  style={styles.cardDivRight}>
          <Text style={styles.title}>Billing Id:<Text > {coin.billingId}</Text></Text>
            <Text style={styles.title}>Phone no:<Text> {coin.phoneNumber}</Text></Text>
            <View style={styles.rowDiv}>
            <Text style={styles.title}>Coins: <Text>{coin.selectedCoin?.value}</Text></Text>
            <Text style={styles.title}>Type:<Text> {coin.selectedCoin?.type}</Text></Text>
            </View>
            
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Coins;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: '#f3faff',
  },
  heading: {
    color: 'black',
    fontSize: 28,
    fontWeight: '700',
    margin: 8,
  },
  card: {
    backgroundColor: 'white',
    elevation: 4,
    margin:8,
    padding:12,
    flexDirection:"row",
    borderRadius:8,
    alignItems:"center",
  },
  cardDiv:{
    padding:10,
    alignItems:"center",
   
  },
  cardDivRight:{
    padding:5,
    alignItems:"flex-start",
    justifyContent:"center"
  },
  designLeft:{
    borderColor:"gray",
    borderRightWidth:3,
  },
  rowDiv:{
    flexDirection:"row",
    gap:12
  },
  title:{
    color:"black",
    fontWeight:"600"
  }
});
