import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
    // paddingVertical: 20,
    backgroundColor: 'white'
  },
  title: {
    color: 'black'
  },
  description: {
    color: 'black',
    marginVertical: 10,
    lineHeight: 20
  },
  price: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'

  },
  oldPrice: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through'
  }
})

export default styles