import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    marginBottom: 25,
    borderRadius: 150,
  },
  image: {
    borderRadius: 150,
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    color: '#eee',
    fontFamily: 'Cairo-Regular',
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 27,
    marginBottom: 10,
    textAlign: 'auto',
    color: '#eaeaea',
    fontFamily: 'Cairo-Regular',
  },
})

export default Styles
