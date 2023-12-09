import React from 'react'
import { Container, Box, Button } from '@chakra-ui/react'
// import Form from './Form'
import Tasks from './Tasks'
// import ParentComponent from './ParentComponent'

const Header = () => {
  return (
    <Container maxW='md' bg='white' boxShadow='md' p='4' rounded='md'>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Box fontSize='xl' fontWeight='bold' color='blue.600'>
          Task Tracker
        </Box>
        <Button colorScheme='red' variant='ghost'>
          Close
        </Button>
      </Box>
      {/* <Form /> */}
      <Tasks />
    </Container>
  )
}

export default Header