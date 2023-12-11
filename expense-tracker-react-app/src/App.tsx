import { Heading, Center, Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Center>
      <Heading mt={10} as="h1" size="xl">
        Expense Tracker
        <Heading mt={10} as="h4" size="md">
          Your Balance <br /> $260
        </Heading>
      </Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </Center>
  );
};

export default App;
