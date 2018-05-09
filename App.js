import { Navigation } from 'react-native-navigation';

import { registerScreens } from './app/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'example.FirstTabScreen', // unique ID registered with Navigation.registerScreen
//     title: 'Welcome', // title of the screen as appears in the nav bar (optional)
//     navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
//     navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
//   },
// })

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./assets/images/icon_test_one.png'),
      selectedIcon: require('./assets/images/icon_test_one.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./assets/images/icon_test_two.png'),
      selectedIcon: require('./assets/images/icon_test_two.png'), // iOS only
      title: 'Screen Two'
    }
  ],
  drawer: {
    right: { // optional, define if you want a drawer from the right
      screen: 'example.SecondSideMenu', // unique ID registered with Navigation.registerScreen
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
      fixedWidth: 1000, // a fixed width you want your right drawer to have (optional)
    },
  }
});