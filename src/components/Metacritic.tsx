import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}
const Metacritic = ({score }: Props) => {
    const color = score > 85 ? "green" : score > 65 ? 'yellow' : score < 65 ? 'red' : '';
  return (
    <Badge borderRadius={5} colorScheme={color} fontSize={18} paddingX={2}>
      {score}
    </Badge>
  )
}

export default Metacritic
