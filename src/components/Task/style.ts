import { StyleSheet } from "react-native";
import { colors } from "../../lib/colors";
import { units } from "../../lib/units";

export const styles = StyleSheet.create({
    container: {
        minHeight: units.large,
        padding: units.half,
        backgroundColor: colors.base.gray500,
        borderColor: colors.base.gray400,
        borderWidth: 1,
        borderRadius: units.borderRadius,
        marginVertical: units.half,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: units.default,
    },
    toggle: {
        // height: units.default
    },
    text: {
        width: '70%',
        color: colors.base.gray100,
        fontSize: units.fontSizeSecondary,
        marginHorizontal: units.half,
        overflow: 'visible'
    },
    textCompleted: {
        width: '70%',
        color: colors.base.gray100,
        fontSize: units.fontSizeSecondary,
        textDecorationLine: 'line-through',
    },
    removeButton: {
        height: units.double,
        width: units.double,
    }
})