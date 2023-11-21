import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../../hooks/useGames";
import useData from "../../hooks/useData";
import { CloseIcon } from "@chakra-ui/icons";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = useData<Platform>("/platforms/lists/parents");

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        {selectedPlatform ? selectedPlatform?.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform: Platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            <Flex minWidth={"100%"} justifyContent={"space-between"}>
              <Box>{platform.name}</Box>
              {platform.name === selectedPlatform?.name ? (
                <CloseIcon onClick={() => onSelectPlatform(null)} />
              ) : null}
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
