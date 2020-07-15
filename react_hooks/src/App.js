import React from "react";
import "./App.css";
// import Counter from "./useMemo/Counter";
// import FocusInput from "./useRefs/focusInput";
// import ClassTimer from "./useRefs/classTimer";
// import HookTimer from "./useRefs/hookTimer";
// import DocTitle1 from "./customeHooks/docTitle1";
// import DocTitle2 from "./customeHooks/docTitle2";
// import Counter1 from "./customeHooks1/counter1";
// import Counter2 from "./customeHooks1/counter2";
import UserForm from "./customeHooks2/userForm";
// import ClassFetch from "./completeExample/classFetch";
// import HookFetch from "./completeExample/hookFetch";
// import UseReducerFetchingData from "./completeExample/useReducerfetchingData";
// import Parent from "./useCallback/parent";
// import ComponentA from "./useReducer+useContext/ComponentA";
// import DataFetching1 from "./useReducer+FetchAPI/dataFetching1";
// import DataFetching2 from "./useReducer+FetchAPI/dataFetching2";
// import ClassCounter from "./useEffectExample/classCounter";
// import HookCounter from "./useEffectExample/hookCounter";
// import MousePositionClass from "./useEffectExample/mousePositionClass";
// import MousePositionHooks from "./useEffectExample/mousePositionHooks";
// import DataFetching1 from "./dataFetching/dataFetching1";
// import ComponentA from "./context/ComponentA";
// import Counter1 from "./useReducer/counter1";
// import Counter2 from "./useReducer/counter2";
// import Counter3 from "./useReducer/counter3";
// import ClassCounter from "./components/classCounter";
// import HookCounter from "./components/hookCounter";
// import HookCounter2 from "./components/hookCounter2";
// import HookCounter3 from "./components/hookCounter3";
// import HookCounter4 from "./components/hookCounter4";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <MousePositionClass /> */}
      {/* <MousePositionHooks name="Varun" /> */}
      {/* <DataFetching1 /> */}
      {/* <UserContext.Provider value={"Varun"}>
        <ChannelContext.Provider value={"Self"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
      {/* <ComponentA /> */}
      {/* <DataFetching1 /> */}
      {/* <DataFetching2 /> */}
      {/* <ClassFetch /> */}
      {/* <HookFetch /> */}
      {/* <UseReducerFetchingData /> */}
      {/* <Parent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <ClassTimer /> */}
      {/* <HookTimer /> */}
      {/* <DocTitle1 /> */}
      {/* <DocTitle2 /> */}
      {/* <Counter1 />
      <Counter2 /> */}
      <UserForm />
    </div>
  );
}

export default App;
