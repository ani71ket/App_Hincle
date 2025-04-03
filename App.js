import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStaticNavigation } from "@react-navigation/native";
import { TaskContextProvider } from "./contexts/Task.context";
import TodoList from "./screens/TodoList.screen";
import CompletedTasks from "./screens/CompletedTasks.screen";

const MyDrawer = createDrawerNavigator({
  screens: {
    TodoList: {
      screen: TodoList,
      options: {
        title: "Todo List",
      },
    },
    CompletedTasks: {
      screen: CompletedTasks,
      options: {
        title: "Completed Tasks",
      },
    },
  },
});

const Navigation = createStaticNavigation(MyDrawer);

const App = () => {
  return (
    <TaskContextProvider>
      <Navigation />
    </TaskContextProvider>
  );
};

export default App;
