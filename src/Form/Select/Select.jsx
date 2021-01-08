import { memo } from "react";
import PropTypes from "prop-types";
import { select } from "./style";

export const Select = ({
  name,
  style,
  disabled,
  onChange,
  onBlur,
  loading,
  options,
  optionValue,
  optionLabel,
  asObject,
  selected,
}) => {
  const onSelectOption = (e) => {
    const { value } = e.target;

    if (asObject) {
      const newValue = options.find((opt) => String(opt[optionValue]) === String(value));
      return onChange(newValue);
    }

    const newValue = Number.isNaN(value) ? value : Number(value);
    return onChange(newValue);
  };

  const Option = memo(() => {
    if (loading) {
      return <option value="">Memuat...</option>;
    }

    return options.map((opt) => (
      <option key={opt[optionValue]} value={opt[optionValue]}>
        {opt[optionLabel]}
      </option>
    ));
  });

  return (
    <select
      name={name}
      id={name}
      disabled={disabled}
      selected={selected}
      onChange={onSelectOption}
      onBlur={onBlur}
      css={[select, style]}
    >
      <Option />
    </select>
  );
};

Select.propTypes = {
  /**
   * Indetifier input value
   */
  name: PropTypes.string.isRequired,
  /**
   * Enable/disabled input
   */
  disabled: PropTypes.bool,
  /**
   * Populate options
   */
  options: PropTypes.oneOfType([PropTypes.array]),
  /**
   * Define option value
   */
  optionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Define option value
   */
  optionLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Define option value
   */
  asObject: PropTypes.bool,
  /**
   * Loading indicator
   */
  loading: PropTypes.bool,
  /**
   * Init value
   */
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
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

Select.defaultProps = {
  disabled: false,
  options: [],
  optionValue: "value",
  optionLabel: "label",
  asObject: false,
  loading: false,
  selected: "",
  onChange: () => null,
  onBlur: () => null,
  style: null,
};
