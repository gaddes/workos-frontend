import {
  Button,
  Flex,
  Grid,
  Strong,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import styles from "./Edit.module.css";

export const Edit = () => (
  <Form.Root className={styles.Root}>
    <Grid asChild mb="2">
      <Form.Field name="name">
        <Flex align="baseline" justify="between">
          <Form.Label>Name</Form.Label>
          <Form.Message match="valueMissing">
            <Text size="1">Please enter a name</Text>
          </Form.Message>
        </Flex>
        <Form.Control asChild>
          <TextField.Root type="text" required />
        </Form.Control>
      </Form.Field>
    </Grid>

    <Grid asChild mb="2">
      <Form.Field className={styles.Field} name="description">
        <Flex align="baseline" justify="between">
          <Form.Label>Description</Form.Label>
          <Form.Message match="valueMissing">
            <Text size="1">Please enter a description</Text>
          </Form.Message>
        </Flex>
        <Form.Control asChild>
          <TextArea required />
        </Form.Control>
      </Form.Field>
    </Grid>

    <Flex gap="2" justify="between">
      <Button variant="outline" color="gray" className={styles.Button}>
        <Strong>Cancel</Strong>
      </Button>

      <Form.Submit asChild>
        <Button className={styles.Button} variant="surface">
          Update role
        </Button>
      </Form.Submit>
    </Flex>
  </Form.Root>
);
