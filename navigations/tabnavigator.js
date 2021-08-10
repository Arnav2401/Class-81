import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateStory from "../screens/createStory";
import Feed from '../screens/feed';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <Tab.Navigator 
        tabBarOptions={{
            activeTintColor:'orange',
            inactiveTintColor:'grey'
        }}
        >
            <Tab.Screen name='Feed' component={Feed} options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon name={focused?'book':'book-outline'} color={color} size={size} />
                ),
            }} />
            <Tab.Screen name='CreateStory' component={CreateStory} options={{
                tabBarLabel: 'CreateStory',
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon name={focused?'create':'create-outline'} color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    )
}

export default BottomTab
