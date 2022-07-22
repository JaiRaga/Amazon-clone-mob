import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    width: 100
  },
  button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'black'
  },
  quantity: {
    // backgroundColor: 'red'
    color: 'black'
  }
})

export default styles