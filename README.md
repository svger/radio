# Radio
单选框


| 属性        | 说明                          | 类型            | 默认值         |
| --------- | --------------------------- | ------------- | ----------- |
| prefixCls | 样式前缀，如：`cefc-radio`，可用于自定义样式 | String        | `cefc-radio` |
| value  |  值，如果结合 RadioGroup 使用，与其 value 或 defaultValue 对应                         | 	string/number | 无           |
| checked  |  	单独使用时，是否选中，与 RadioGroup 一起使用时无需指定                       | 	bool | 无           |
| defaultChecked  |  单独使用时，初始是否选中（不可控），与 RadioGroup 一起使用时无需指定                          | 	bool | 无           |
| onChange  |  	单独使用时，切换选中后的回调，参数为 event 对象，与 RadioGroup 一起使用时无需指定                         | 	func | 无           |
| disabled  |  是否禁用                         | 	bool | 无           |

 
# RadioGroup
单选框组


| 属性        | 说明                          | 类型            | 默认值         |
| --------- | --------------------------- | ------------- | ----------- |
| prefixCls | 样式前缀，如：`cefc-radio-group`，可用于自定义样式 | String        | `cefc-radio-group` |
| value  |  	选中的值                     | 		string/number	| 无           |
| defaultValue  |  初始化时选中的值（不可控）                         | 	string/number | 无           |
| onChange  |  切换选择后的回调。参数为选中的值                         | 	func | 无           |
