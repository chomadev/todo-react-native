import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../components/Logo';
import { NewTask } from '../../components/NewTask';
import { styles } from './styles';
import Tasks from '../../components/Tasks';
import { useState } from 'react';
import { TaskModel } from '../../models/TaskModel';

export default function Home() {
    const [tasks, setTasks] = useState<TaskModel[]>([])
    return <View style={styles.container}>
        <View style={styles.header}>
            <Logo />
        </View>
        <View style={styles.body}>
            <NewTask onNewTaskCreated={handleAddNewTask} />
            <Tasks tasks={tasks}
                onAddNewTask={handleAddNewTask}
                onTaskCompleted={handleTaskCompleted}
                onTaskRemoved={handleTaskRemoved}
            ></Tasks>
        </View>
        {/* <View style={styles.footer}>
            <Text style={styles.footerText}>choma.dev</Text>
        </View> */}
        <StatusBar barStyle={'light-content'} translucent />
    </View>

    function handleAddNewTask(task: TaskModel) {
        setTasks([...tasks, task])
    }

    function handleTaskCompleted(task: TaskModel) {
        setTasks([
            ...(tasks.map(t => {
                if (t.id == task.id)
                    t.isCompleted = task.isCompleted
                return t
            }))
        ])
    }

    function handleTaskRemoved(task: TaskModel) {
        setTasks(tasks.filter(t => t.id != task.id))
    }
}