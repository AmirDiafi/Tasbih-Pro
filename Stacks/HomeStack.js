import React from 'react'
import MainNav from '../navigators/MainNav'
import AboutNav from '../navigators/AboutNav'
import TasbihNav from '../navigators/TasbihNav'
import FadelNav from '../navigators/FadelNav'
import {createDrawerNavigator} from '@react-navigation/drawer'
import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator()
class Home extends React.Component {
  render() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => (
          <CustomDrawer toggleTheme={this.props.toggleTheme} {...props} />
        )}>
        <Drawer.Screen name="Main" component={MainNav} />
        <Drawer.Screen name="About" component={AboutNav} />
        <Drawer.Screen name="Tasbih" component={TasbihNav} />
        <Drawer.Screen name="Fadel" component={FadelNav} />
      </Drawer.Navigator>
    )
  }
}

export default Home
