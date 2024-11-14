import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [entText, updateEntText] = useState();

  function textInputHandler(enteredText) {
    updateEntText(enteredText);
  }

  function addGoalPressed() {
    props.addGoal(entText);
    updateEntText("");
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.textInputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Enter your goal!"
          style={styles.textInput}
          enterKeyHint="done"
          onChangeText={textInputHandler}
          value={entText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalPressed} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e0d4ff",
    backgroundColor: "#e0d4ff",
    color: "120438",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 5,
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
