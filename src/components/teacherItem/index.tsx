import React from 'react'
import {Image, View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}> 
        <Image
          style={styles.avatar}
          source={{uri:'https://avatars3.githubusercontent.com/u/16036604?s=460&u=a978028c402bf7ab0002eb08b99677cc03cc16da&v=4'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Reubber</Text>
          <Text style={styles.subject}>Quimaca</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Entusiasta das melhores tecnologias de química avançada.
        {'\n'}{'\n'}
        Apaixonado por explodir coisas em laboratio e por mudar a vida das pessoas através de experiencias. Mais de
        200.000 pessoas já passaram por uma das minhas experiencias.
      </Text>
         
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hr {'  '} 
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={heartOutLineIcon} />-*/}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>  
    
    </View>
  )
}

export default TeacherItem
