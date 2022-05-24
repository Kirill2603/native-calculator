import {useContext} from "react";
import {ThemeContext} from "../context/themeComtext";
import {TouchableOpacity, Text} from "react-native";
import {Styles} from "../styles/globalStyles";


type ButtonPropsType = {
  onPress: () => void,
  title: string,
  isBlue?: boolean,
  isGrey?: boolean,
}

export const MyButton = ({isGrey,isBlue,onPress,title}: ButtonPropsType) => {
  const theme = useContext(ThemeContext)
  return (
    <TouchableOpacity style={
      isBlue
      ? Styles.buttonBlue
        : isGrey
      ? Styles.buttonGray
        : theme === 'light'
      ? Styles.buttonLight
          : Styles.buttonDark
    }
    onPress={onPress}>
      <Text
        style={
        isBlue || isGrey
          ?
          Styles.smallTextLight
          :
          theme === 'dark'
            ?
            Styles.smallTextLight
            :
            Styles.smallTextDark}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}