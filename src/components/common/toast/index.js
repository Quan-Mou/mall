import Vue from "vue";
import Toast from "./Toast";
const obj = {};
// obj.install = function() {
//     console.log("a");
// };

// 默认会传入 Vue实例
obj.install = function() {
    // 1. 创建组件构造器
    let toastConstructor = Vue.extend(Toast);
    // console.log(toastConstructor);
    // 2. new的方式 根据组件构造器 可以创建一个vue组件对象
    let toast = new toastConstructor();
    // console.log(toast);
    //3. 把组件对象，手动的挂载到 某一个元素上
    toast.$mount(document.createElement("div"));
    // 4. 把 组件内的元素添加到 body里面 toast.$el 对应的元素就是div
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast = toast;
};

export default obj;
