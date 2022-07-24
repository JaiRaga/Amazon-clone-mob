import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white'
  },
  title: {
    color: 'black'
  },
  description: {
    color: 'black',
    marginVertical: 10
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