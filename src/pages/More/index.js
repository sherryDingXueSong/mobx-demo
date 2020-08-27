import React from "react";
import { observer } from "mobx-react";

// 不使用Provider、inject()方法，直接导入store中也可以实现同样效果 但是需要@observer
import { userStore } from "../../store";

export default
@observer
class More extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handleAdd = () => {
    userStore.changeCount();
  };

  render() {
    return (
      <div>
        <div>
          姓名：{userStore.name}{" "}
          <button
            onClick={() => {
              userStore.name = "dingxuesong"; //修改name属性不会驱动页面变化
            }}
          >
            change name
          </button>
        </div>

        <div>
          所属部门：{userStore.department}
          <button
            onClick={() => {
              userStore.changeDepartment("产品经理");
            }}
          >
            change department
          </button>
        </div>
        <hr />
        <div>
          count:{userStore.count} <button onClick={this.handleAdd}>add</button>
        </div>
        <div>multi:{userStore.multi}</div>
      </div>
    );
  }
}
