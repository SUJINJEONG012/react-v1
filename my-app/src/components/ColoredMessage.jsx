export const ColoredMessage = (props)=> {
   console.log("props"+props);
    const contentStyle ={
        color:props.color,
        fontSize: "20px"
    };

    return <p style={contentStyle}>{props.children}</p>
};