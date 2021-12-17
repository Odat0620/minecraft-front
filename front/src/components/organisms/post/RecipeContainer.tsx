import { Image } from "@chakra-ui/image";
import { Divider, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { VFC } from "react";

type Props = {
  recipe: Array<{
    processTitle: string;
    processBody: string;
    processImage: string;
  }>;
};

export const RecipeContainer: VFC<Props> = (props) => {
  const { recipe } = props;

  return (
    <>
      <Heading as="h2" fontSize="xl" textAlign="left">
        作り方
      </Heading>
      <Divider mb="1em" borderColor="#6F574B" />
      <Stack spacing="2em">
        {recipe.map((process, index) => (
          <Stack key={index}>
            <Flex>
              <Heading w="1em" as="h3" fontSize="lg" mr="0.5em">
                {index + 1}.
              </Heading>
              <Heading as="h3" fontSize="lg">
                {process.processTitle}
              </Heading>
            </Flex>
            <Flex>
              <Text>{process.processBody}</Text>
            </Flex>
            <Image
              maxH="500px"
              objectFit="contain"
              borderRadius="3px"
              alt={`手順${index + 1}`}
              src="https://source.unsplash.com/t1j-1GdWNgo"
            />
          </Stack>
        ))}
      </Stack>
    </>
  );
};
