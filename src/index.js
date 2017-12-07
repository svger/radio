import React, { Component } from "react";
import classnames from "classnames";
import "./style/index.less";
import Radio from "./Radio";
import PropTypes from "prop-types";

class RadioGroup extends Component {
  constructor(props) {
    super();
    let value;
    "value" in props && (value = props.value);
    "defaultValue" in props && (value = props.defaultValue);
    this.state = { value };
  }

  componentWillReceiveProps(nextProps) {
    "value" in nextProps && this.setState({ value: nextProps.value });
  }

  handleChange(value) {
    this.setState({ value });
    this.props.onChange && this.props.onChange(value);
  }

  render() {
    const {
      children,
      className,
      defaultValue,
      onChange,
      ...other
    } = this.props;
    const { value } = this.state;

    delete other.value;

    const radiosWithProps = React.Children.map(children, (Radio, i) => {
      if (!Radio) return;
      const _value = Radio.props.value;
      return React.cloneElement(Radio, {
        key: i,
        checked: value === _value,
        onChange: e => {
          e.stopPropagation();
          this.handleChange(_value);
        }
      });
    });
    return (
      <div
        className={classnames("radios bfd-radio-group", className)}
        {...other}
      >
        {radiosWithProps}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 选中的值
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 初始化时选中的值（不可控）
  onChange: PropTypes.func, // 切换选择后的回调。参数为选中的值
  customProp(props) {
    if ("value" in props && !props.onChange) {
      return new Error(
        "You provided a `value` prop without an `onChange` handler"
      );
    }
  }
};

export { Radio };
export default RadioGroup;
