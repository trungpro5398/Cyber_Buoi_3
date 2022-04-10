import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.purpleBox}>
        <Text style={styles.text}>
          Purple: #C9C9FF
        </Text>
      </View>
      <View style={styles.blueBox}>
        <Text style={styles.text}>
          Blue: #3D85C6
        </Text>
      </View>
      <View style={styles.greenBox}>
        <Text style={styles.text}>
          Green: #96CC96
        </Text>
      </View>
      <View style={styles.yellowBox}>
        <Text style={styles.text}>
          Yellow: #F4B940
        </Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: '#C9C9FF',
    height: '23%',
    marginBottom: 25,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  blueBox: {
    backgroundColor: '#3D85C6',
    height: '23%',
    marginBottom: 25,
    width: '100%',

    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greenBox: {
    backgroundColor: '#96CC96',
    height: '23%',
    marginBottom: 25,
    width: '100%',

    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  yellowBox: {
    backgroundColor: '#F4B940',
    height: '23%',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',

  }
  ,
  main: {

    padding: 25,
    paddingTop: 50,
    paddingBottom: 50,

  },
});
