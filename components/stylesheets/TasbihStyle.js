import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  actionView: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statesContainer: {
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  targetTitle: {
    fontSize: 33,
    textAlign: 'center',
    marginBottom: 12,
    textShadowRadius: 20,
    color: '#fff',
    fontFamily: 'Cairo-Regular',
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E91E63',
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  counter: {
    fontSize: 27,
    textAlign: 'center',
    color: '#fff',
    padding: 10,
  },
  buttonContainer: {
    padding: 15,
    borderRadius: 15,
  },
  button: {
    fontSize: 120,
    color: '#E91E63',
    fontFamily: 'Cairo-Regular',
  },
  // Start The Reset Style
  resetView: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 29,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Cairo-Regular',
  },
  bottomContainer: {
    backgroundColor: '#c62a88',
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 100,
    marginVertical: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  bottomContainer2: {
    borderColor: '#c62a88',
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 100,
    marginVertical: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 19,
    marginRight: 10,
    color: '#fff',
    fontFamily: 'Cairo-Regular',
  },
})

export default Styles
