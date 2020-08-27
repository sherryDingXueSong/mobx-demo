import { observable, action, computed } from "mobx";

class UserStore {
  /** 未被监听的属性 */
  _name;
  get name() {
    return this._name;
  }

  // 被监听的属性
  @observable
  department = "Software development";

  @observable
  count = 0;

  @computed
  get multi() {
    return this.count * this.count;
  }

  constructor() {
    this._name = "fuyu";
  }
  /** 未被监听的属性可以直接进行修改 */
  set name(val) {
    this._name = val;
  }

  /** 已经被监听的属性需要通过发送action来更改 */
  @action
  changeDepartment(value) {
    this.department = value;
  }

  @action changeCount() {
    this.count++;
  }
}

export default new UserStore();
