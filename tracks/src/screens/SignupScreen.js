import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from "../components/Spacer";

const SignupScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
        </Spacer>
            <Input 
                label="Email" 
                autoCapitalize='none'
                autoCorrect={false}
                value={email} 
                onChangeText={newEmail => setEmail(newEmail)} 
            />
            <Input 
                label="Password" 
                value={password}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={setPassword}
            />
        <Spacer>
            <Button title="Sign Up" />
        </Spacer>
        
        
        
       
    </View>
     
}

//navigation options are manipulated.
// Inorder to remove the header at the top and change the way navigation works.
SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
const styles = StyleSheet.create({
    container:{
        alignContent:'center',
        // borderColor:'red',
        // borderWidth:5,
        flex:1,
        justifyContent:'center',
        marginBottom:95,
    }
});

export default SignupScreen;
