import PropTypes from "prop-types";
import { input } from "./style";

export const Input = ({
  type, name, style, placeholder, disabled, onChange, onBlur, ...props
}) => {
  const onSetValue = (e) => {
    if (type === "number") {
      return onChange(Number(e.target.value));
    }

    return onChange(e.target.value);
  };

  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onSetValue}
      onBlur={onBlur}
      css={[input, style]}
      {...props}
    />
  );
};

Input.propTypes = {
  /**
   * Type of input like text, password, number etc
   */
  type: PropTypes.string.isRequired,
  /**
   * Indetifier input value
   */
  name: PropTypes.string.isRequired,
  /**
   * init value
   */
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Helper text to indentity value
   */
  placeholder: PropTypes.string,
  /**
   * Enable/disabled input
   */
  disabled: PropTypes.bool,
  /**
   * Enable/disabled input
   */
  onChange: PropTypes.func,
  /**
   * Enable/disabled input
   */
  onBlur: PropTypes.func,
  /**
   * Custom styling
   */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

Input.defaultProps = {
  placeholder: null,
  disabled: false,
  onChange: () => null,
  onBlur: () => null,
  style: null,
};
