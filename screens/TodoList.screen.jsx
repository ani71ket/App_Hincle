import { useContext, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import {
  Button,
  List,
  Modal,
  PaperProvider,
  Portal,
  Provider,
  TextInput,
} from "react-native-paper";
import TaskContext from "../contexts/Task.context";
import CreateTaskForm from "../components/forms/CreateTask.form";
import TaskTable from "../components/tables/Task.table";

const TodoList = () => {
  const { tasks } = useContext(TaskContext);
  const [show, setShow] = useState(false);
  return (
    <Provider>
      <SafeAreaView style={{ margin: "10" }}>
        <Portal>
          <Modal
            visible={show}
            onDismiss={() => setShow(false)}
            contentContainerStyle={{
              backgroundColor: "white",
              padding: 20,
              height: "25%",
              width: "90%",
              margin: "auto",
              marginTop: 20,
            }}
          >
            <CreateTaskForm setShow={setShow} />
          </Modal>
        </Portal>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            mode="contained"
            style={{
              marginTop: 10,
              backgroundColor: "#68a0cf",
              width: "40%",
            }}
            onPress={() => setShow(true)}
          >
            <Text
              style={{
                color: "#fff",
              }}
            >
              Add New Task
            </Text>
          </Button>
        </View>
        <TaskTable showCompleted />
      </SafeAreaView>
    </Provider>
  );
};
export default TodoList;
