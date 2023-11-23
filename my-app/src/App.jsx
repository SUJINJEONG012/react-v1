//컴포넌트의 확장자는 .jsx로 사용할 것을 권장 
export const App = () => {
    // 버튼 클릭시 실행되는 함수 정의
    const onClickButton = () => {
        alert();
    }
    //css 객체
    const contentStyle ={
        color:"blue",
        fontSize: "20px"
    }
    return  (
        <>
        {console.log("test")}
                    <h1 style={{color:"red"}}>안녕하세요.</h1>
            <p style={contentStyle}>잘 지내시죠?</p>
           <button onClick={onClickButton}>버튼</button>
        </>
    );
};
