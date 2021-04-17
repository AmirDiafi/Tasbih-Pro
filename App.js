import React from 'react'
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SplashScreen from './Stacks/SplashSTack'
import HomeScreen from './Stacks/HomeStack'
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isDarks: false, token: false}
  }

  toggleTheme = () => {
    this.setState({isDark: !this.state.isDark})
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then((token) =>
      this.setState({token: Boolean(token)}),
    )
  }

  render() {
    return (
      <PaperProvider
        theme={this.state.isDark ? PaperDarkTheme : PaperDefaultTheme}>
        <NavigationContainer
          theme={
            this.state.isDark ? NavigationDarkTheme : NavigationDefaultTheme
          }>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {this.state.token ? (
              <Stack.Screen name="Home">
                {(props) => (
                  <HomeScreen {...props} toggleTheme={this.toggleTheme} />
                )}
              </Stack.Screen>
            ) : (
              <>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home">
                  {(props) => (
                    <HomeScreen {...props} toggleTheme={this.toggleTheme} />
                  )}
                </Stack.Screen>
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    )
  }
}

export default App
