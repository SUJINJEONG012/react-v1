import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";

export const App= () => {
  //state정의
  const [num, setNum] = useState(0);

  //버튼 클릭시 실행되는 함수 정의
  const onClickButton = ()=>{
   setNum(num + 1); //추가
  };

    return (
    <>
    {console.log("테스트")}
       <h1 style={{color:"red"}}>안녕하세요</h1>
      <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
      <ColoredMessage color="pink">잘 지냅니다.</ColoredMessage>
       <button onClick={onClickButton}>버튼</button>
       <p>{num}</p>
       <CssModules/>
    </>
       );
    };