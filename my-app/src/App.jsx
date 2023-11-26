import { ColoredMessage } from "./components/ColoredMessage";
export const App= () => {
  //버튼 클릭시 실행되는 함수 정의
  const onClickButton = ()=>{
    alert();
  }



    return (
       <>
    {console.log("테스트")}
       <h1 style={{color:"red"}}>안녕하세요</h1>
      <ColoredMessage color="blue" message="잘 지내시죠??"/>
      <ColoredMessage color="pink" message="잘 지냅니다."/>
       <button onClick={onClickButton}>버튼</button>
       </>
       );
    };