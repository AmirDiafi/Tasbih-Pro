import React from 'react'
import {View, Text, StatusBar} from 'react-native'
import Styles from './stylesheets/headerStyle'
import HeaderLeftBack from '../components/HeaderLeftBack'
import {AdMobBanner} from 'react-native-admob'

class Header extends React.Component {
  render() {
    return (
      <View>
        <View style={Styles.headerContainer}>
          <StatusBar
            networkActivityIndicatorVisible={true}
            barStyle="light-content"
            backgroundColor="#c62a88"
          />
          <Text style={Styles.headerText}>{this.props.title}</Text>
          {this.props.isNotMain ? (
            <HeaderLeftBack
              iconName="arrow-back"
              navigation={this.props.navigation}
            />
          ) : (
            <HeaderLeftBack
              isDrawer={true}
              iconName="menu-outline"
              navigation={this.props.navigation}
            />
          )}
        </View>
        <View
          style={{
            width: '100%',
            borderWidth: 5,
            borderColor: '#822659',
            overflow: 'hidden',
          }}>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-8967420236427435/5638302854"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={(error) => console.error(error)}
          />
        </View>
      </View>
    )
  }
}

export default Header
