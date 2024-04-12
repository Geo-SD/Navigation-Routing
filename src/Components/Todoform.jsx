import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

function TodoForm() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('./tasks.json');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const {tasks} = await response.json();
        setTasks(tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[randomIndex];
    setSelectedTask(randomTask);
  };

  return (
    <ScrollView style={styles.container}>
      {selectedTask && (
        <View style={styles.selectedTaskContainer}>
          <Text style={styles.selectedTaskText}>{selectedTask.name}</Text>
        </View>
      )}

      <Button title="Generate Random Task" onPress={handleAddTask} />

      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={[styles.task, task.completed && styles.completed]}>
              <Text style={styles.taskText}>{task.name}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  selectedTaskContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginTop: 10,
  },
  selectedTaskText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TodoForm;
