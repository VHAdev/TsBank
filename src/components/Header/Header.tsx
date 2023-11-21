import { HamburgerIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { IconButton } from "@chakra-ui/react"


export const Header = () => {
    return (
        <Menu>
            <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
             />
             <MenuList>
                <MenuItem>
                    menu item
                </MenuItem>
                <MenuItem>
                    new menu item
                </MenuItem>
                <MenuItem>
                    brand new menu item
                </MenuItem>
             </MenuList>
        </Menu>
    )
}