import { VFC } from "react";
import { Stack } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";

type Props = {
  version: Array<"Java版" | "統合版">;
};

export const GameVersion: VFC<Props> = (props) => {
  const { version } = props;

  return (
    <Stack direction="row">
      {version.map((ver) => (
        <Tag
          key={ver}
          textAlign="center"
          w="fit-content"
          variant="solid"
          bg={ver === "Java版" ? "orange.500" : "green.600"}
        >
          {ver}
        </Tag>
      ))}
    </Stack>
  );
};
