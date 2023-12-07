import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  addShoeDetail: {padding: 20},
  text: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  textField: {marginBottom: 10, padding: 10, borderWidth: 1},
  button: {
    backgroundColor: '#989cab',
    width: '60%',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 25,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 25,
  },
  oddGridItem: {
    alignSelf: 'center',
  },
  shoeImage: {width: 100, height: 100, resizeMode: 'cover'},
});
