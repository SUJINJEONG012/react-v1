import {css} from "@emotion/react";

export const Emotion = () => {
    // scss와 동일하게 작성 가능
    const containerStyle = css`
    border: 1px solid #aaa;
    border:-radius:20px;
    padding:8x;
    margin:8px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    `;

    //인라인 스타일 작성방법
    const titleStyle = css({
        margin: 0,
        color:"#aaa"
    });

   return(
    <div css={containerStyle}>
        <p css={titleStyle}>Emotion 입니다.</p>
        <button>버튼</button>
    </div>
   );
