import React, { ChangeEventHandler, VFC } from "react";
import { Box, Heading } from "@chakra-ui/layout";
import { Textarea, TextareaProps } from "@chakra-ui/textarea";

import { FontSize } from "@/theme/FontSize";

type Props = TextareaProps & {
  children: string;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

export const LabelAndTextarea: VFC<Props> = (props) => {
  const { children, placeholder, value, onChange } = props;

  return (
    <Box w="100%">
      <Heading as="h2" fontSize={FontSize.h2}>
        {children}
      </Heading>
      <Textarea
        {...props}
        bg="gray.50"
        borderColor="#AC9386"
        focusBorderColor="#EDA464"
        _placeholder={{ color: "#6F574B", opacity: 0.5 }}
        _hover={{ borderColor: "#6F574B" }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};
