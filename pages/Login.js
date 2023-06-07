import { useState } from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";
import Button from "../common/components/Button/Button";


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
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.loginCard}>
                <View >
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder="Nom d'utilisateur"
                            defaultValue={userInfo.name}
                            onChangeText={handleNameChange}
                            style={styles.input}
                        />
                        <Image source={require('../assets/email.png')} style={styles.inputIcon} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder="Mot de passe"
                            defaultValue={userInfo.password}
                            onChangeText={handlePasswordChange}
                            style={styles.input}
                            secureTextEntry  
                        />
                        <Image source={require('../assets/password.png')} style={styles.inputIcon} />
                    </View>
                </View>
                <Button title="SE CONNECTER" style={styles.loginBtn} onPress={handlePress} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginCard:{
        minHeight:200,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        borderBottomWidth: 1,
        width: 300,
        height: 50,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    
        shadowColor: '#808080',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
        },
    input: { 
        width:250, 
        height:50,
        paddingLeft:15,
        borderRadius:5,
    },  
    logoContainer: {
        alignItems: 'center',
        marginBottom:0
      },
    logo :{
        width: 240,
        height: 150,
        borderRadius:80,
        resizeMode: 'contain',
    },
    inputIcon:{
        width: 25,
        height: 25,
        marginRight: 15,
        justifyContent: 'center',
    }
  });
  

export default Login;