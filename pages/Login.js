import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native"


const Login = () => {
    const [userInfo, setUserInfo] = useState({name:"", password:""});

    const handleNameChange = (e) => {
            setUserInfo({...userInfo, name:e})
    }
    
    const handlePasswordChange = (e) => {
        setUserInfo({...userInfo, password:e})
    }    

    const handlePress = () => {
        if(userInfo.name == "Roussel" && userInfo.password == "stepup"){
            alert("It works")
        }
        else {
            alert(`Name: ${userInfo.name} et Password: ${userInfo.password}.`)
        }
    } 
    return (
        <View>
            <Text>Marikety</Text>
            <View>
                <TextInput 
                    placeholder="Nom d'utilisateur"
                    defaultValue={userInfo.name}
                    onChangeText={handleNameChange}
                    style={{ borderColor:"blue", borderWidth:1, width:250, paddingLeft:12 }}
                />
                <TextInput 
                    placeholder="Mot de passe"
                    defaultValue={userInfo.password}
                    onChangeText={handlePasswordChange}
                    style={{ borderColor:"blue", borderWidth:1, width:250, paddingLeft:12 }}
                />
            </View>
            <Button title="SE CONNECTER" onPress={handlePress} />
        </View>
    )
}

export default Login;