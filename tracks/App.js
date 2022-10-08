import { createAppContainer,createSwitchNavigator} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

//importing all the files in here 
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

//we have switch navigator , bottom navigator and stack navigator.
// we need to put them from top down.

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
      Signup:SignupScreen,
      Signin:SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow : createStackNavigator({
          TrackList:TrackListScreen,
          TrackDetail:TrackDetailScreen,
      }),
      TrackCreate : TrackCreateScreen,
      Account : AccountScreen,
    })

});

export default createAppContainer(switchNavigator);