import { StyleSheet } from "react-native";
import { units } from "../../lib/units";
import { colors } from "../../lib/colors";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: units.increased,
        gap: units.default,
    },
    list: {
        paddingBottom: units.large * 3
    },
    emptyListMessage: {
        color: colors.base.gray200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: units.double,
    },
    titleText: {
        marginTop: units.increased,
        marginBottom: units.half,
        color: colors.base.gray200,
        fontWeight: 'bold',
        fontSize: units.default,
        lineHeight: units.fontSize,
    },
    text: {
        fontSize: units.default,
        color: colors.base.gray200,
    },
    taskSummary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textCreated: {
        color: colors.product.blue,
        fontWeight: 'bold',
        fontSize: units.fontSizeSecondary,
    },
    textCompleted: {
        color: colors.product.purple,
        fontWeight: 'bold',
        fontSize: units.fontSizeSecondary,
    },
    taskCounter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: units.half,
    },
    taskCounterBadge: {
        paddingVertical: units.half,
        paddingHorizontal: units.default,
        borderRadius: units.default,
        overflow: 'hidden',
        backgroundColor: colors.base.gray400,
        color: colors.base.gray200,
        fontWeight: 'bold',
        fontSize: units.fontSizeSecondary,
    }
})