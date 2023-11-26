export const App= () => {
  //버튼 클릭시 실행되는 함수 정의
  const onClickButton = ()=>{
    alert();
  }

  //css 객체
  const contentStyle = {
    color:"blue",
    fontSize:"20px"
  }
  const contentPinkStyle ={
    color:"pink",
    fontSize:"20px"
  }

    return (
       <>
    {console.log("테스트")}
       <h1 style={{color:"red"}}>안녕하세요</h1>
       <p style={contentStyle}> 잘지내시죠?</p>
       <p style={contentPinkStyle}>잘 지냅니다.</p>
       <button onClick={onClickButton}>버튼</button>
       </>
       );
    };