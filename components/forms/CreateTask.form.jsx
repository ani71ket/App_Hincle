import { useContext, useState } from "react";
import { View } from "react-native";
import { Button, Icon, Text, TextInput } from "react-native-paper";
import TaskContext from "../../contexts/Task.context";

const CreateTaskForm = ({ setShow }) => {
  const { onSave } = useContext(TaskContext);
  const [text, setText] = useState("");

  const handleSave = () => {
    onSave(text);
    setText("");
    setShow(false);
  };

  return (
    <View style={{ display: "flex", flex: 1 }}>
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 4,
          marginBottom: 12,
          fontSize: 20,
          fontWeight: 500,
        }}
      >
        Add New Task
      </Text>
      <TextInput
        mode="outlined"
        value={text}
        onChangeText={(txt) => setText(txt)}
        placeholder="Enter task name"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 12,
        }}
      >
        <Button
          mode="contained"
          style={{
            marginTop: 10,
            padding: 2,
            backgroundColor: "red",
            width: "40%",
            margin: "auto",
          }}
          onPress={() => setShow(false)}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            Cancel
          </Text>
        </Button>
        <Button
          mode="contained"
          style={{
            marginTop: 10,
            padding: 2,
            backgroundColor: "#68a0cf",
            width: "40%",
            margin: "auto",
          }}
          disabled={!text}
          onPress={handleSave}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            Save Task
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default CreateTaskForm;
