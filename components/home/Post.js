import { View, Text , StyleSheet, Image, TouchableOpacity, Button, useState } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import Likedheart from './Likedheart'

const postFooterIcons = [

    { 
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1XNvPFytbkz1bmmjnin7A40WbiA6IA5EoQ&usqp=CAU',
        likedimageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_X63vsKIqrBjksRaqt7ZJtcLkuo_BhRMtw&usqp=CAU'
    },
    {
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz922k_hLjH6PW6RJKkneo9JxWOxJjaUOAC2HKEZj7cJk0ssfN1eDrWpf_ucpFlLtomPI&usqp=CAU'
    },
    {
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhPYcOIVL1iz0Bh8YxxZwKNZJjnSAdZyzLw&usqp=CAU'
    },
    {
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOXJdWL2GIXCp9pV5wL0cVepA7N_vBNMb_1A&usqp=CAU'
    },
]

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30 }}>
        <Divider width={1} orientation='vertical' />
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter post={post} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
        
        </View>
    </View>
  )
}

const PostHeader = ({post}) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
    }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{uri: post.profile_picture}}
              style={styles.story}
            />
            <Text style={{color: 'black', marginLeft: 5, fontWeight: '700'}}
            >{ post.user}</Text>
        </View>
        
        <View>
             <TouchableOpacity>
             <Image 
             source={require('../../assets/dots.png')}
             style={styles.iconn}
             />
             </TouchableOpacity>
        </View>
    </View>
)

const PostImage= ({post }) => (
    
    <View style={{
        width: '100%',
        height: 450,
    }}
    >
    <Image 
    source={{uri: post.imageurl}}
     style={{height: '100%', resizeMode: 'cover'}}
    />
    </View>
    
)

const PostFooter = () => {
    
    return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
     <View style={styles.leftFooterIcons}>
     
     <View >
     <Likedheart/>
     </View>
    <Icon imgStyle={styles.footerIcon} imgurl={postFooterIcons[1].imageurl}/>
    <Icon imgStyle={styles.footerIcon} imgurl={postFooterIcons[2].imageurl}/>
    </View>

    <View>
        <Icon imgStyle={styles.footerIcon} imgurl={postFooterIcons[3].imageurl}/>
    </View>
    </View>
    )
}

const Icon = ({imgStyle, imgurl}) => (

    <TouchableOpacity  onPress={Icon} >
        <Image style={imgStyle} source={{uri : imgurl}} />
    </TouchableOpacity>
)

const Likes = ({post}) => (
    <Text style={{fontWeight: '600'}}>{post.likes.toLocaleString('en')} likes</Text>
)

const Caption = ({post}) => (

<Text>
<Text style={{fontWeight: '600'}}>{post.user} </Text>
<Text>{post.caption} </Text>
</Text>
)

const CommentSection = ({post}) => (
    <View style={{marginTop: 5}}>
        {!!post.comments.length &&(
    <Text style={{color: 'grey'}}> 
    View{post.comments.length > 1 ? ' all': ''} {post.comments.length}
    {post.comments.length > 1 ? ' comments' : ' comment'}
    </Text>
    )}
    </View>
)

const Comments = ({post}) => (
    <>
    {post.comments.map((comment, index) => (
        <View key={index} style={{flexDirection: 'row'}}>
            <Text>
            <Text style= {{fontWeight: '600', flexDirection: 'row'}}>
                {comment.user} </Text>
              {comment.comment} </Text> 
        </View>
    ))}
    </>
)
const styles= StyleSheet.create({
    story: {
        width: 40,
        height: 40,
        borderRadius: 125,
        marginLeft: 10,
        borderWidth: 1.6,
        borderColor: 'lightgreen',
        
    },

    iconn: {
        width: 35,
        height: 20,
        marginLeft: 15,
    },

    footerIcon: {

        width: 26,
        height: 26,
    },

    leftFooterIcons: {
        flexDirection: 'row',
        width: '27%',
        justifyContent: 'space-between',
    }
})

export default Post