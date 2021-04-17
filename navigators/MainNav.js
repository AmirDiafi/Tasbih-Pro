import React from 'react'
import {View, ImageBackground} from 'react-native'
import Header from '../components/Header'
import MainContent from '../screens/Main'

class InfoNav extends React.Component {
  render() {
    return (
      <ImageBackground
        height={'100%'}
        width={'100%'}
        blurRadius={4}
        style={{flex: 1}}
        source={require('../assets/images/background.jpg')}>
        <View>
          <Header title="Taspih Pro" navigation={this.props.navigation} />
        </View>
        <MainContent navigation={this.props.navigation} />
      </ImageBackground>
    )
  }
}

export default InfoNav
