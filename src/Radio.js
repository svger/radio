import React, { Component } from "react";
import classnames from "classnames";
import "./style/Radio.less";
import PropTypes from "prop-types";
const defaultPrefixCls = "cefc-radio";

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
    prefixCls,
    ...other
  } = props;

  const inputProps = { value, checked, defaultChecked, onChange, disabled };

  const classNames = classnames(prefixCls, { [`${prefixCls}--disabled`]: inputProps.disabled }, className);

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
      <span className={`${prefixCls}__status`}/>
      {children && <span className={`${prefixCls}__text`}>{children}</span>}
    </label>
  );
};

Radio.defaultProps = {
  prefixCls: defaultPrefixCls
};

Radio.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 值，如果结合 RadioGroup 使用，与其 value 或 defaultValue 对应
  checked: PropTypes.bool, // 单独使用时，是否选中，与 RadioGroup 一起使用时无需指定
  defaultChecked: PropTypes.bool, // 单独使用时，初始是否选中（不可控），与 RadioGroup 一起使用时无需指定
  onChange: PropTypes.func, // 单独使用时，切换选中后的回调，参数为 event 对象，与 RadioGroup 一起使用时无需指定
  disabled: PropTypes.bool, // 是否禁用
  prefixCls: PropTypes.string
};

export default Radio;