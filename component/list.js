/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  Text,
  View,
  Button,
  AsyncStorage,
  Alert,
  FlatList  
} from 'react-native';

import styles from './styles'
import Data from './Data'
import { Actions } from 'react-native-router-flux'

class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:''
    }    
  }

  componentWillMount () {
    this.getData();
  }

  getData = async () => {
    try{
      const value = await AsyncStorage.getItem('database_form'); 
      if (value !== null){  // We have data!!
       this.setState({
         data: JSON.parse(value)
       })
      }   
     }catch(err){
      console.log(err) 
     }
  }
 

  FlatListItemSeparator = () => {
    return(
      <View 
       style={{
         height:1,
         width:"100%",
         backgroundColor:'#607D8B'
       }}
      />      
    )
  }

  ListData(d){
    Alert.alert(d);
  }

  _renderData = ({item}) => {    
    return(
      <Data 
        title={item.title}
        subtitle={item.subtitle}
        comment={item.comment}
        showData={() => this.ListData(`${item.title} - ${item.subtitle} - ${item.comment}`)}
      />
    )
  }

  ClearStorage = () => {
    AsyncStorage.clear()
    Actions.pop();    
  }

  render() {        
      return(          
        <View style={styles.container}>          
        <FlatList 
           data={this.state.data}
           renderItem={this._renderData}
           ItemSeparatorComponent={this.FlatListItemSeparator}
           keyExtractor={data => data.title}               
          />
          <View style={styles.buttonClean}>
            <Button 
            onPress={this.ClearStorage}
            title='Borrar'/>
          </View> 
        </View>
      )        
     }
}

export default List;
