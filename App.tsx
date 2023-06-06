import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AppHero from './component/AppHero';
import GoalItem from './component/GoalItem';
const image = require('./assets/x.png');

const goals = [
  {
    id: 1,
    goal: 'Goal 1',
    amount: 'KES 10000',
  },
  {
    id: 2,
    goal: 'Goal 1',
    amount: 'KES 10000',
  },
];

const App = () => {
  const initialText =
    'There is an in-app notification snack to show the user when they perform an action. Clicking is should change the text';
  const [userText, setUserText] = useState(initialText);

  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const positition = React.useRef(new Animated.Value(-100)).current;

  const showSnackBar = () => {
    setUserText(initialText);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }),
      Animated.timing(positition, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const hideSnack = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(positition, {
        toValue: -100,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.heroContainer}>
          <AppHero />
        </View>
        <View style={styles.listContainer}>
          {goals.map(item => (
            <GoalItem item={item} key={item.id} />
          ))}
        </View>
      </View>
      <Pressable style={styles.button} onPress={showSnackBar}>
        <Text style={styles.btnTxt}> Show snackbar</Text>
      </Pressable>

      <Animated.View
        style={[
          styles.snackBarContainer,
          {
            opacity: fadeAnim,
            top: positition,
          },
        ]}>
        <Pressable
          onPress={() => setUserText('User clicked snackbar')}
          style={{width: '95%'}}>
          <Text style={styles.txt}>{userText}</Text>
        </Pressable>
        <Pressable onPress={hideSnack}>
          <Image source={image} style={styles.img} />
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    PaddingHorizontal: 16,
    backgroundColor: '#333399',
  },
  button: {
    backgroundColor: '#00e68a',
    marginBottom: 40,
    paddingVertical: 14,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 1,
  },
  heroContainer: {
    flex: 2,
    backgroundColor: '#333399',
    paddingHorizontal: 10,
  },
  btnTxt: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
  },
  listContainer: {
    backgroundColor: '#f2f2f2',
    flex: 5,
    padding: 5,
    paddingVertical: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  snackBarContainer: {
    position: 'absolute',
    backgroundColor: '#ff3399',
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginHorizontal: 10,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
    justifyContent: 'space-between',
  },
  txt: {
    color: 'white',
    flex: 1,
  },
  img: {
    tintColor: 'white',
    width: 24,
    height: 24,
  },
});
