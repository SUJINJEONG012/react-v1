import classes from './CssModules/Modules.scss';

export const CssModules = () =>{
    return(
    <div className={classes.container}>
        <p className={classes.title}>css Modules 입니다.</p>
        <button>버튼</button>
    </div>
    );
};