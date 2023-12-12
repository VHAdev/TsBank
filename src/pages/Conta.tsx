import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import Card from "../components/Card/Card"
import { useEffect, useState } from "react"
import { api } from "../api"
import { useParams, useNavigate } from "react-router-dom"

interface UserData { //interface with api.ts properties
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()    //operador diamante declarando tipo dentro do estado

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    const calendar = new Date()

    const { id } = useParams()
    const navigate = useNavigate()

    if(userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={10} paddingTop={10}>
                {
                    userData === undefined || userData === null ?
                        (
                            <Center>
                                <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='orange.500'
                                    size='xl'
                                />
                            </Center>
                        )
                        :
                        (
                            <>
                                <Card mainContent={`Bem vindo ${userData?.name}`} content={` ${calendar.getUTCDate().toString().padStart(2, '0')}/${calendar.getUTCMonth() + 1}/${calendar.getUTCFullYear()} ${calendar.getHours().toString().padStart(2, '0')}:${calendar.getMinutes().toString().padStart(2, '0')}`} /> 
                                <Card mainContent="Saldo" content={`R$ ${userData.balance}`} />
                            </>
                        )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta