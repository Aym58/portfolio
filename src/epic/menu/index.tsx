import { MenuItem } from 'common/menu-item';
import './style.scss';
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Colors } from 'theme/colors';
import { MenuItem as MenuItemChakra } from '@chakra-ui/react';

export const MenuElement = () => {
  return (
    <>
      <div className="menu-desktop">
        <MenuItem link="./" text="Portrait" />
        <MenuItem link="./projects" text="Projects" />
        <MenuItem link="./certifications" text="Certifications" />
      </div>
      <div className="menu-modile">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon boxSize={6} />}
            variant="filled"
          />
          <MenuList background={Colors.BACKGROUND} padding={8}>
            <MenuItemChakra background={Colors.BACKGROUND}>
              <MenuItem link="./" text="Portrait" />
            </MenuItemChakra>
            <MenuItemChakra background={Colors.BACKGROUND}>
              <MenuItem link="./projects" text="Projects" />
            </MenuItemChakra>
            <MenuItemChakra background={Colors.BACKGROUND}>
              <MenuItem link="./certifications" text="Certifications" />
            </MenuItemChakra>
          </MenuList>
        </Menu>
      </div>
    </>
  );
};
