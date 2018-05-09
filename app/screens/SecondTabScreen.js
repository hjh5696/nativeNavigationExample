import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SecondTabScreen extends PureComponent{
  render(){
    return (
      <View style={styles.container}></View>
    );
  }
}

SecondTabScreen.propTypes = {

};
SecondTabScreen.defaultProps = {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: 'green'
    }
});