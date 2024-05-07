import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet ,View,TouchableOpacity,Text} from 'react-native';
import SelectItem from './SelectionItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackPramList } from '../App';
type BillingProps=NativeStackScreenProps<RootStackPramList>

const Billing= ({navigation}:BillingProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SelectItem />
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate("GenerateBill")} style={styles.button}>
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
});
