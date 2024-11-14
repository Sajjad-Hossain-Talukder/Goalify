import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
      <View style={styles.goalItem}>
         <Pressable 
         onPress={ props.onDelete.bind(this, props.id) }
         android_ripple = {{color: "#301934" }}
         style = { ({pressed}) => pressed && styles.pressAnimation }
         >
        <Text style={styles.textColor}> {props.itemText}</Text>
        </Pressable>
      </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5D3FD3",
  },
  textColor: {
    color: "white",
    padding: 8,
  },
  pressAnimation: {
    opacity: 0.5
  }
});
