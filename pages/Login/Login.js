import { useState } from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";
import Button from "../../common/components/Button/Button";

import { logoStyles } from "./styles/logo";
import { loginStyles } from "./styles/card";
import { inputStyles } from "./styles/input";

const Login = () => {
    const [userInfo, setUserInfo] = useState({name:"", password:""});

    const handleNameChange = (e) => {
            setUserInfo({...userInfo, name:e})
    }
    
    const handlePasswordChange = (e) => {
        setUserInfo({...userInfo, password:e})
    }    

    const handlePress = () => {
        if(userInfo.name == "Roussel" && userInfo.password == "Stepup"){
            alert("It works")
        }
        else {
            alert(`Name: ${userInfo.name} et Password: ${userInfo.password}.`)
        }
    } 
    return (
        <View>
            <View style={logoStyles.logoContainer}>
                <Image source={require('../../assets/logo.png')} style={logoStyles.logo} />
            </View>
            <View style={loginStyles.loginCard}>
                <View >
                    <View style={inputStyles.inputContainer}>
                        <TextInput 
                            placeholder="Nom d'utilisateur"
                            defaultValue={userInfo.name}
                            onChangeText={handleNameChange}
                            style={inputStyles.input}
                        />
                        <Image source={require('../../assets/email.png')} style={inputStyles.inputIcon} />
                    </View>
                    <View style={inputStyles.inputContainer}>
                        <TextInput 
                            placeholder="Mot de passe"
                            defaultValue={userInfo.password}
                            onChangeText={handlePasswordChange}
                            style={inputStyles.input}
                            secureTextEntry  
                        />
                        <Image source={require('../../assets/password.png')} style={inputStyles.inputIcon} />
                    </View>
                </View>
                <Button title="SE CONNECTER" onPress={handlePress} />
            </View>
        </View>
    )
}

  

export default Login;