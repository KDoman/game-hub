import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
      background={score > 90 ? "green" : "yellowgreen"}
      color={"whitesmoke"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
