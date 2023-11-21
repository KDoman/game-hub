import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game, Platform } from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useData from "../../hooks/useData";
import { Genre } from "../../hooks/useGanres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectOrder: string | null;
  searchText: string;
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectOrder,
  searchText,
}: Props) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectOrder,
        search: searchText,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectOrder, searchText]
  );
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding={"10px"}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {!isLoading &&
        data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
