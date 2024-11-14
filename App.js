import { useState } from "react";
import { StyleSheet, View, TextInput, FlatList, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, addNewGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalPressed(entText) {
    addNewGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: entText, id: Math.random().toString() },
    ]);
    makeModalInVisible();
  }

  function deleteGoalPressed(id) {
    addNewGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }

  function makeModalVisible() {
    setModalIsVisible(true);
  }

  function makeModalInVisible() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065bc"
          onPress={makeModalVisible}
        />
        <GoalInput
          addGoal={addGoalPressed}
          isVisible={modalIsVisible}
          onCancel={makeModalInVisible}
        />
        <View style={styles.goalContainer}>
          <FlatList
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemText={itemData.item.text}
                  onDelete={deleteGoalPressed}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalContainer: {
    flex: 5,
  },
});
