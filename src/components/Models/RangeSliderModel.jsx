const RangeSliderModel = ({value, onChange, props}) => {
    const {type, min, max, placeholder, classes} = props

    return (
        <input className={classes}
          type={type}
          min={min}
          max={max}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
    );
  };


export default RangeSliderModel