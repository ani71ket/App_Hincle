// import { useContext } from "react";
// import { Text } from "react-native";
// import { SafeAreaView } from "react-native";
// import { Button, DataTable } from "react-native-paper";
// import TaskContext from "../contexts/Task.context";

// const TaskList = () => {
//   const { tasks, onDelete } = useContext(TaskContext);

//   const isActionDisabled = (status) => {
//     if (status === "completed") {
//       return true;
//     } else if (status === "inProgress") {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   return (
//     // console.log("Here: ", active);

//     <SafeAreaView style={{ margin: "10" }}>
//       <DataTable>
//         <DataTable.Header style={{ backgroundColor: "#c5e1a5" }}>
//           <DataTable.Title>
//             <Text style={{ color: "#33691e", fontWeight: "bold" }}>
//               Task Name
//             </Text>
//           </DataTable.Title>
//           <DataTable.Title>
//             <Text style={{ color: "#33691e", fontWeight: "bold" }}>Status</Text>
//           </DataTable.Title>
//           <DataTable.Title>
//             <Text style={{ color: "#33691e", fontWeight: "bold" }}>Action</Text>
//           </DataTable.Title>
//         </DataTable.Header>
//       </DataTable>
//       {tasks.map((task) => (
//         <DataTable.Row key={task.id}>
//           <DataTable.Cell>{task.taskName}</DataTable.Cell>
//           <DataTable.Cell>{task.status}</DataTable.Cell>
//           <DataTable.Cell>
//             <Button icon={"delete"} onPress={() => console.log("Yogi")}>
//               Remove
//             </Button>
//             <Button>Done</Button>
//           </DataTable.Cell>
//         </DataTable.Row>
//       ))}
//     </SafeAreaView>
//   );
// };

// export default TaskList;
import React from "react";

import { SafeAreaView } from "react-native";
import TaskTable from "../components/tables/Task.table";

const CompletedTasks = () => (
  <SafeAreaView style={{ marginLeft: 10, marginRight: 10 }}>
    <TaskTable showCompleted />
  </SafeAreaView>
);

export default CompletedTasks;
