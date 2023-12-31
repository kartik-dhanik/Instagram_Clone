import React from 'react'
import {View, Text,SafeAreaView, StyleSheet, ScrollView,Divider} from "react-native"
import  Header  from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post  from '../components/home/Post'
import { POSTS } from '../data/posts'
import Footer from '../components/home/Footer'


const HomeScreen = () => {
    
    return(
        <SafeAreaView style={styles.container}>
          <Header/>
          <Stories />
          <ScrollView>
            {POSTS.map((post, index) => (
              <Post post={post} key={index}/>
            ))}
          </ScrollView>
          <Footer/>
        </SafeAreaView>
        )
  
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
})
export default HomeScreen