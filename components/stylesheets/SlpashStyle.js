import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  splashContainer: {
    backgroundColor: 'rgb(32,33,64)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginBottom: 20,
  },
  title: {
    color: '#FEFEFE',
    fontSize: 27,
    textAlign: 'center',
    fontFamily: 'Cairo-Regular',
  },
  title2: {
    marginBottom: 20,
    color: '#CCC',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Cairo-Regular',
  },
  button: {
    backgroundColor: '#c62a88',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Cairo-Regular',
    marginRight: 10,
  },
})

export default Styles
