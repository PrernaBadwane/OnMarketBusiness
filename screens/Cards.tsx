import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  PanResponder,
} from 'react-native';

interface Coin {
  id: number;
  value: number;
  validTill: string;
}

interface CardsProps {
  onCoinSelect: (coin: Coin | null) => void;
}

const Cards: React.FC<CardsProps> = ({ onCoinSelect }) => {
  const coinlist: Coin[] = [
    {id: 1, value: 60, validTill: '2024-12-31'},
    {id: 2, value: 58, validTill: '2024-11-30'},
    {id: 3, value: 59, validTill: '2024-10-29'},
    {id: 4, value: 33, validTill: '2024-09-28'},
    {id: 5, value: 37, validTill: '2024-08-27'},
    {id: 6, value: 9, validTill: '2024-07-26'},
    {id: 7, value: 7, validTill: '2024-06-25'},
    {id: 8, value: 7, validTill: '2024-05-24'},
    {id: 9, value: 45, validTill: '2024-04-23'},
    {id: 10, value: 6, validTill: '2024-03-22'},
    {id: 11, value: 63, validTill: '2024-02-21'},
    {id: 12, value: 44, validTill: '2024-01-20'},
    {id: 13, value: 66, validTill: '2023-12-19'},
    {id: 14, value: 22, validTill: '2023-11-18'},
    {id: 15, value: 66, validTill: '2023-10-17'},
    {id: 16, value: 88, validTill: '2023-09-16'},
    {id: 17, value: 99, validTill: '2023-08-15'},
    {id: 18, value: 33, validTill: '2023-07-14'},
    {id: 19, value: 66, validTill: '2023-06-13'},
    {id: 20, value: 77, validTill: '2023-05-12'},
    {id: 21, value: 88, validTill: '2023-04-11'},
    {id: 22, value: 99, validTill: '2023-03-10'},
    {id: 23, value: 11, validTill: '2023-02-09'},
    {id: 24, value: 22, validTill: '2023-01-08'},
    {id: 25, value: 33, validTill: '2022-12-07'},
    {id: 26, value: 4, validTill: '2022-11-06'},
    {id: 27, value: 45, validTill: '2022-10-05'},
  ];

  const [renderState, setRenderState] = useState(1);
  const [selectedCoin, setSelectedCoin] = useState<number | null>(null);
  const maxRenderState = Math.ceil(coinlist.length / 6);
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
        const { dx } = gestureState;
        if (Math.abs(dx) > SWIPE_THRESHOLD) {
          if (dx > 0) {
            onSwipeRight();
          } else if (dx < 0) {
            if (renderState < maxRenderState) {
              onSwipeLeft();
            } else {
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
    const startIndex = (renderState - 1) * 6;
    const endIndex = renderState * 6;
    const reversedCoins = [...coinlist].reverse(); // Reverse the coinlist array
    const visibleCoins = reversedCoins.slice(startIndex, endIndex);

    return visibleCoins.map(({ id, value, validTill }) => (
      <TouchableOpacity
        key={id}
        onPress={() => toggleCoinSelection(id, value, validTill)}
        style={[
          styles.coinBlock,
          // Apply active style if coin is selected
        ]}>
        <View style={[styles.coins, selectedCoin === id && styles.activeCoinBlock]}><Text style={{ color: "black" }}>{value}</Text></View>
        <View style={styles.coinValid}>
          <Text style={styles.validityText}>{validTill}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  const toggleCoinSelection = (id: number, value: number, validTill: string) => {
    const coin = selectedCoin === id ? null : { id, value, validTill };
    setSelectedCoin(coin ? id : null);
    onCoinSelect(coin);
  };

  return (
    <SafeAreaView>
      <View
        style={styles.gridContainer}
        {...panResponder.panHandlers}
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
    height: 300, // Increased height to accommodate larger coin blocks
    paddingVertical: 20, // Reduced padding vertical to minimize gaps
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  coinValid: {
    backgroundColor: '#E5E5E5',
    padding: 5,
    borderTopStartRadius: 8,
    borderBottomEndRadius: 8,
    elevation: 4
  },
  coinBlock: {
    position: "relative",
    margin: 10,
    width: 80, // Increased width
    height: 80, // Increased height
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',

  },
  coins: {
    height: 40,
    width: 40, // Increased font size
    backgroundColor: '#9BDDFF',
    position: "absolute",
    bottom: 45,
    padding: 5,
    zIndex: 1,
    borderRadius: 40 / 2,
    borderColor: "#F9F9F9",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center"

  },
  validityText: {
    color: 'black',
    fontSize: 12, // Smaller font size for the date
    marginTop: 5, // Space between coin value and date
  },
  activeCoinBlock: {
    borderColor: "gray",
    shadowColor: "#9BDDFF",
    elevation: 15,
    borderWidth: 3,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
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

