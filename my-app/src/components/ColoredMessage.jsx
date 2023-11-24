export const ColoredMessage = (props)=> {
   //console.log("props"+props);
    
   //분할대입 
   const {color, children} = props;
   
   const contentStyle ={
        color: color,
        fontSize: "20px"
    };

    return <p style={contentStyle}>{children}</p>
};