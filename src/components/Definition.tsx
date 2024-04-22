import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const Definition = ({ term, children }: Props) => {
  return (
    <>
      <Box>
        <Heading marginY={2} as='dt' fontSize={'md'} color="gray.600">{term}</Heading>
        <dd>{children}</dd>
      </Box>
    </>
  );
};

export default Definition;
