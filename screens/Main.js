import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import LottieView from 'lottie-react-native'

class MainContent extends React.Component {
  componentDidMount() {
    AsyncStorage.setItem('token', 'true')
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: 'rgba(0,0,0,.5)',
        }}>
        <LottieView
          style={{width: 150, height: 150}}
          source={require('../assets/images/muslim.json')}
        />
        <Text
          style={{
            fontSize: 27,
            fontFamily: 'Cairo-Regular',
            color: '#eee',
            textAlign: 'center',
          }}>
          "سبح بحمد ربك الذي خلق"
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontFamily: 'Cairo-Regular',
            color: '#eaeaea',
            textAlign: 'center',
            marginBottom: 30,
          }}>
          تقرب من خالقك بذكره
        </Text>
        <Animatable.View
          style={{
            backgroundColor: '#c62a88',
            padding: 10,
            paddingHorizontal: 20,
            borderRadius: 100,
            width: 170,
          }}
          animation="bounceInUp">
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}
            onPress={() => this.props.navigation.navigate('Tasbih')}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Cairo-Regular',
                color: '#FEFEFE',
                textAlign: 'center',
              }}>
              بدأ التسبيح
            </Text>
            <Ionicons
              style={{marginLeft: 10, color: '#FEF'}}
              size={26}
              name="ios-heart"
            />
          </TouchableOpacity>
        </Animatable.View>
      </View>
    )
  }
}

export default MainContent
