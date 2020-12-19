import React from 'react';
import { StyleSheet, Text, View ,ImageBackground, StatusBar} from 'react-native';
import CarsList from "./components/CarsList"

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList/>
      <StatusBar style="auto" />
    </View>
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
