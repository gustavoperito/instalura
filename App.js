import React, { Component } from 'react';
import {
   Platform,
   StyleSheet,
   Text,
   View,
   FlatList,
   Dimensions
} from 'react-native';
import Post from './Post';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
   container: {
      marginTop: 20
   }
})

export default class App extends Component {
   constructor() {
      super();
      this.state = {
          fotos: []
      }
  }

  componentDidMount() {
      fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
          .then(resposta => resposta.json())
          .then(json => this.setState({fotos: json}));
  }

   render() {     
      return (
         <FlatList style={styles.container} data={this.state.fotos} keyExtractor={item => item.id} renderItem={({ item }) =>
               <Post foto={item} />
            }
         />
      );
   }
}