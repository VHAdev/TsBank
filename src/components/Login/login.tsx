import {
    ChakraProvider,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Input,
    Button,
} from '@chakra-ui/react'
import { login } from '../../services/login'

export const LoginSection = () => {
    return (
        <ChakraProvider>
            <Card align='center' backgroundColor='tomato'>
                <CardHeader>
                    <Heading size='lg' color='white'>Login</Heading>
                </CardHeader>
                <CardBody>
                    <Input
                        variant='flushed'
                        placeholder='Email'
                        _placeholder={{ color: 'white' }}
                    />
                    <Input
                        variant='flushed'
                        placeholder='Password'
                        _placeholder={{ color: 'white' }}
                    />
                </CardBody>
                <CardFooter>
                    <Button onClick={login} colorScheme='teal'>OK</Button>
                </CardFooter>
            </Card>
        </ChakraProvider>
    )
}
