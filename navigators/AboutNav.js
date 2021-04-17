import React from 'react'
import {View} from 'react-native'
import Header from '../components/Header'
import About from '../screens/About'

class InfoNav extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <Header
          isNotMain={true}
          title="About"
          navigation={this.props.navigation}
        />
        <About />
      </View>
    )
  }
}

export default InfoNav
