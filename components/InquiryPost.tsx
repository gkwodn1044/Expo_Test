import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, TextInput, View } from './Themed';

export default class InquiryPost extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      isPost: 'input',
      type: '',
      email: '',
      hp: '',
      title: '',
      content:'',
    }
  }*/

  state = {
    isPost: 'input',
    type: '',
    email: '',
    hp: '',
    title: '',
    content:'',
  }

  userRegister = () => {
    fetch('http://192.168.156.84:8080/register', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				inquiry_type: this.state.type,
				inquiry_email: this.state.email,
        inquiry_hp: this.state.hp,
        inquiry_title: this.state.title,
        inquiry_content: this.state.content,
			})
		})
		.then((response) => response.json())
    .then((response) => {
      if(response.isSuccess === 'success') {
        this.setState({isPost: 'success'})
        console.log(this.state.isPost);
      } else {
        this.setState({isPost: 'fail'})
        console.log(this.state.isPost);
      }
    })
    .catch((error)=>{
      console.error(error);
    });
  }

  render() {
    const { isPost } = this.state;
    if (isPost === 'input') {
      return (
        <View>
          <View style={styles.getStartedContainer}>
            <TextInput
              autoCapitalize='none'
              keyboardType='number-pad'
              placeholder="Enter type(1~7)"
              style={[styles.TextInputContainer, styles.TextInputStyle]}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)"
              onChangeText= {type => this.setState({type})}
            />

            <TextInput
              autoCapitalize='none'
              keyboardType='email-address'
              placeholder="Enter Email"
              style={[styles.TextInputContainer, styles.TextInputStyle]}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)"
              onChangeText= {email => this.setState({email})}
            />

            <TextInput
              autoCapitalize='none'
              keyboardType='phone-pad'
              placeholder="Enter Phone Number"
              style={[styles.TextInputContainer, styles.TextInputStyle]}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)"
              onChangeText= {hp => this.setState({hp})}
            />

            <TextInput
              autoCapitalize='sentences'
              keyboardType='default'
              placeholder="Enter Title"
              style={[styles.TextInputContainer, styles.TextInputStyle]}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)"
              onChangeText= {title => this.setState({title})}
            />

            <TextInput
              autoCapitalize='sentences'
              keyboardType='default'
              placeholder="Enter Content"
              style={[styles.TextInputContainer, styles.TextInputStyle]}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)"
              onChangeText= {content => this.setState({content})}
            />  

            {/*<TextInput
              secureTextEntry={true}
              autoCapitalize='none'
              placeholder="Enter Password"
              style={[styles.TextInputContainer, styles.TextInputStyle]}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)"
              onChangeText= {userPW => this.setState({userPW})}
            />*/}

            <TouchableOpacity
              style={styles.ButtonStyle}
              onPress={this.userRegister}>
              <Text style={styles.ButtonTextStyle}>Sign up</Text>
            </TouchableOpacity>

            {/*<View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
              darkColor="rgba(255,255,255,0.05)"
              lightColor="rgba(0,0,0,0.05)">
              <MonoText>{path}</MonoText>
            </View>

            <Text
              style={styles.getStartedText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Change any of the text, save the file, and your app will automatically update.
            </Text>*/}
          </View>

          {/*<View style={styles.helpContainer}>
            <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                Tap here if your app doesn't automatically update after making changes
              </Text>
            </TouchableOpacity>
          </View>*/}
        </View>
      );
    } else if (isPost === 'success') {
      return (
        <View>
          <View style={styles.getStartedContainer}>
            <Text
              style={styles.getStartedText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Post Success!
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.getStartedContainer}>
            <Text
              style={styles.getStartedText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)">
              Post Failure!
            </Text>
          </View>
        </View>
      );
    }
  }
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  TextInputContainer: {
    marginVertical: 5,
    paddingHorizontal: 4,
  },
  TextInputStyle: {
    width: 250,
    margin: 10,
    borderColor: "#444",
    borderWidth: 1,
  },
  ButtonStyle: {
    width: 250,
    margin: 4,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  ButtonTextStyle: {
    color: "black",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
