import React from 'react'
import Styles from './stylesheets/headerStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {View} from 'react-native'

class HeaderLeftBack extends React.Component {
  render() {
    return (
      <View style={Styles.backHomeIcon}>
        <TouchableOpacity
          onPress={() =>
            this.props.isDrawer
              ? this.props.navigation.openDrawer()
              : this.props.navigation.goBack()
          }>
          <Ionicons style={Styles.headerIcon} name={this.props.iconName} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default HeaderLeftBack
