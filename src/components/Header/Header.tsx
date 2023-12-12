import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from "@chakra-ui/react"


export const Header = () => {
    return (
        <Box bg='teal' h='6vh' color='white' padding='10px'>
            <Breadcrumb separator='|'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
    )
}