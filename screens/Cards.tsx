import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  PanResponder,
} from 'react-native';

interface Coin {
  id: number;
  value: number;
}

const Cards = () => {
  const coinlist: Coin[] = [
    {id: 1, value: 60},
    {id: 2, value: 58},
    {id: 3, value: 59},
    {id: 4, value: 33},
    {id: 5, value: 37},
    {id: 6, value: 9},
    {id: 7, value: 7},
    {id: 8, value: 7},
    {id: 9, value: 45},
    {id: 10, value: 6},
    {id: 11, value: 63},
    {id: 12, value: 44},
    {id: 13, value: 66},
    {id: 14, value: 22},
    {id: 15, value: 66},
    {id: 16, value: 88},
    {id: 17, value: 99},
    {id: 18, value: 33},
    {id: 19, value: 66},
    {id: 20, value: 77},
    {id: 21, value: 88},
    {id: 22, value: 99},
    {id: 23, value: 11},
    {id: 24, value: 22},
    {id: 25, value: 33},
    {id: 26, value: 4},
    {id: 27, value: 45},
  ];

  const [renderState, setRenderState] = useState(1);
  const [selectedCoin, setSelectedCoin] = useState<number | null>(null);
  const maxRenderState = Math.ceil(coinlist.length / 8);
  const SWIPE_THRESHOLD = 10;
  const onSwipeRight = () => {
    if (renderState > 1) {
      setRenderState(prevState => prevState - 1);
    } else {
      setRenderState(1);
    }
  };
  
  const onSwipeLeft = () => {
    if (renderState < maxRenderState) {
      setRenderState((prevState) => prevState + 1);
      console.log(renderState - 1);
    } else {
      setRenderState(maxRenderState);
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        // You can use gestureState.dx and gestureState.dy to track the movement
      },
      onPanResponderRelease: (evt, gestureState) => {
        const {dx} = gestureState;
        if (Math.abs(dx) > SWIPE_THRESHOLD) {
          console.log(dx);
          if (dx > 0) {
            // Corrected condition
            console.log('working right');
            onSwipeRight();
          } else if (dx < 0) {
            if (renderState < maxRenderState) {
              console.log(renderState);
              onSwipeLeft();
              console.log('working left');
            } else {
              // If at max render state, trigger a re-render with the same state
              setRenderState(renderState);
            }
          }
        }
      },
    }),
  ).current;

  const renderCoins = () => {
    if (renderState > maxRenderState) {
      setRenderState(maxRenderState);
    }
    const startIndex = (renderState - 1) * 8;
    const endIndex = renderState * 8;
    const visibleCoins = coinlist.slice(startIndex, endIndex);

    return visibleCoins.map(({id, value}) => (
      <TouchableOpacity
        key={id}
        onPress={() => toggleCoinSelection(id)}
        style={[
          styles.coinBlock,
          selectedCoin === id && styles.activeCoinBlock, // Apply active style if coin is selected
        ]}>
        <Text style={styles.coins}>{value}</Text>
      </TouchableOpacity>
    ));
  };

  const toggleCoinSelection = (id: number) => {
    setSelectedCoin(selectedCoin === id ? null : id);
  };

  return (
    <SafeAreaView>
      <View
        style={styles.gridContainer}
        {...panResponder.panHandlers} // This line ensures ScrollView captures touch events
      >
        <View style={styles.grid}>{renderCoins()}</View>
        <View style={styles.grid}>
          {[...Array(maxRenderState)].map((_, index) => (
            <View
              key={index}
              style={index === renderState - 1 ? styles.activeDot : styles.dot}
            />
          ))}
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  gridContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    height: 250,
    paddingVertical:40
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
    margin: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  coins: {
    color: 'black',
  },
  activeCoinBlock: {
    backgroundColor: '#9BDDFF', // Apply different style when active
  },
  add: {
    height: 20,
    width: 20,
  },
  addBtn: {
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    padding: 12,
    margin: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    margin: 5,borderWidth: 1, // Border width
    borderColor: '#1e90ff', // Flashy border color
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1e90ff', // Blue color with opacity
    margin: 5,
    borderWidth: 1, // Border width
    borderColor: '#1e90ff', // Flashy border color
    shadowColor: '#1f93ff', // Change shadow color to match the elevation color
    elevation: 8, // Adjust elevation as needed
  }
  
});
