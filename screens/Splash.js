import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Styles from '../components/stylesheets/SlpashStyle'
import * as Animatable from 'react-native-animatable'
import LottieView from 'lottie-react-native'
import {AdMobBanner} from 'react-native-admob'

class Splash extends React.Component {
  render() {
    return (
      <ImageBackground
        height={'100%'}
        width={'100%'}
        style={{flex: 1}}
        source={require('../assets/images/background.jpg')}>
        <View style={Styles.splashContainer}>
          <StatusBar
            hidden={true}
            barStyle="light-content"
            backgroundColor="rgb(32,33,64)"
          />
          <LottieView
            style={{width: 250, height: 250}}
            source={require('../assets/images/muslim.json')}
          />
          <Text style={Styles.title}>مرحبا بك في تطبيق</Text>
          <Text style={Styles.title2}>Tasbih Pro</Text>

          <Animatable.View
            style={{
              borderRadius: 100,
            }}
            animation="bounceInUp">
            <TouchableOpacity
              style={Styles.button}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={Styles.buttonTitle}>إستمرار</Text>
              <Ionicons
                color="#fefefe"
                size={28}
                name="arrow-forward-circle-outline"
              />
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            borderWidth: 5,
            borderColor: '#f1339b',
            overflow: 'hidden',
          }}>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-8967420236427435/5638302854"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={(error) => console.error(error)}
          />
        </View>
      </ImageBackground>
    )
  }
}

export default Splash
