export const StyledJsx =()=>{
    return (
        <>
        <div className="container">
            <p className="title">style jsx 입니다.</p>
            <button className="button">버튼</button>
        </div>

        <style jsx>
            {`
            .container{
                border: 1px solid #aaa;
                border-radius :20px;
                padding:8px;
                margin:8px;
                display:flex;
                justify-content: space-around;
                align-items:centers;
            }
            .title{
                margin:0;
                color:#aaa;
            }
            .button{
                background-color:#ddd;
                border:none;
                padding:8px;
                border-radius:8px;
            }
            `}
        </style>
        </>
    );
};