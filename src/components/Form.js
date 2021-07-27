import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Form = ({coin, critpoCoin, saveCoin, saveCritpoCoin, saveConsumeAPI}) => {
  const [critpoCoins, saveCritpoCoins] = useState([]);
  useEffect(() => {
    const API = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await axios.get(url);
      saveCritpoCoins(result.data.Data);
    };
    API();
  }, []);
  const getCoin = coin => {
    saveCoin(coin);
  };
  const getCriptoCoin = crypto => {
    saveCritpoCoin(crypto);
  };
  const quationPrice = () => {
    if (coin.trim() === '' || critpoCoin.trim() === '') {
      showAlert();
      return;
    }
    saveConsumeAPI(true);
  };
  const showAlert = () => {
    Alert.alert('Error', 'Field Required', [{text: 'Ok'}]);
  };
  return (
    <View style={styles}>
      <Text style={styles.label}>Coin</Text>
      <Picker
        selectedValue={coin}
        onValueChange={coin => getCoin(coin)}
        itemStyle={{height: 120}}>
        <Picker.Item label={'- Select -'} value="" />
        <Picker.Item label={'Dolar USA'} value="USD" />
        <Picker.Item label={'Peso Colombiano'} value="COP" />
        <Picker.Item label={'Euro'} value="EUR" />
      </Picker>
      <Text style={styles.label}>CritpCoin</Text>
      <Picker
        selectedValue={critpoCoin}
        onValueChange={critpto => getCriptoCoin(critpto)}
        itemStyle={{height: 120}}>
        <Picker.Item label={'- Select -'} value="" />
        {critpoCoins.map(critpto => (
          <Picker.Item
            key={critpto.CoinInfo.Id}
            label={critpto.CoinInfo.FullName}
            value={critpto.CoinInfo.Name}
          />
        ))}
      </Picker>
      <TouchableHighlight
        style={styles.btnQuation}
        onPress={() => quationPrice()}>
        <Text style={styles.textQuation}>Close</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },
  btnQuation: {
    backgroundColor: '#5e4ee2',
    padding: 10,
    marginTop: 20,
  },
  textQuation: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Lato-Balck',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Form;
