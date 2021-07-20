import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Quotation = ({result}) => {
  if (Object.keys(result).length === 0) {
    return null;
  }
  return (
    <View style={styles.result}>
      <Text style={[styles.text, styles.price]}>
        <Text style={styles.span}>{result.PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        High Day: {''}
        <Text style={styles.span}>{result.HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Low Day: {''}
        <Text style={styles.span}>{result.LOWDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Change Price 24 Hours: {''}
        <Text style={styles.span}>{result.CHANGEPCT24HOUR} %</Text>
      </Text>
      <Text style={styles.text}>
        Last Updated: {''}
        <Text style={styles.span}>{result.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    backgroundColor: '#5e49e2',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 38,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});

export default Quotation;
