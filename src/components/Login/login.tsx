import { Card, CardHeader, CardBody, CardFooter, Heading, Input, Button,} from '@chakra-ui/react'
import { login } from '../../services/login'
import { useState } from 'react'

export const LoginSection = () => {
    const [email, setEmail] = useState<string>('')                 //pin tipagem

    return (
        <Card align='center' backgroundColor='tomato'>
            <CardHeader>
                <Heading size='lg' color='white'>Login</Heading>
            </CardHeader>
            <CardBody>
                <Input
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    variant='flushed'
                    placeholder='Email'
                    _placeholder={{ color: 'white' }}
                />
                <Input
                    variant='flushed'
                    placeholder='Password'
                    type='password'
                    _placeholder={{ color: 'white' }}
                />
            </CardBody>
            <CardFooter>
                <Button onClick={() => login(email)} colorScheme='teal'>OK</Button>
            </CardFooter>
        </Card>
    )
}
