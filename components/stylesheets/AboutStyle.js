import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    marginVertical: 20,
    color: '#252525',
    fontFamily: 'Dosis-Regular',
  },
  imageContainer: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#252525',
    padding: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 15,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#252525',
  },
  uri: {
    marginLeft: 5,
    textDecorationStyle: 'solid',
    fontSize: 17,
    borderLeftWidth: 1,
    borderLeftColor: '#252525',
    paddingLeft: 10,
    color: '#252525',
    fontFamily: 'Dosis-Regular',
  },
  title2: {
    fontSize: 18,
    marginTop: 20,
    color: '#252525',
    fontFamily: 'Dosis-Regular',
  },
  socilaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  socialUp: {
    borderWidth: 1,
    borderColor: '#c62a88',
    padding: 10,
    borderRadius: 100,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#c62a88',
  },
})

export default Styles
