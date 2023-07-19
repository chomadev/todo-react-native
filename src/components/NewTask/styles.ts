import { StyleSheet } from "react-native";
import { units } from "../../lib/units";
import { colors } from "../../lib/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: units.half,
        // marginVertical: units.double,
        paddingHorizontal: units.increased,
        top: -units.double,
    },
    textInput: {
        flex: 1,
        height: units.large,
        padding: units.default,
        borderRadius: units.borderRadius,
        backgroundColor: colors.base.gray500,
        borderColor: colors.product.purpleDark,
        borderWidth: 1,
        fontSize: units.fontSize,
        color: colors.base.gray100
    },
    button: {
        fontSize: units.fontSize,
        backgroundColor: colors.product.blue,
        padding: units.default,
        borderRadius: units.borderRadius,
        height: units.large,
        width: units.large,
        alignItems: 'center',
        justifyContent: 'center',
    }
})