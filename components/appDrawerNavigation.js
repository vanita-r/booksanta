import {createDrawerNavigator} from 'react-navigation-drawer'; 
import { AppTabNavigator } from './tabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu'; 
import SettingsScreens from '../screens/settingsScreen';

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{screen:AppTabNavigator},
    Settings:{screen:SettingsScreens},
},
    {contentComponent:CustomSideBarMenu},
    {initialRouteName:"Home"
})