import React, { Children } from "react";
import {View,StyleSheet} from 'react-native';


const Spacer = ({children}) =>{
    return <View style={sytles.spacer}>{children}</View>
};

const sytles = StyleSheet.create({
    spacer:{
        margin:15,

    }
});

export default Spacer;