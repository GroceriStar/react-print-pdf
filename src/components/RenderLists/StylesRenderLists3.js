import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor:'#45322E',
    color:"white",
    // borderBottomWidth: 5,
    //   borderBottomColor: 'red',
    // borderBottomStyle: "solid",
    // padding: 4,
    // border: '1 solid black',
    // borderWidth: 1,
    // borderColor: 'black',
    flexDirection:'column',
  },
  skills: {
    fontSize: '14px',
    // marginBottom: 10,
  },
  main: {
    marginTop: '10px',
    display: 'flex',
    minHeight: '60px',
    border: '1px solid black',
    width: '300px'
  // borderLeft: '1 solid black',
  // borderRight: '1 solid black',
  },
  block: {

    margin: '0',
    flexDirection:'column',
    backgroundColor:'green',
  }
});

export default styles;
