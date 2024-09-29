import * as React from "react";
import { Button, Flex, Strong } from "@radix-ui/themes";

import styles from "./TableFooter.module.css";
import { useLocation, useSearchParams } from "react-router-dom";
import { useUsersQuery } from "api/workos.api.ts";

export const TableFooter = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const { search: queryString } = useLocation();
  const { data } = useUsersQuery(queryString);

  const loadPreviousPage = React.useCallback(() => {
    // `data` will always exist because loading/error states are handled in the parent component.
    // We use optional chaining here to make TypeScript happy.
    setSearchParams({ page: `${data?.prev}` });
  }, [data?.prev, setSearchParams]);

  const loadNextPage = React.useCallback(() => {
    setSearchParams({ page: `${data?.next}` });
  }, [data?.next, setSearchParams]);

  return (
    <tfoot className={styles.tableFooter}>
      <tr>
        <td colSpan={4}>
          <Flex gap="2" justify="end" my="2" mr="3">
            <Button
              size="1"
              variant="outline"
              color="gray"
              onClick={loadPreviousPage}
              disabled={!data?.prev}
            >
              <Strong>Previous</Strong>
            </Button>
            <Button
              size="1"
              variant="outline"
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
