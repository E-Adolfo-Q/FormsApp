import {
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
container: {
    flex: 1,  
    backgroundColor: '#F5FCFF',
    paddingVertical:15,
    paddingHorizontal:15, 
    paddingLeft:15,
    paddingRight:15 
},
button:{
    backgroundColor:'skyblue',
    paddingTop:15,
    paddingBottom:15,
},
buttonLoad:{
    marginTop:15
},
textButton:{
    textAlign:'center',
    color:'black',
},
title:{
    textAlign:'center',
    fontSize:18,
    marginBottom:15,
},
input:{
    height:40,
    borderColor:'#ccc',
    borderWidth:2,
    marginBottom:20
},
textArea:{
    height:60
},
ContentList:{
    marginTop:5,
    marginBottom:5, 
},
DataList:{
    textAlign:'center'
},
buttonClean:{
   marginTop:20 
},
item:{    
    fontSize:18,  
    textAlign:'center',
    color:'black'      
  } 
});

  export default styles;