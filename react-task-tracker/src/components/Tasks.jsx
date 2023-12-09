import React, { useState } from 'react';
import { Box, CloseButton, Text, VStack } from '@chakra-ui/react';
import Form from './Form';

const Tasks = () => {
  const [tasks, setTasks] = useState([ ]);

  const handleTaskClick = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTaskRemove = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <VStack p={4} align="center" spacing={4}>
      <Form onAddTask={handleAddTask} />
      {tasks.map((task) => (
        <Box
          key={task.id}
          p={4}
          borderRadius="lg"
          boxShadow="md"
          bg={task.completed ? 'green.100' : 'white'}
          width="300px"
          height="120px"
          position="relative"
        >
          <CloseButton
            onClick={() => handleTaskRemove(task.id)}
            size="sm"
            position="absolute"
            top="2"
            right="2"
          />
          <Box
            onClick={() => handleTaskClick(task.id)}
            textDecoration={task.completed ? 'line-through' : 'none'}
            cursor="pointer"
            fontWeight="bold"
            fontSize="lg"
            mb={2}
          >
            {task.name}
          </Box>
          <Text fontSize="sm" color="gray.500">
            Date: {task.date}
          </Text>
          <Text fontSize="sm" color="gray.500">
            Time: {task.time}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Tasks;