import * as React from "react";
import { Button, Flex, Strong } from "@radix-ui/themes";

import styles from "./TableFooter.module.css";
import { useSearchParams } from "react-router-dom";

interface ITableFooter {
  data?: {
    prev: number | null;
    next: number | null;
    pages: number;
  };
}

export const TableFooter: React.FC<ITableFooter> = ({ data }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search");

  const loadPreviousPage = React.useCallback(() => {
    setSearchParams({ page: `${data?.prev}`, ...(search && { search }) });
  }, [data?.prev, search, setSearchParams]);

  const loadNextPage = React.useCallback(() => {
    setSearchParams({ page: `${data?.next}`, ...(search && { search }) });
  }, [data?.next, search, setSearchParams]);

  if (!data?.pages || data.pages < 2) return null;

  return (
    <tfoot className={styles.tableFooter}>
      <tr>
        <td colSpan={4}>
          <Flex gap="2" justify="end" my="2" mr="3">
            <Button
              size="1"
              variant={data?.prev ? "outline" : "solid"}
              color="gray"
              onClick={loadPreviousPage}
              disabled={!data?.prev}
            >
              <Strong>Previous</Strong>
            </Button>
            <Button
              size="1"
              variant={data?.next ? "outline" : "solid"}
              color="gray"
              onClick={loadNextPage}
              disabled={!data?.next}
            >
              <Strong>Next</Strong>
            </Button>
          </Flex>
        </td>
      </tr>
    </tfoot>
  );
};
