import React, { ChangeEventHandler, VFC } from "react";
import { Box, Heading } from "@chakra-ui/layout";
import { InputProps } from "@chakra-ui/input";

import { CustomInput } from "@/components/atoms/CustomInput";
import { FontSize } from "@/theme/FontSize";

type Props = {
  children: string;
  type?: InputProps["type"];
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const AuthInputBox: VFC<Props> = (props) => {
  const { children, type, placeholder, value, onChange } = props;

  return (
    <Box w="100%">
      <Heading as="h2" fontSize={FontSize.h2}>
        {children}
      </Heading>
      <CustomInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </Box>
  );
};
