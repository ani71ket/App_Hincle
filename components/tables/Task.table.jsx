import { useContext } from "react";
import { View } from "react-native";
import { DataTable, IconButton, Text } from "react-native-paper";
import TaskContext from "../../contexts/Task.context";

const TaskTable = ({ showCompleted }) => {
  const { tasks, onDone, onDelete } = useContext(TaskContext);

  const tasksToShow = showCompleted
    ? tasks.filter((task) => !task.status)
    : tasks;

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 500, marginBottom: 10 }}>
        {showCompleted ? "" : "Task List"}
      </Text>
      <DataTable>
        <DataTable.Header style={{ backgroundColor: "#c5e1a5" }}>
          <DataTable.Title
            sortDirection="descending"
            onPress={() => console.log("Name Pressed")}
            textStyle={{ fontSize: 14, color: "#000" }}
          >
            Name
          </DataTable.Title>
          <DataTable.Title
            textStyle={{ margin: "auto", fontSize: 14, color: "#000" }}
          >
            Status
          </DataTable.Title>
          <DataTable.Title
            textStyle={{ margin: "auto", fontSize: 14, color: "#000" }}
          >
            Actions
          </DataTable.Title>
        </DataTable.Header>
        {tasksToShow.map((task) => (
          <DataTable.Row
            key={task.id}
            style={showCompleted ? {} : { paddingRight: 0 }}
          >
            <DataTable.Cell>{task.taskName}</DataTable.Cell>
            <DataTable.Cell textStyle={{ margin: "auto" }}>
              {task.status ? "Open" : "Close"}
            </DataTable.Cell>
            <DataTable.Cell>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                {!showCompleted && (
                  <>
                    <IconButton
                      icon="pencil-circle"
                      size={26}
                      onPress={() => console.log("Pressed")}
                      style={{ margin: 0 }}
                      iconColor="blue"
                    />
                    <IconButton
                      icon="check-circle"
                      size={26}
                      onPress={() => onDone(task.id)}
                      style={{ margin: 0 }}
                      iconColor="green"
                    />
                  </>
                )}
                <IconButton
                  icon="delete-forever"
                  size={26}
                  onPress={() => onDelete(task.id)}
                  style={{ margin: 0 }}
                  iconColor="red"
                />
              </View>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

export default TaskTable;
