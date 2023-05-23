
const InputModel = ({value, onChange, props}) => {
    const type = props.type
    const placeholder = props.placeholder
    const classes = props.classes

    return (
        <input className="classicInput"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
    );
  };


export default InputModel