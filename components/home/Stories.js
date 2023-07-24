import React from 'react'
import { View, Text , StyleSheet, Image, ScrollView} from 'react-native'
import { USERS } from '../../data/users'

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            
            {USERS.map((story, index) => (
                <View key={index} style={{alignItems: 'center'}}>
                 <Image source={{uri: story.image}}
                  style={styles.story}
                  />
                  <Text style={{color: 'black'}}>{story.user}</Text>
                </View>
            ))}
            </ScrollView> 

    </View>
  )
}

const styles= StyleSheet.create({
    story: {
        width: 80,
        height: 80,
        borderRadius: 125,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: 'lightgreen',
        
    },
})
export default Stories