import { Image } from "react-native";
const logoImage = require('../../../assets/Logo.png');

export function Logo() {
    return <Image source={logoImage} />
}