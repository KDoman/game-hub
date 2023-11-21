import { Heading } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGanres";
import { Platform } from "../../hooks/useGames";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameHeading = ({ selectedGenre, selectedPlatform }: Props) => {
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginBottom={5} size={"2xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
