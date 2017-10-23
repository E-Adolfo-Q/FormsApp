/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  AsyncStorage
} from 'react-native';

import styles from './styles'
import { Actions } from 'react-native-router-flux'

class App extends Component{
  constructor(){
    super()
    this.state = {
      title:'',
      subtitle:'',
      comment:'',         
    }
  }

  changeTitle = (title) =>{
    this.setState({title})
  }
  changeSubtitle = (subtitle) => {
    this.setState({subtitle})
  }
  changeComment = (comment) => {
    this.setState({comment})
  }  

  buttonLocalStorage = async () => {

    const {comment,title,subtitle} = this.state;
    const arrayData = [];

    if(comment && title && subtitle){
      const data = {
        title    : title,
        subtitle : subtitle,
        comment  : comment
      }
      arrayData.push(data)
      try{
        const value = await AsyncStorage.getItem('database_form') 
        if(value != null){
          const d = JSON.parse(value)
          d.push(data)
          await AsyncStorage.setItem('database_form',JSON.stringify(d)).then(() => {
            this.setState({
              title:'',
              subtitle:'',
              comment:'', 
            })
          })              
        }else{         
          await AsyncStorage.setItem('database_form',JSON.stringify(arrayData)).then(() => {
          this.setState({
              title:'',
              subtitle:'',
              comment:'', 
          })
         })         
       }      
       }catch(err){
        console.log(err);
       }
    }else{
      Alert.alert('error!!')
    }  
  }

  buttonGetStorage = () => {
    Actions.list();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Formulario React Native</Text>
        <TextInput
         underlineColorAndroid='transparent'                 
         style={styles.input} 
         placeholder="Title"
         value={this.state.title}
         onChangeText={this.changeTitle}
        />
        <TextInput
         underlineColorAndroid='transparent'
         style={styles.input}  
         placeholder="Subtitle"
         value={this.state.subtitle}
         onChangeText={this.changeSubtitle}
        />   
        <TextInput
         underlineColorAndroid='transparent'
         autoCorrect={false}        
         multiline={true}
         style={[styles.input, styles.textArea]} 
         placeholder="Comment"
         value={this.state.comment}
         onChangeText={this.changeComment}
        />
        <TouchableHighlight
         style={styles.button}
         onPress={this.buttonLocalStorage}
         underlayColor={'#24CE84'}  
        >
         <Text style={styles.textButton}>Guardar Local</Text>
        </TouchableHighlight>
        <TouchableHighlight
        style={[styles.button,styles.buttonLoad]}
        onPress={this.buttonGetStorage}
        underlayColor={'#24CE84'}  
         >
         <Text style={styles.textButton}>Cargar Data</Text>
       </TouchableHighlight>                                           
      </View>
    );
  }
}

export default App;
