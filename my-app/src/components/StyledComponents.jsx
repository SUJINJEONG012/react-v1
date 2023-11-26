import styled from "styled-components";

export const StyledComponents = () => {
    return (
        <SContainer>
            <STitle>styled components 입니다.</STitle>
            <SButton>버튼</SButton>
        </SContainer>
    );
};
    const SContainer = styled.div`
    border : 1px solid #aaa;
    padding:8px;
    margin:8px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    `;