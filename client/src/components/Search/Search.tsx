import * as React from "react";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import styles from "./Search.module.css";

interface ISearch {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Search: React.FC<ISearch> = ({ onChange, placeholder }) => (
  <TextField.Root
    className={styles.textField}
    placeholder={placeholder}
    size="2"
    onChange={onChange}
  >
    <TextField.Slot>
      <MagnifyingGlassIcon height="16" width="16" />
    </TextField.Slot>
  </TextField.Root>
);
