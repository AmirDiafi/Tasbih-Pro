import React from 'react'
import {Text, View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Header from '../components/Header'
import Styles from '../components/stylesheets/TasbihStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'

class TasbihContent extends React.Component {
  state = {
    tasbihOne: 'سبحان الله ',
    tasbihTow: 'الحمد لله',
    tasbihThree: 'الله آكبر',
    finnaly:
      'لا إله إلا الله وحده لا شريك له ، له الملك وله الحمد وهو على كل شيء قدير',
    selected: 'سبحان الله ',
    counter: 0,
    isFinished: false,
    isClicked: false,
    viewCounter: 0,
  }

  handleCounter = () => {
    if (this.state.counter < 100) {
      this.setState({
        counter: this.state.counter + 1,
        viewCounter: this.state.viewCounter + 1,
        isClicked: true,
      })
    }
    if (this.state.viewCounter === 32) {
      this.setState({viewCounter: 0})
    }
    const counter = this.state.counter + 1
    if (counter < 33) {
      this.setState({selected: this.state.tasbihOne})
    } else if (counter >= 33 && counter < 66) {
      this.setState({selected: this.state.tasbihTow})
    } else if (counter >= 66 && counter < 99) {
      this.setState({selected: this.state.tasbihThree})
    } else if (counter === 99) {
      this.setState({selected: this.state.finnaly})
    } else {
      this.setState({isFinished: true})
    }
    setTimeout(() => {
      this.setState({isClicked: false})
    }, 150)
  }

  handleReset = () => {
    this.setState({
      isFinished: false,
      counter: 0,
      viewCounter: 0,
      selected: this.state.tasbihOne,
    })
  }

  handleOpenDrawer = () => {
    this.props.navigation.openDrawer()
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,.5)',
        }}>
        <Header
          isNotMain={true}
          title="Tasbih"
          navigation={this.props.navigation}
        />
        <View style={Styles.Container}>
          {this.state.isFinished ? (
            <View style={Styles.resetView}>
              <View style={Styles.titleContainer}>
                <Text style={Styles.title}>تهانينا</Text>
                <Text style={Styles.title}>تقبل الله منك</Text>
              </View>
              <TouchableOpacity onPress={this.handleReset}>
                <View style={Styles.bottomContainer}>
                  <Text style={Styles.buttonText}>إعادة التسبيح</Text>
                  <Ionicons size={23} color="#FEFEFE" name="reload-outline" />
                </View>
              </TouchableOpacity>
              <Text style={Styles.buttonText}>آو</Text>
              <TouchableOpacity onPress={this.handleOpenDrawer}>
                <View style={Styles.bottomContainer2}>
                  <Text style={Styles.buttonText}>المزيد</Text>
                  <Ionicons size={23} color="#FEFEFE" name="reader-outline" />
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={Styles.actionView}>
              <View style={Styles.statesContainer}>
                <Text style={Styles.targetTitle}>{this.state.selected}</Text>
                <View style={Styles.counterContainer}>
                  <Text style={Styles.counter}>{this.state.viewCounter}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={Styles.buttonContainer}
                onPress={this.handleCounter}>
                <View>
                  {this.state.isClicked ? (
                    <Ionicons style={Styles.button} name="ios-heart" />
                  ) : (
                    <Ionicons style={Styles.button} name="ios-heart-outline" />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    )
  }
}

export default TasbihContent
