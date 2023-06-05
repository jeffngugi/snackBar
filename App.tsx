import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import AppHero from './component/AppHero';
// import SnackBar from './component/SnackBar';
// import SnackBar1 from './component/SnackBar1';

const App = () => {
  const initialText =
    'There is an in-app notification snack to show the user when they perform an action. Clicking is should change the text';
  const [userText, setUserText] = useState(initialText);

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    setUserText(initialText);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.heroContainer}>
          <AppHero />
        </View>
        <View style={styles.listContainer}>
          <Text> Second text</Text>
        </View>
      </View>
      <Pressable style={styles.button} onPress={fadeIn}>
        <Text style={styles.btnTxt}>Show snackbar</Text>
      </Pressable>

      <Animated.View
        style={[
          styles.snackBarContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Pressable onPress={() => setUserText('User clicked snackbar')}>
          <Text style={styles.txt}>{userText}</Text>
        </Pressable>
        <Pressable style={{marginRight: 10}} onPress={fadeOut}>
          <Text> X </Text>
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
    backgroundColor: 'white',
    flex: 5,
  },
  snackBarContainer: {
    position: 'absolute',
    backgroundColor: '#ff3399',
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    top: 0,
    right: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginHorizontal: 10,
    marginTop: 10,
    paddingVertical: 5,
    borderRadius: 4,
    justifyContent: 'space-between',
  },
  txt: {
    color: 'white',
    flex: 1,
  },
});
