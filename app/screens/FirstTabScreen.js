import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default class FirstTabScreen extends PureComponent{
  static navigatorStyle = {
    navBarHideOnScroll: true,
    navBarCustomView: 'example.CustomNavBar'
  };
  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={{height: 1000}}></View>
      </ScrollView>
    );
  }
}

FirstTabScreen.propTypes = {

};
FirstTabScreen.defaultProps = {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: 'orange'
    }
});