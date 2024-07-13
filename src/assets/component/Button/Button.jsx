/* eslint-disable react/prop-types */




const Button = (props) => {
   
    return (
        
        <div className="text-center">
         
            <button className="btn btn-accent">{props.children}</button>
        </div>
    );
};

export default Button;