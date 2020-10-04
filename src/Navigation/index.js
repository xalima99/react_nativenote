import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ViewNotes from "../screens/ViewNotes";
import addNotes from "../screens/addNotes";
import oneNote from '../screens/oneNote'

const StackNaviagtor = createStackNavigator(
  {
    ViewNotes,
    addNotes:{
      screen: addNotes
    },
    oneNote:{
      screen: oneNote
    }
  },
  {
    initialRouteName: "ViewNotes",
    headerMode: "none",
    mode: 'modal'

  }
);

export default createAppContainer(StackNaviagtor);
