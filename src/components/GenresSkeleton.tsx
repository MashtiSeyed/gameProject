import { Box, HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenresSkeleton = () => {
  return (
    <div>
      <Box padding="2" boxShadow="lg">
        <HStack width={"200px"}>
          <SkeletonCircle size="10" borderRadius={5}/>
          <SkeletonText height={"50px"} noOfLines={4}  />
        </HStack>
      </Box>
    </div>
  );
};

export default GenresSkeleton;
