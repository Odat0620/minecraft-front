import { ChangeEvent, useState, Dispatch, SetStateAction } from "react";

export type useInputType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setValue: Dispatch<SetStateAction<string>>;
};

// valueとonChangeを返すカスタムフック
export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    setValue,
  };
};
