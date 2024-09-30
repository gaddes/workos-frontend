import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { IconButton, TextField } from "@radix-ui/themes";
import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

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

  const clearInput = React.useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Enter") {
        clearInput();
      }
    },
    [clearInput],
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
      {searchValue && searchValue.length > 0 ? (
        <TextField.Slot>
          <IconButton
            size="1"
            variant="ghost"
            color="gray"
            onClick={clearInput}
            onKeyDown={handleKeyDown}
          >
            <Cross1Icon height="14" width="14" />
          </IconButton>
        </TextField.Slot>
      ) : null}
    </TextField.Root>
  );
};
