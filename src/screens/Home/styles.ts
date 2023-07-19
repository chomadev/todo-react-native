import { StyleSheet } from "react-native";
import { colors } from "../../lib/colors";
import { units } from "../../lib/units";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: colors.base.gray600,
    },
    header: {
        paddingVertical: units.large * 1.5,
        alignItems: 'center',
        backgroundColor: colors.base.gray700
    },
    body: {
        flex: 1,
        height: '110%',
        backgroundColor: colors.base.gray600,
    },
    text: {
        color: colors.base.gray300
    },
    footer: {
        // flex: 1,
        // height: 100,
        backgroundColor: colors.base.gray700,
    },
    footerText: {
        color: colors.base.gray300,
        fontSize: units.fontSize,
        textAlign: 'center',
        marginBottom: units.default,
        padding: units.default
    }
});