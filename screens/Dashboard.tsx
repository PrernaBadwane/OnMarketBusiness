import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackPramList } from '../App';
type DashbordProps=NativeStackScreenProps<RootStackPramList>

const Dashboard = ({navigation}:DashbordProps) => {
  const screenHeight: number = Dimensions.get('window').height;
  const [image, setImage] = useState<string>('');
  const vendorName: string = "vendor";
  const visit: number = 0;

  return (
    <SafeAreaView >
     <ScrollView>
     <View style={styles.container}>
        <View style={styles.head}>
          <View style={{justifyContent: 'flex-end'}}>
          <Text style={{color: 'black'}}>{vendorName}</Text>
            <Text style={{color: 'black'}}>Total Visits: {visit}</Text>
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
          <View>
            <TouchableOpacity style={styles.dCard1}onPress={()=>navigation.navigate('AddNewCategory')}>
              <View style={styles.cardContent}>
                <View style={styles.leftSide}>
                  <Text  style={styles.cardHeadnig}>Add New Products</Text>
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
            </TouchableOpacity>
            <TouchableOpacity  style={styles.dCard2}>
              <View style={styles.cardContent}>
              <View style={styles.imageDiv}>
                  <Image
                    style={styles.userImage}
                    source={{
                      uri: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
                    }}
                  />
                </View>
                <View  style={styles.rightTextSide}
                >
                  <Text style={styles.cardHeadnig}>View All Products</Text>
                  <Text style={styles.cardCounts}>Total products:{}</Text>
                </View>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dCard1}>
              <View style={styles.cardContent}>
                <View style={styles.leftSide}>
                  <Text  style={styles.cardHeadnig}>Coupon Discounts</Text>
                  <Text style={styles.cardCounts}>Coupon Visits:{}</Text>
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
              </TouchableOpacity>
              <TouchableOpacity  style={styles.dCard2}>
              <View style={styles.cardContent}>
              <View style={styles.imageDiv}>
                  <Image
                    style={styles.userImage}
                    source={{
                      uri: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
                    }}
                  />
                </View>
                <View  style={styles.rightTextSide}
                >
                  <Text style={styles.cardHeadnig}>View Orders</Text>
                  <Text style={styles.cardCounts}>Total orders:{}</Text>
                </View>
              </View>
            
              </TouchableOpacity>
              <TouchableOpacity  style={styles.dCard1}>
              <View style={styles.cardContent}>
                <View style={styles.leftSide}>
                  <Text  style={styles.cardHeadnig}>Analytics</Text>
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
              </TouchableOpacity>
              <TouchableOpacity  style={styles.dCard2}>
              <View style={styles.cardContent}>
              <View style={styles.imageDiv}>
                  <Image
                    style={styles.userImage}
                    source={{
                      uri: 'https://www.shutterstock.com/image-photo/lalbagh-fort-aurangabad-incomplete-mughal-600nw-719918413.jpg',
                    }}
                  />
                </View>
                <View  style={styles.rightTextSide}
                >
                  <Text style={styles.cardHeadnig}>Coins</Text>
                  <Text style={styles.cardCounts}>Coins impressions:{}</Text>
                </View>
              </View>
            
              </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Billing')} style={styles.button}>
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
    height: 60,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 10,
    elevation: 4,
  },
  dashboard: {
    padding: 8,
  },
  cardright: {
    flex: 1,
  },
  dCard1: {
    paddingVertical: 20,
    backgroundColor: 'white',
    height: 80,
    width: '70%',
    margin: 8,
    elevation: 4,
    borderRadius: 8,
    justifyContent: 'flex-end', // Aligns content to the bottom
    alignSelf: 'flex-end', // Aligns container to the right
  },
  dCard2: {
    paddingVertical: 20,
    backgroundColor: 'white',
    height: 80,
    width: '70%',
    margin: 8,
    elevation: 4,
    borderRadius: 8,
    justifyContent: 'flex-start', // Aligns content to the top
    alignSelf: 'flex-start', // Aligns container to the left
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
  cardContent: {
    flex: 1,
    flexDirection: 'row',
  },
  rightSide: {
    height: '100%',
    width: '30%',
  },
  leftSide: {
    height: '100%',
    width: '70%',
    paddingRight:10,
    alignItems: 'flex-end',
    borderRightColor:'#9BDDFF',
    borderRightWidth:2
  
  },
  rightTextSide: {
    paddingHorizontal:10,
    height: '100%',
    width: '70%',
    paddingRight:10,
    alignItems: 'flex-start',
    borderLeftColor:'#9BDDFF',
    borderLeftWidth:2
  
  },

  userImage: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    borderRadius: 50 / 2,
    margin:10
  },
  imageDiv: {
    justifyContent: 'center',
    alignItems:'center'
  },
  cardHeadnig:{
    color:'black',
    fontSize:16,
    fontWeight:"500",
  },
  cardCounts:{
    color:'#020202',
    fontSize:12,
    fontWeight:"300",
  }
});
