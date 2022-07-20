import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {},
  innerContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain'
  },
  rightContainer: {
    padding: 10,
    flex: 3,
    // width: "100%"
  },
  title: {
    color: 'black',
    fontSize: 18
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
   },
   star: {
    margin: 2
   },
   ratingsCount: {
    color: 'black',
    marginLeft: 5
   },
  price: {
    fontSize: 18,
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