import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 5
  },
  innerContainer: {
    flexDirection: 'row',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
    marginHorizontal: 10
  },
  rightContainer: {
    padding: 10,
    flex: 5,
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
  },
  quantityContainer: {
    marginVertical: 10,
  }
})

export default styles