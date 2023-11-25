import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
//컴포넌트의 확장자는 .jsx로 사용할 것을 권장 
export const App = () => {

    console.log("랜더링 ");
    
   
    //State 정의
    const[num, setNum] = useState(0);

    useEffect(()=>{
        alert();
    }, [num]);

    // 버튼 클릭시 실행되는 함수 정의
    const onClickButton = () => {
       setNum(num+1);
    }
   
    return  (
        <>
       
        <h1 style={{color:"red"}}>안녕하세요.</h1>
        <ColoredMessage color="blue">잘 지내시죠 ?</ColoredMessage>
        <ColoredMessage color="pink">잘지냅니다 ! !</ColoredMessage>
           <button onClick={onClickButton}>버튼</button>
           <p>{num}</p>  
         <CssModules/>     
         </>
    );
};
