import React from 'react'
import {ImageBackground} from 'react-native'
import FadelContent from '../screens/Fadel'

class FadelNav extends React.Component {
  render() {
    return (
      <ImageBackground
        blurRadius={4}
        height={'100%'}
        width={'100%'}
        style={{flex: 1}}
        source={require('../assets/images/background.jpg')}>
        <FadelContent navigation={this.props.navigation} />
      </ImageBackground>
    )
  }
}

export default FadelNav
