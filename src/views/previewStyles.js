import {
  StyleSheet
} from '@react-pdf/renderer';

const previewStyles = StyleSheet.create({
  page: {
    padding: 30,
    // backgroundColor:'green'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },

  direction: {
      flex: 1,
    }
});

// const styles = StyleSheet.create({
//   page: {
//     // flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   // container: {
//   //   flex: 1,
//   //   flexDirection: 'row',
//   //   '@media max-width: 400': {
//   //     flexDirection: 'column',
//   //   },
//   // },
//   section: {
//     // margin: 10,
//     // padding: 10,
//     // flexGrow: 1
//   },
//   direction:{
//     flexGrow:1,
//
//     // flexDirection: 'row'
//   },
//   directionColumn:{
//     flexGrow:1,
//     flexDirection: 'column'
//   },
//   itemContent:{
//     flexGrow: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//    backgroundColor: '#e14427',
//   }
//   // text: {
//   //   "font-size": "18px"
//   // },
//   // block: {
//   //     backgroundColor: 'red'
//   // },
//   // block1: {
//   //     backgroundColor: 'green',
//   //     border: '1 solid purple'
//   // }
// });


export { previewStyles }
