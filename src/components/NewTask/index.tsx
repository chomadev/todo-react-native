import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../lib/colors";
import { TaskModel } from "../../models/TaskModel";
import { useState } from "react";
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid';
const plusImage = require('../../../assets/icon-plus.png');

interface NewTaskProps {
    onNewTaskCreated: (task: TaskModel) => void
}

export function NewTask({onNewTaskCreated}: NewTaskProps) {
    const [taskName, setTaskName] = useState<string>('')
    return <View style={styles.container}>
        <TextInput value={taskName}
            onChangeText={handleTaskNameChanged}
            style={styles.textInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.base.gray300} />
        <TouchableOpacity style={styles.button} onPress={handleAddTaskClicked}>
            <Image source={plusImage} />
        </TouchableOpacity>
    </View>

    function handleAddTaskClicked() {
        onNewTaskCreated({
            id: uuid(),
            name: taskName
        } as TaskModel)
        setTaskName('')
    }

    function handleTaskNameChanged(taskName: string) {
        setTaskName(taskName)
    }
}