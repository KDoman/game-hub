import { Box, Skeleton, Stack } from "@chakra-ui/react";

const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];

const GenreListSkeleton = () => {
  return (
    <Stack>
      {skeletonArray.map((genre) => (
        <Box paddingY={"5px"} key={genre}>
          <Skeleton key={genre} height={"20px"} />
        </Box>
      ))}
    </Stack>
  );
};

export default GenreListSkeleton;
