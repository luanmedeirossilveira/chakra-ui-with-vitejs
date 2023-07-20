import { Box, Text, useDisclosure } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { SettingsIcon } from "../svg";
import "./Home.css";



export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="main">
      <Header
        title="Chakra UI"
        isOpenDrawer={isOpen}
        onOpenDrawer={onOpen}
        onCloseDrawer={onClose}
        drawer={<Sidebar isOpen={isOpen} onClose={onClose} />}
        notifications={1}
      />

      <Box
        display={{ base: "block" }}
      >
      </Box>
    </div>
  );
};
