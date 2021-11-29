import { ChangeEvent, Dispatch, useState, SetStateAction } from "react";

export type useTextareaType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  setValue: Dispatch<SetStateAction<string>>;
};

// valueとonChangeを返すカスタムフック
export const useTextarea = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value),
    setValue,
  };
};
