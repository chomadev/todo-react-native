import { FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import Task from '../Task'
import { styles } from './styles'
import { TaskModel } from '../../models/TaskModel'
const clipboard = require('../../../assets/icon-clipboard.png')

interface TasksProps {
    onAddNewTask: (taskModel: TaskModel) => void
    onTaskRemoved: (taskModel: TaskModel) => void
    onTaskCompleted: (taskModel: TaskModel) => void
    tasks: TaskModel[]
}

export default function Tasks(props: TasksProps) {
    return (
        <View
            style={styles.container}
        >
            {renderTaskSummary()}
            <FlatList
                contentContainerStyle={styles.list}
                data={props.tasks}
                renderItem={task => (
                    <Task task={task.item}
                        onTaskCompleted={props.onTaskCompleted}
                        onTaskRemoved={props.onTaskRemoved} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={renderEmptyListMessage}
            >
            </FlatList>
        </View>
    )

    function renderTaskSummary() {
        return <View style={styles.taskSummary}>
            <View style={styles.taskCounter}>
                <Text style={styles.textCreated}>
                    Criadas
                </Text>
                <Text style={styles.taskCounterBadge}>
                    {props.tasks.length}
                </Text>
            </View>
            <View style={styles.taskCounter}>
                <Text style={styles.textCompleted}>Concluídas</Text>
                <Text style={styles.taskCounterBadge}>
                    {props.tasks.filter(t => !!t.isCompleted).length}
                </Text>
            </View>
        </View>
    }

    function renderEmptyListMessage() {
        return <View style={styles.emptyListMessage}>
            <Image source={clipboard} />
            <Text style={styles.titleText}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    }
}