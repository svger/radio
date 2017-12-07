import React from "react";
import RadioGroup, { Radio } from "../src/index";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      checked: false
    };
  }

  render() {
    let { checked } = this.state;

    return (
      <div style={{ height: "800px" }}>
        <RadioGroup values={["苹果", "三星", "小米"]} />
      </div>
    );
  }
}

export default App;

/**
 * Radio列表组件
 * 
 * @example 1  基本的 Radio
  <Radio onChange={e => console.log(e.target.checked)}>
              选择
  </Radio>
 */

/**
 * Radio列表组件
 * 
 * @example 2  半选中的 Radio
   <Radio indeterminate onChange={e => console.log(e.target.checked)}>
              选择
   </Radio>
 */

/**
 * RadioGroup列表组件
 * 
 * @example 1  基本的 RadioGroup
    <RadioGroup defaultSelects={['apple']} onChange={selects => console.log(selects)}>
       <Radio value="apple">苹果</Radio>
       <Radio value="samsung">三星</Radio>
       <Radio value="mi" disabled>小米</Radio>
    </RadioGroup>
 */

/**
 * RadioGroup列表组件
 * 
 * @example 2  快速创建复选框组： 针对 value 和显示值相同时
  <RadioGroup values={['苹果', '三星', '小米']} />
 */

/**
 * RadioGroup列表组件
 * 
 * @example 3  RadioGroup 垂直排列
    <RadioGroup block>
      <Radio value="apple">苹果</Radio>
      <Radio value="samsung">三星</Radio>
      <Radio value="mi">小米</Radio>  
    </RadioGroup>
 */

/**
 * RadioGroup列表组件
 * 
 * @example 4  全选
   <RadioGroup toggleable>
      <Radio value="apple">苹果</Radio>
      <Radio value="samsung">三星</Radio>
      <Radio value="mi">小米</Radio>
    </RadioGroup>
 */
