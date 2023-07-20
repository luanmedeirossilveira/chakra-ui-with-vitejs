import {
  Box,
  Heading,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { SettingsNotification } from "./SettingsNotification";

interface HeaderProps {
  title: string;
  drawer?: JSX.Element;
  notifications: number;
  isOpenDrawer: boolean;
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
}

const Header = ({
  isOpenDrawer,
  onOpenDrawer,
  onCloseDrawer,
  drawer,
  notifications,
  title,
}: HeaderProps) => {
  const { isOpen } = useDisclosure();

  const handleToggleDrawer = () =>
    isOpenDrawer ? onCloseDrawer() : onOpenDrawer();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="transparent"
      color="inherit"
    >
      <Box
        display={{ base: "block" }}
        cursor="pointer"
        onClick={handleToggleDrawer}
      >
        <HamburgerIcon w={30} h={30} />
      </Box>

      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          {title}
        </Heading>
      </Flex>

      <SettingsNotification notifications={notifications} isOpen={isOpen} displayBase="none" displayMd="block" />

      {drawer}
    </Flex>
  );
};

export default Header;
