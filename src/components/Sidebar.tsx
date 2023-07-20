import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { DashboardIcon, SettingsIcon } from "../svg";
import { SettingsNotification } from "./SettingsNotification";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Chakra UI</DrawerHeader>

        <DrawerBody>
          <List spacing={3}>
            <ListItem onClick={onClose}>
              <Button variant="ghost" leftIcon={<DashboardIcon />}>
                Dashboard
              </Button>
            </ListItem>
            <ListItem onClick={onClose}>
              <Button variant="ghost" leftIcon={<DashboardIcon />}>
                Página 1
              </Button>
            </ListItem>
            <ListItem onClick={onClose}>
              <Button variant="ghost" leftIcon={<DashboardIcon />}>
                Página 2
              </Button>
            </ListItem>
          </List>
        </DrawerBody>

        <DrawerFooter>
          <SettingsNotification notifications={1} isOpen={isOpen} displayBase="block" displayMd="none" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
