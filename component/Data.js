import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import styles from './styles'

 const Data = ({title,subtitle,comment,showData}) => 
  <TouchableOpacity onPress={showData}      
      >         
      <View style={styles.container}>
         <Text style={styles.item}>{title}</Text>
         <Text style={styles.item}>{subtitle}</Text>
         <Text style={styles.item}>{comment}</Text>           
      </View>
  </TouchableOpacity> 

 export default Data