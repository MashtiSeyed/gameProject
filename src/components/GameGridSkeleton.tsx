import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameGridSkeleton = () => {
  return (
    <div>
      <Card height={"372px"} width={"577px"}>
        <Skeleton>
          <CardBody>
            <SkeletonText/>
          </CardBody>
        </Skeleton>
      </Card>
    </div>
  );
};

export default GameGridSkeleton;
