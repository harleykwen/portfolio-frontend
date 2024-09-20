import React from 'react'
import loginBg from '@assets/backgrounds/login_bg.svg'
import { Flex } from '@chakra-ui/react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'

const Login: React.FC = () => {
    return (
        <Flex 
            height='100vh'
            backgroundImage={`url(${loginBg})`}
            backgroundSize='cover'
            backgroundPosition='center'
            backgroundColor='#2148c0'
            justifyContent='center'
            alignItems='center'
        >
            <GoogleLogin
                onSuccess={(credentialResponse: CredentialResponse) => {
                    console.log(credentialResponse)
                }}
                onError={() => {
                    console.log('error')
                }}
            />
        </Flex>
    )
}

export default Login