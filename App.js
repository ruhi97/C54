import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class AnyColorButton extends Component {
  displayAlert=()=>{
    alert("I am an alert box")
  }
  render(){
    return(
      <Button color={this.props.color} title="Click Me" onPress={this.displayAlert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnyColorButton color='purple' />
        <Text>My First React Component</Text>
      </View>
    );
  }
}