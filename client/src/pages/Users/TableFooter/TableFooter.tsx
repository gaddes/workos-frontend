import { Button, Flex, Strong } from "@radix-ui/themes";

import styles from "./TableFooter.module.css";

export const TableFooter = () => (
  <tfoot className={styles.tableFooter}>
    <tr>
      <td colSpan={4}>
        <Flex gap="2" justify="end" my="2" mr="3">
          <Button size="1" variant="outline" color="gray">
            <Strong>Previous</Strong>
          </Button>
          <Button size="1" variant="outline" color="gray">
            <Strong>Next</Strong>
          </Button>
        </Flex>
      </td>
    </tr>
  </tfoot>
);
