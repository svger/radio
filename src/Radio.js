import React, { PropTypes } from "react";
import classnames from "classnames";
import "./style/Radio.less";

const Radio = props => {
  const {
    children,
    className,
    onClick,
    value,
    checked,
    defaultChecked,
    onChange,
    disabled,
    ...other
  } = props;

  const inputProps = { value, checked, defaultChecked, onChange, disabled };

  const classNames = classnames(
    "bfd-radio",
    {
      "bfd-radio--disabled": inputProps.disabled
    },
    className
  );

  return (
    <label
      tabIndex={inputProps.disabled ? -1 : 0}
      className={classNames}
      onClick={e => {
        if (e.target.tagName === "INPUT") {
          e.stopPropagation();
        } else {
          onClick && onClick(e);
        }
      }}
      {...other}
    >
      <input type="radio" {...inputProps} />
      <span className="bfd-radio__status" />
      {children && <span className="bfd-radio__text">{children}</span>}
    </label>
  );
};

Radio.propTypes = {
  // 值，如果结合 RadioGroup 使用，与其 value 或 defaultValue 对应
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // 单独使用时，是否选中，与 RadioGroup 一起使用时无需指定
  checked: PropTypes.bool,

  // 单独使用时，初始是否选中（不可控），与 RadioGroup 一起使用时无需指定
  defaultChecked: PropTypes.bool,

  // 单独使用时，切换选中后的回调，参数为 event 对象，与 RadioGroup 一起使用时无需指定
  onChange: PropTypes.func,

  // 是否禁用
  disabled: PropTypes.bool
};

export default Radio;
