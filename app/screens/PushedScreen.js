import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class PushedScreen extends PureComponent{
  render(){
    return (
      <View style={styles.container}></View>
    );
  }
}

PushedScreen.propTypes = {

};
PushedScreen.defaultProps = {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: 'red'
    }
});