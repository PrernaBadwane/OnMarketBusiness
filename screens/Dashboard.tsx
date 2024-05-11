import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';

type DashboardProps = NativeStackScreenProps<RootStackPramList>;

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  const vendorName: string = 'vendor';
  const visit: number = 0;

  const OPTIONS = [
    {
      id: '1',
      name: 'Add Products',
      onPress: () => navigation.navigate('AddNewCategory'),
    },
    {
      id: '2',
      name: 'View Products',
      onPress: () => navigation.navigate('Dashboard'),
    },
    {
      id: '3',
      name: 'Order',
      onPress: () => navigation.navigate('Dashboard'),
    },
    {
      id: '4',
      name: 'Coupon Discount',
      onPress: () => navigation.navigate('Dashboard'),
    },
    {
      id: '5',
      name: 'Coins',
      onPress: () => navigation.navigate('Dashboard'),
    },
    {
      id: '6',
      name: 'Analytics',
      onPress: () => navigation.navigate('Dashboard'),
    },
  ];

  const renderItem = ({ item }: { item: { id: string; name: string; onPress: () => void } }) => {
    return (
      <TouchableOpacity style={styles.dCard} onPress={item.onPress}>
        <View style={styles.cardContent}>
          <View style={styles.leftSide}>
            <Text style={styles.cardHeadnig}>{item.name}</Text>
          </View>
          
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.head}>
            <View style={{ justifyContent: 'flex-end' }}>
              <Text style={{ color: 'black' }}>{vendorName}</Text>
              <Text style={{ color: 'black' }}>Total Visits: {visit}</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image
                style={styles.userImage}
                source={{
                  uri: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
                }}
              />
            </View>
          </View>
          <View style={styles.dashboard}>
            <Text style={styles.heading}>Dashboard</Text>
            <FlatList
              data={OPTIONS}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
              style={styles.dashboardCard}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Billing')} style={styles.button}>
              <Text style={styles.buttonText}>Billing</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3faff',
  },
  heading: {
    color: 'black',
    fontSize: 28,
    fontWeight: '700',
    margin: 8,
  },
  head: {
    backgroundColor: '#FFFFFF',
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 10,
    elevation: 4,
  },
  dashboard: {
    padding: 10,
  },
  dashboardCard:{
    margin:'5%',
    flex:1,
  },
  dCard: {
    paddingVertical: 20,
    backgroundColor: 'white',
    height: 100,
    width: '45%',
    margin: 8,
    elevation: 4,
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: '#1e90ff',
    elevation: 4,
    marginTop: 20,
    marginHorizontal: 4,
    borderRadius: 64 / 2,

    padding: 12,
    width:'90%',
    height:60,
    alignSelf:"center"
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlignVertical: 'center',
    margin: 4,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSide: {
    height: '100%',
    width: '100%',
    margin:10,
  },
  imageDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    borderRadius: 50 / 2,
    margin: 10,
  },
  cardHeadnig: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
});
