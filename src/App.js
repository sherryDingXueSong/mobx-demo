import React from "react";
import { observer, inject } from "mobx-react";

import "./App.css";

// 首页、more页面共享一个store中的数据
// inject的作用是将数据注册到组件
export default
@inject("store")
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { store } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          {/* this.props.store.xxx:这个就是如何使用数据源中的值 */}
          <div>职位：{store.department}</div>
          <div>count:{store.count}</div>
          <button
            onClick={() => {
              // 修改数据源操作
              this.props.store.changeDepartment("产品经理");
            }}
          >
            click me
          </button>

          <button
            onClick={() => {
              this.props.history.push("/more");
            }}
          >
            跳转页面
          </button>
        </header>
      </div>
    );
  }
}
