import { IconButton } from "@radix-ui/themes";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import styles from "./MoreButton.module.css";

export const MoreButton = () => (
  <IconButton
    aria-label="more actions"
    className={styles.iconButton}
    variant="ghost"
    color="gray"
  >
    <DotsHorizontalIcon />
  </IconButton>
);
