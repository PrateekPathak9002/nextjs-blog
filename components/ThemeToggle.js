import { IconButton, useColorMode, Box, position } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ThemeToggle() {
    const { colorMode, toggleColorMode } = useColorMode(); // Now the useColorMode will work
    return (    
      <Box >
        <IconButton
          icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          mr={4}
          variant="outline"
          position="absolute"
          right="0"
          top="0"
        ></IconButton>
      </Box>)
}
