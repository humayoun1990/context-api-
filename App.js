import React,{ useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import FirstScreen from './screens/FirstScreen';
import FirstContextProvider from './Store/Context/FirstContext'


export default function App() {
  return (
    <FirstContextProvider>
      <View style={styles.container}>
        <FirstScreen/>
      </View>
    </FirstContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
