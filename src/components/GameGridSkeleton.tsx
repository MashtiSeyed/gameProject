import { Box, Card, CardBody, SkeletonText } from "@chakra-ui/react";

const GameGridSkeleton = () => {
  return (
    <div>
      <Card height={"372px"} width={"577px"}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <CardBody>{/* Your actual content */}</CardBody>
          <CardBody>
            <SkeletonText mt={14} noOfLines={4} spacing="4" skeletonHeight="2" />
          </CardBody>
        </Box>
      </Card>
    </div>
  );
};

export default GameGridSkeleton;

/*

        <Skeleton>
          <CardBody>
            <SkeletonText/>
          </CardBody>
        </Skeleton>
*/
