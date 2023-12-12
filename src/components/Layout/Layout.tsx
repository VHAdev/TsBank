import { Box } from "@chakra-ui/react"
import { Header } from "../Header/Header"


export const Layout = ({ children }: any) => {
    return (
        <Box minHeight='100vh' bgGradient={['linear(to-t, gray.200, orange.300)',]}>
            <Header />
            {children}
        </Box>
    )
}