
const Button = (props) => {
    return (
        <button className={`py-3 px-7 text-white rounded-full cursor-pointer ${props.customClass}`}>
            {props.title}
        </button>
    );
};

export default Button;
