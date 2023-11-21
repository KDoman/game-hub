import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import GameGrid from "./assets/components/GameGrid";
import GenreList from "./assets/components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGanres";
import PlatformSelector from "./assets/components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./assets/components/SortSelector";
import GameHeading from "./assets/components/GameHeading";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectOrder, setSelectOrder] = useState("");
  const [searchText, setSearchText] = useState("");
  return (
    <Grid
      templateAreas={{
        base: `"nav"
                 "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar onSearch={(searchText) => setSearchText(searchText)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
          <HStack spacing={5} marginBottom={1}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <SortSelector
              onSelectSortOrder={(selectOrder) => setSelectOrder(selectOrder)}
              selectOrder={selectOrder}
            />
          </HStack>
        </Box>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          selectOrder={selectOrder}
          searchText={searchText}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
