import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class SecondSideMenu extends PureComponent{
  render(){
    return (
      <View style={styles.container}>
        <Text>Hallo</Text>
      </View>
    );
  }
}

SecondSideMenu.propTypes = {
  
};
SecondSideMenu.defaultProps = {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center'
    }
});