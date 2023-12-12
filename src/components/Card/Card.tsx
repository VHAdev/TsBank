import { Box, Text } from "@chakra-ui/react"

interface CardInfo {
    mainContent: string
    content: string
}

const Card = ({ mainContent, content }: CardInfo) => {
    return (
        <Box
            bgColor='white'
            minHeight='12vh'
            padding={10}
        >
            <Text fontSize='2xl' fontWeight='bold'>
                {mainContent}
            </Text>
            <Text fontSize='xl'>
                {content}
            </Text>
        </Box>
    )
}

export default Card 