import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
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
    inputIcon:{
        width: 25,
        height: 25,
        marginRight: 15,
        justifyContent: 'center',
    }
})