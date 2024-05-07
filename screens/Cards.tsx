import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView,Image } from 'react-native'
import React, { useState } from 'react'




interface Coin {
  id: number;
  value: number;
}

const Cards = () => {
  const coinlist: Coin[] = [
    { id: 1, value: 60 }, { id: 2, value: 58 }, { id: 3, value: 59 }, { id: 4, value: 33 }, { id: 5, value: 37 },
    { id: 6, value: 9 }, { id: 7, value: 7 }, { id: 8, value: 7 }, { id: 9, value: 45 }, { id: 10, value: 6 },
    { id: 11, value: 63 }, { id: 12, value: 44 }, { id: 13, value: 66 }, { id: 14, value: 22 }, { id: 15, value: 66 },
    { id: 16, value: 88 }, { id: 17, value: 99 }, { id: 18, value: 33 }, { id: 19, value: 66 }, { id: 20, value: 77 },
    { id: 21, value: 88 }, { id: 22, value: 99 }, { id: 23, value: 11 }, { id: 24, value: 22 }, { id: 25, value: 33 },
    { id: 26, value: 4 }, { id: 27, value: 45 },
  ];

  const [selectedCoin, setSelectedCoin] = useState<number | null>(null); // State to track selected coin

  const renderCoins = () => (
    coinlist.map(({ id, value }) => (
      <TouchableOpacity
        key={id}
        onPress={() => toggleCoinSelection(id)}
        style={[
          styles.coinBlock,
          selectedCoin === id && styles.activeCoinBlock // Apply active style if coin is selected
        ]}
      >
        <Text style={styles.coins}>{value}</Text>
      </TouchableOpacity>
    ))
  );

  const toggleCoinSelection = (id: number) => {
    // Toggle coin selection
    if (selectedCoin === id) {
      setSelectedCoin(null); // Deselect the coin if it's already selected
    } else {
      setSelectedCoin(id); // Select the clicked coin
    }
  };

  return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={styles.gridContainer}>
      <View style={styles.grid}>{renderCoins()}</View>
    </ScrollView>
    <View>

    </View>
    
    </SafeAreaView>
    
  )
}

export default Cards

const styles = StyleSheet.create({
  gridContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  coinBlock: {
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  coins: {
    color: 'black'
  },
  activeCoinBlock: {
    backgroundColor: '#9BDDFF', // Apply different style when active
  },
  add:{
    height:20,
    width:20,
    
    
  },
  addBtn:{
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    
  },
  
});
