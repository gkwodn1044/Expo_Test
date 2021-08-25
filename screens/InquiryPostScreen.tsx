import * as React from 'react';
import { StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import InquiryPost from '../components/InquiryPost';
import { Text, View } from '../components/Themed';

export default function InquiryPostScreen() {
  return (
    <DissmissKeyboard>
      <View style={styles.container}>
        <Text style={styles.title}>Post</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <InquiryPost />
      </View>
    </DissmissKeyboard>
  );
}

const DissmissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
  </TouchableWithoutFeedback>
)
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});