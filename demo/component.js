import React from "react";
import RadioGroup, { Radio } from "../src/index";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    return <div style={{ height: "800px" }}>
        <RadioGroup defaultValue="mi" onChange={value => console.log(value)}>
          <Radio value="apple">苹果</Radio>
          <Radio value="mi">小米</Radio>
          <Radio value="samsung" disabled>
            三星
          </Radio>
        </RadioGroup> 
      </div>;
  }
}

export default App;

/**
 * Radio列表组件
 * 
 * @example 基本的 Radio
   <Radio value="apple">苹果</Radio>
 */

/**
 * RadioGroup列表组件
 * 
 * @example 基本的 RadioGroup
    <RadioGroup defaultValue="mi" onChange={value => console.log(value)}>
      <Radio value="apple">苹果</Radio>
      <Radio value="mi">小米</Radio>
      <Radio value="samsung" disabled>三星</Radio>
    </RadioGroup>
 */