import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import titleImage from './../../assets/title.png'

import VerticalContainer from '../../components/VerticalContainer'
import Card from './../../components/Card'
import Input from './../../components/Input'
import Button from './../../components/Button'

import styles from './styles'

function Register() {
  const navigation = useNavigation()
  return (
    <>
      <StatusBar style="light" backgroundColor="#121214" />

      <VerticalContainer>
        <Image source={titleImage} style={styles.title} />

        <Card altura="58%">
          <Text style={styles.cardTitle}>Crie sua conta</Text>

          <Input name="mail" placeholder="Seu email" />
          <Input name="user" placeholder="Seu nome" />
          <Input name="lock" placeholder="Sua senha" secureTextEntry={true} />
          <Input
            name="lock"
            placeholder="Confirme sua senha"
            secureTextEntry={true}
          />

          <Button>CADASTRAR</Button>
        </Card>

        <TouchableOpacity
          style={styles.registerTextContainer}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Feather name="arrow-left" size={24} color="#8257E5" />
          <Text style={styles.registerTextLink}>Voltar para o login</Text>
        </TouchableOpacity>
      </VerticalContainer>
    </>
  )
}

export default Register
