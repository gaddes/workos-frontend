import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import styles from "./Search.module.css";

interface ISearch {
  placeholder: string;
}

export const Search: React.FC<ISearch> = ({ placeholder }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search");

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (!value) {
        setSearchParams({});
        return;
      }

      setSearchParams({ search: value });
    },
    [setSearchParams],
  );

  return (
    <TextField.Root
      className={styles.textField}
      placeholder={placeholder}
      value={searchValue || ""}
      size="2"
      onChange={handleChange}
    >
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
};
