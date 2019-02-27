import { StyleSheet, Dimensions } from 'react-native';

import colors from '~/components/Global/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  group: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 10,
    marginTop: 15,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 2,
    height: 40,
    paddingLeft: 10,
    width: width - 80,
  },
  text: {
    color: colors.black,
    fontSize: 38,
    fontWeight: 'bold',
  },
});

export default styles;
