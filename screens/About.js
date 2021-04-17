import React from 'react'
import {Image, Linking, Text, View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {Divider} from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Styles from '../components/stylesheets/AboutStyle'

class About extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.title}>This App Made by Amir Diafi</Text>
        <View style={Styles.imageContainer}>
          <Image
            style={Styles.image}
            source={{
              uri:
                'https://drive.google.com/uc?export=view&id=1eJb2Cl35Y-Ctx3x8UkDXtBV9owrvAjQx',
            }}
          />
        </View>
        <TouchableOpacity
          style={Styles.link}
          onPress={() => Linking.openURL('https://amirdiafi.com')}>
          <Ionicons color="#252525" name="ios-link-outline" size={26} />
          <Text style={Styles.uri}>https://amirdiafi.com</Text>
        </TouchableOpacity>
        <Divider />
        <Text style={Styles.title2}>Find me online on</Text>
        <View style={Styles.socilaContainer}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://twitter.com')}>
            <Text style={Styles.socialUp}>
              <Ionicons name="ios-logo-twitter" size={30} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://facebook.com')}>
            <Text style={Styles.socialUp}>
              <Ionicons name="ios-logo-facebook" size={30} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://instagram.com')}>
            <Text style={Styles.socialUp}>
              <Ionicons name="ios-logo-instagram" size={30} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default About
