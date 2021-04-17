import React from 'react'
import {View, Linking, Share} from 'react-native'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import {
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Avatar,
  Divider,
  Caption,
  Headline,
} from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'

class CustomDrawer extends React.Component {
  state = {theme: false}

  toogleTheme = () => {
    this.setState({theme: !this.state.theme})
    this.props.toggleTheme()
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...this.props}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
            }}>
            <Avatar.Image
              source={{
                uri:
                  'https://drive.google.com/uc?export=view&id=1izjK5Jkb0gGOZ0fWO_fLnaqCZA9vBMTh',
              }}
            />
            <View style={{marginLeft: 10}}>
              <Headline
                style={{
                  fontFamily: 'Cairo-Regular',
                }}>
                سلام
              </Headline>
              <Caption
                style={{
                  fontFamily: 'Cairo-Regular',
                }}>
                بدأ التسبيح
              </Caption>
            </View>
          </View>
          <Divider />
          <View>
            <Drawer.Section>
              <DrawerItem
                onPress={() => this.props.navigation.navigate('Tasbih')}
                label="بدأ التسبيح"
                labelStyle={{
                  fontFamily: 'Cairo-Regular',
                }}
                icon={({color, size}) => (
                  <Ionicons
                    name="ios-heart-outline"
                    size={size}
                    color={color}
                  />
                )}
              />
              <DrawerItem
                onPress={() => this.props.navigation.navigate('Fadel')}
                label="فضل التسبيح"
                labelStyle={{
                  fontFamily: 'Cairo-Regular',
                }}
                icon={({color, size}) => (
                  <Ionicons name="md-bulb-outline" size={size} color={color} />
                )}
              />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section>
          <DrawerItem
            onPress={() => Linking.openURL('mailto:support@example.com')}
            label="قيم التطبيق"
            labelStyle={{
              fontFamily: 'Cairo-Regular',
            }}
            icon={({color, size}) => (
              <Ionicons name="thumbs-up-outline" size={size} color={color} />
            )}
          />
          <DrawerItem
            onPress={() =>
              Linking.openURL(
                'mailto:support@example.com?subject=Feedback&body=Description',
              )
            }
            label="شاركنا رأيك"
            labelStyle={{
              fontFamily: 'Cairo-Regular',
            }}
            icon={({color, size}) => (
              <Ionicons name="happy-outline" size={size} color={color} />
            )}
          />
          <DrawerItem
            onPress={() =>
              Share.share({
                title: 'شاركه مع أصدقائك',
                message: 'https://amirdiafi.com',
              })
            }
            label="مشاركة"
            labelStyle={{
              fontFamily: 'Cairo-Regular',
            }}
            icon={({color, size}) => (
              <Ionicons name="share-social-outline" size={size} color={color} />
            )}
          />
          <DrawerItem
            onPress={() => this.props.navigation.navigate('About')}
            label="حول التطبيق"
            labelStyle={{
              fontFamily: 'Cairo-Regular',
            }}
            icon={({color, size}) => (
              <Ionicons
                name="information-circle-outline"
                size={size}
                color={color}
              />
            )}
          />
        </Drawer.Section>
        <Drawer.Section
          style={{
            alignItems: 'flex-end',
            paddingLeft: 15,
            paddingRight: 45,
            fontFamily: 'Cairo-Regular',
          }}
          title="التفضيلات">
          <TouchableRipple
            onPress={() => this.toogleTheme()}
            style={{
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View pointerEvents="none">
                <Switch color="rgb(255, 54, 128)" value={this.state.theme} />
              </View>
              <Text style={{fontFamily: 'Cairo-Regular'}}>الوضع الليلي</Text>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    )
  }
}

export default CustomDrawer
