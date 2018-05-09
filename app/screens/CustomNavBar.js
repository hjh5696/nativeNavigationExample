import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CustomNavBar extends PureComponent{
  render(){
    return (
      <View style={styles.container}></View>
    );
  }
}

CustomNavBar.propTypes = {

};
CustomNavBar.defaultProps = {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      height: 64,
      backgroundColor: 'brown'
    }
});