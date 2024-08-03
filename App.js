
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {
  Button,
} from 'react-native-paper';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Button icon="camera" mode="outilined" onPress={() => console.log('pressed')}>Press Me</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:            1,
    justifyContent:  'center',
    backgroundColor: '#ecf0f1',
    padding:         8,
  },
});
