import React from 'react'
import { 
  StyleSheet
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import App from './App'
import List from './list'

const router = () => (
    <Router>
      <Scene key="root">
        <Scene key="app" 
          component={App}
          direction="horizontal"  
          hideNavBar
        />
        <Scene key="list" 
          component={List} 
          hideNavBar={false} 
          direction="horizontal" 
          title="Lista Datos"
          navigationBarStyle={styles.navBar}
          titleStyle={styles.title}
          headerTintColor="#fff"        
        />
      </Scene>
    </Router>
 );

 const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#24CE84',   
  },
  title: {    
    alignSelf: 'center',
    marginLeft:-45,  
    color: 'white',      
    fontWeight: '900'
  }
})

 export default router;

 