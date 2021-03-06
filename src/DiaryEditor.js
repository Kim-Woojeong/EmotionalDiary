import { useRef, useState } from "react";

const DiaryEditor = () => {
  const authorInput = useRef(); //useRef() 함수를 호춣해서 어떤 반환값을 상수에 담아둠.
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChnageState = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor">
      <h2> 오늘의 일기 </h2>
      <div>
        <input
          ref={authorInput} // ref 추가
          name="author"
          value={state.author}
          onChange={handleChnageState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput} // ref 추가
          name="content"
          value={state.content}
          onChange={handleChnageState}
        />
      </div>
      <div>
        오늘의 감정점수 :
        <select>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default DiaryEditor;
