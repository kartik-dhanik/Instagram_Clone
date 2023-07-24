import { View, Text , StyleSheet,Image, TouchableOpacity, Divider} from 'react-native'
import React  from 'react'


const BottomIcons = [
    {
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRmhweKSRzqBVUbY5Q_3YpQ6O9BYVvBPbTA&usqp=CAU'
    },
    {
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0dLVhOSYxElf-h_VHaOCZ0bsyGyTZnFznA&usqp=CAU'
    },
    {
        imageurl: 'https://cdn-icons-png.flaticon.com/512/6537/6537820.png'
    },
    {
        imageurl: 'data:image/png;base64,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'
    },
    {
        imageurl: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg'
    }
]
const Footer = () => {

  return (
    
   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <View style={styles.FooterIcons}>
    <Icon imgStyle={styles.footerIcon} imgurl={BottomIcons[0].imageurl}/>
    <Icon imgStyle={styles.footerIcon} imgurl={BottomIcons[1].imageurl}/>
    <Icon imgStyle={styles.footerIcon} imgurl={BottomIcons[2].imageurl}/>
    <Icon imgStyle={styles.footerIcon} imgurl={BottomIcons[3].imageurl}/>
    <Icon imgStyle={styles.dpIcon} imgurl={BottomIcons[4].imageurl}/>
    </View>
   </View>
  )
}

const Icon = ({imgStyle, imgurl}) => (

    <TouchableOpacity>
        <Image style={imgStyle} source={{uri : imgurl}} />
    </TouchableOpacity>
)

const styles=StyleSheet.create({

    FooterIcons: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    },
    footerIcon: {

        width: 25,
        height: 25,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between'
    },

    dpIcon: {

        width: 25,
        height: 25,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 50,
        marginHorizontal: 30,
        justifyContent: 'space-between'
    }
})
export default Footer