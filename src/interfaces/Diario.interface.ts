
import { ImageSourcePropType } from 'react-native'

export interface DiarioProps {
  id: number
  title: string
  image: ImageSourcePropType
  textos: {
    id: number
    nome: string
    data: string
  }[]
}
