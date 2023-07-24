import React from 'react'
import {View, Text,Image, StyleSheet,TouchableOpacity } from "react-native"



const Header = () => {
    
    return(
        <View style={styles.container}>
            <TouchableOpacity>
            <Image style ={styles.logo} 
            source={require('../../assets/insta.png')}
            />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
         
             <TouchableOpacity>
             <Image 
             source={require('../../assets/heart.png')}
             style={styles.icon}
             />
             </TouchableOpacity>
        

            
             <TouchableOpacity>
             <Image 
             source={require('../../assets/message.png')}
             style={styles.iconn}
             />
             </TouchableOpacity>
             </View>
        </View> 
        )
        
    
}

const styles= StyleSheet.create({
    
    container: {

        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    iconsContainer: {
        flexDirection: 'row',
    },
    logo: {
        width: 150,
        height: 60,
        marginTop: 40,
        //padding: 65,
        resizeMode: 'contain',
    },
    icon: {
        width: 25,
        height: 25,
        marginTop: 47,
        marginLeft: 5,
        resizeMode: 'contain',
    },

    iconn: {
        width: 35,
        height: 40,
        marginLeft: 15,
        marginBottom: 10,
        marginTop: 40,
    }
})
export default Header