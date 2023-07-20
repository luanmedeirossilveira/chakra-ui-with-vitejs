import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Avatar, Box, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { BellIcon, ExitIcon, SettingsIcon } from '../svg'

interface SettingsNotificationProps {
  notifications: number;
  isOpen: boolean;
  displayBase: 'none' | 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex';
  displayMd: 'none' | 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex';
}

export const SettingsNotification = ({
  displayBase,
  displayMd,
  notifications,
  isOpen,
}: SettingsNotificationProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display={{ base: displayBase, md: displayMd }} mt={{ base: 0 }}>
        <Menu>
          {notifications > 0 ? (
            <MenuButton
              isActive={isOpen}
              as={IconButton}
              variant="outline"
              icon={<BellIcon color="red" />}
              mr={2}
            ></MenuButton>
          ) : (
            <MenuButton
              isActive={isOpen}
              as={IconButton}
              variant="outline"
              icon={<BellIcon />}
              mr={2}
            ></MenuButton>
          )}
          <MenuList>
            <MenuItem
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Notificações
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <Avatar
                size="sm"
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
                mr={3}
              />{" "}
              <Text>Nova Notificação</Text>
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            isActive={isOpen}
            as={IconButton}
            variant="outline"
            icon={<SettingsIcon />}
          ></MenuButton>
          <MenuList>
            <MenuItem onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <>
                  <IconButton
                    icon={<MoonIcon />}
                    variant="outline"
                    aria-label="moon"
                    mr={2}
                  />
                  <Text>Alterar para Tema Escuro</Text>
                </>
              ) : (
                <>
                  <IconButton
                    icon={<SunIcon />}
                    variant="outline"
                    aria-label="sun"
                    mr={2}
                  />
                  <Text>Alterar para Tema Claro</Text>
                </>
              )}
            </MenuItem>
            <MenuItem onClick={() => alert("Kagebunshin")}>
              <IconButton
                icon={<ExitIcon />}
                variant="outline"
                aria-label="sun"
                mr={2}
              />
              <Text>Sair</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
  )
}
