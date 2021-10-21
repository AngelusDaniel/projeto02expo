import { StackNavigationProp } from "@react-navigation/stack"
import { ImageSourcePropType } from "react-native"
import { DiarioProps } from "../interfaces/Diario.interface"

// Login Stack
export type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
  HomeStack: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

export type DiarioStackParamList = {
  Home: undefined
  Diario: DiarioProps
  Texto: {
    title: string
    image: ImageSourcePropType
    Textos?: {
      nome: string
      data: string
    }[]
  }
}
type DiarioScreenNavigationProp = StackNavigationProp<DiarioStackParamList>
export type DiarioTypes = {
  navigation: DiarioScreenNavigationProp
}