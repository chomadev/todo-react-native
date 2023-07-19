import { View, Text, Switch, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { TaskModel } from '../../models/TaskModel'
import { styles } from './style'
import { colors } from '../../lib/colors'
const trashIcon = require("../../../assets/icon-trash.png")

interface TaskProps {
    onTaskCompleted: (task: TaskModel) => void
    onTaskRemoved: (task: TaskModel) => void
    task: TaskModel
}

export default function Task(props: TaskProps) {
    return (
        <View style={styles.container}>
            <Switch
                value={props.task.isCompleted}
                onChange={handleCompleteTaskClicked}
                trackColor={{ false: colors.product.blue, true: colors.product.purple }}
                thumbColor={props.task.isCompleted ? colors.product.purple : colors.base.gray500 }
                style={styles.toggle}
                >
            </Switch>
            <Text style={props.task.isCompleted ? styles.textCompleted : styles.text}>{props.task.name}</Text>
            <TouchableOpacity style={styles.removeButton}
                onPress={handleRemoveTaskClicked}>
                <Image source={trashIcon} />
            </TouchableOpacity>
        </View>
    )

    function handleRemoveTaskClicked() {
        props.onTaskRemoved(props.task)
    }

    function handleCompleteTaskClicked() {
        props.onTaskCompleted({
            ...props.task,
            isCompleted: !props.task.isCompleted
        })
    }
}