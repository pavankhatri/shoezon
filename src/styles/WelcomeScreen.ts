import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  mainText: {
    color: 'blue',
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  text: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  options: {
    height: 50,
    backgroundColor: '#989cab',
    width: '60%',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 25,
  },
  buttonContainer: {
    width: '60%',
    alignSelf: 'center',
    backgroundColor: '#5858c4',
    marginVertical: 15,
    borderRadius: 25,
  },
});
