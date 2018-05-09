import 'react-native';
import React from 'react';
import PushedScreen from 'app/screens/PushedScreen';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <PushedScreen />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});