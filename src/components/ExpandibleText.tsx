import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";


interface Props {
  children: string | undefined;
}

const ExpandibleText = ({ children }: Props) => {
  const [expandibleText, setExpandibleText] = useState(false);
  const limit = 300;
  if(!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expandibleText ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button marginLeft={1} size="sm" fontWeight="bold" onClick={() => setExpandibleText(!expandibleText)}>
        {expandibleText ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandibleText;
