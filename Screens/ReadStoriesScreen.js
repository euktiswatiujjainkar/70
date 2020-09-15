import React from 'react'; 
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native'; 



export default class ReadStoriesScreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:"red",height:700}}>
            <AppHeader/>
            <Text style={styls.text}>Search the stories</Text>
            <TextInput style={styls.textInput}/>
            <Text style={styls.text}>Search the Books  </Text>
           
            </View>
        )
    }
}

const styls = StyleSheet.create({
     textInput:{
      borderWidth:4,
      borderRadius:2,
      width:450,
      height:50,
      marginTop:20,
      marginLeft:450
    },

    text:{
         fontSize:22,
         textAlign:"center",
         marginTop:180,
    },
     
  
   logo1:{
       marginLeft:200,
       marginTop:-470,
       width:100,
       height:100,
       borderWidth:1,
      borderRadius:100,
   }
})