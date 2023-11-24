import { ColoredMessage } from "./components/ColoredMessage";

//컴포넌트의 확장자는 .jsx로 사용할 것을 권장 
export const App = () => {
    // 버튼 클릭시 실행되는 함수 정의
    const onClickButton = () => {
        alert();
    }
   
    return  (
        <>
        <h1 style={{color:"red"}}>안녕하세요.</h1>
        <ColoredMessage color="blue" message="잘지내시죠 zz?"/>
        <ColoredMessage color="pink" message="잘지냅니다!!!"/>
           <button onClick={onClickButton}>버튼</button>
        </>
    );
};
