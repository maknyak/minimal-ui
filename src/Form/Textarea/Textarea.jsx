import PropTypes from "prop-types";
import { textarea } from "./style";

export const Textarea = ({
  name, rows, style, placeholder, disabled, onChange, onBlur, value, ...props
}) => (
  <textarea
    name={name}
    id={name}
    rows={rows}
    placeholder={placeholder}
    disabled={disabled}
    onChange={e => onChange(e.target.value)}
    onBlur={onBlur}
    css={[textarea, style]}
    {...props}
  />
);

Textarea.propTypes = {
  /**
   * Indetifier input value
   */
  name: PropTypes.string.isRequired,
  /**
   * Helper text to indentity value
   */
  rows: PropTypes.number,
  /**
   * Helper text to indentity value
   */
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string,
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

Textarea.defaultProps = {
  rows: 3,
  placeholder: null,
  disabled: false,
  onChange: () => null,
  onBlur: () => null,
  style: null,
};
