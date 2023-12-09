import React, { useState } from 'react';
import { FormControl, FormLabel,  Input, Checkbox, Button, Box } from '@chakra-ui/react';

const Form = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [setReminder, setSetReminder] = useState(false);

  const handleAddTask = () => {
    if (taskName && dateTime) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false,
        date: dateTime.split('T')[0],
        time: dateTime.split('T')[1],
      };
      onAddTask(newTask);
      setTaskName('');
      setDateTime('');
      setSetReminder(false);
    }
  };

  return (
    <Box p={4} bg="white" boxShadow="md" rounded="md">
      <FormControl isRequired>
        <FormLabel>Task</FormLabel>
        <Input placeholder='Enter task name' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <FormLabel mt={4}>Date and Time</FormLabel>
        <Input type='datetime-local' value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
        <Checkbox mt={4} size="md" colorScheme="blue" checked={setReminder} onChange={(e) => setSetReminder(e.target.checked)}>
          Set Reminder
        </Checkbox>
        <Button colorScheme='blue' mt={4} w="100%" onClick={handleAddTask}>
          Add Task
        </Button>
      </FormControl>
    </Box>
  );
};

export default Form;