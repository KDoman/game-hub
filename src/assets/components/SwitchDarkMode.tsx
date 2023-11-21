import { MoonIcon } from "@chakra-ui/icons";
import { Show, Switch, useColorMode } from "@chakra-ui/react";

const SwitchDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="min-w-max flex items-center">
      <Switch
        size="md"
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Show above="md">
        <p className="inline ml-2">Dark mode</p>
      </Show>
      <Show below="md">
        <MoonIcon marginLeft={2} />
      </Show>
    </div>
  );
};

export default SwitchDarkMode;
