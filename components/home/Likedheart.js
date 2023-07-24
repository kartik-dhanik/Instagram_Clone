import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React , {useState} from 'react'

const Likedheart= ()=>  {

    const [liked, setLiked]=useState(false);

    return (
        <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.footerIcon}>
           { !liked ?
              <Image style={styles.footerIcon} source={require('../../assets/heart.png')} /> :
            <Image style={{marginLeft: -5,width: 33, height: 38, marginTop: -8}} source={require('../../assets/redheart.png')} />
           }
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({

    footerIcon: {

        width: 26,
        height: 26,
        resizeMode: 'contain',
    },

})

export default Likedheart