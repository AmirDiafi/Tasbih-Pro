import React from 'react'
import TasbihContent from '../screens/Tasbih'
import {ImageBackground} from 'react-native'

class Salat extends React.Component {
  render() {
    return (
      <ImageBackground
        blurRadius={4}
        height={'100%'}
        width={'100%'}
        style={{flex: 1}}
        source={require('../assets/images/background.jpg')}>
        <TasbihContent navigation={this.props.navigation} />
      </ImageBackground>
    )
  }
}

export default Salat
