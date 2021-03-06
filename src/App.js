import "./App.css";
import DiaryEditor from "./DiaryEditor"; // ES 모듈 시스템
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이정환",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "김우정",
    content: "하이 2",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "홍길동",
    content: "하이 3",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};

export default App;
