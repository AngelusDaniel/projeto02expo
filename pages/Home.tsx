import React from 'react'
import {useNavigation} from "@react-navigation/core"
import {Button, Container, Text } from '../styles/Container'

export default function Home(){
    const navigation = useNavigation();
    function handleDetails() {
        navigation.navigate("Details")
    }
    return(
        <Container>
            <Text>Página Inicial</Text>
            <Button onPress={handleDetails}>
                <Text>Detalhes</Text>
            </Button>
        </Container>
    )
}