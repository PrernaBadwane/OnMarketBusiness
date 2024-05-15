import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import SelectItem from './SelectionItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
const previous = require('../images/back.png');
const add = require('../images/add.png');

type BillingProps = NativeStackScreenProps<RootStackPramList>;

const Billing = ({navigation}: BillingProps) => {
  const back = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.colDivMain, styles.alignRight]}>
          <TouchableOpacity onPress={back} style={styles.imgDiv}>
            <Image style={styles.img} source={previous} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={back}
            style={[styles.imgDiv, styles.addBtn]}>
            <Text style={styles.addButtonText}>Add New Category</Text>
            <Image style={styles.img} source={add} />
          </TouchableOpacity>
        </View>

        <SelectItem />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('GenerateBill')}
            style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Billing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F9F9F9',
  },
  button: {
    backgroundColor: '#1e90ff',
    elevation: 4,
    marginTop: 16,
    padding: 12,
    marginHorizontal: 4,
    borderRadius: 64 / 2,
    height: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold', // make the text bold
    alignSelf: 'center',
    textAlignVertical: 'center',
    margin: 4,
  },
  imgDiv: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 11,
    paddingVertical: 10,
  },
  img: {
    height: 15,
    width: 15,
  },

  colDivMain: {
    flex: 1,
    flexDirection: 'row',
    color: 'black',
    justifyContent: 'space-between',
    
  },
  addBtn: {
    flex: 1,
    flexDirection: 'row',
    color: 'black',
    justifyContent: 'space-between',
    width:0,
  },
  addButtonText: {
    color: '#2b0b0b',
    fontSize: 12,
    fontWeight: 'bold',
  },
  alignRight: {
    gap: 170,
  },
});
