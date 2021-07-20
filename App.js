import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';

import Header from './src/components/Header';
import Form from './src/components/Form';
import Quotation from './src/components/Quotation';
import axios from 'axios';

const App = () => {
  const [coin, saveCoin] = useState('');
  const [critpoCoin, saveCritpoCoin] = useState('');
  const [consumeAPI, saveConsumeAPI] = useState(false);
  const [result, saveResult] = useState({});
  const [load, saveLoad] = useState(false);

  useEffect(() => {
    const quationCriptoCoin = async () => {
      if (consumeAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${critpoCoin}&tsyms=${coin} `;
        const res = await axios.get(url);
        saveLoad(true);
        //Hide Spiner
        setTimeout(() => {
          saveResult(res.data.DISPLAY[critpoCoin][coin]);
          saveConsumeAPI(false);
          saveLoad(false);
        });
      }
    };
    quationCriptoCoin();
  }, [coin, consumeAPI, critpoCoin]);

  const component = load ? (
    <ActivityIndicator size="large" color="#5e49e2" />
  ) : (
    <Quotation result={result} />
  );
  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.image}
          source={require('./src/assets/img/cryptomonedas.png')}
        />
        <View style={styles.content}>
          <Form
            coin={coin}
            critpoCoin={critpoCoin}
            saveCoin={saveCoin}
            saveCritpoCoin={saveCritpoCoin}
            saveConsumeAPI={saveConsumeAPI}
          />
        </View>
        <View style={{marginTop: 40}}>{component}</View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  content: {
    marginHorizontal: '2.5%',
  },
});

export default App;
