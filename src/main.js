import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Layout, Menu, Icon,Button,Form,Input,Checkbox, Dropdown, Avatar, Badge, Table,

  Card, Popconfirm,Radio,DatePicker,TimePicker,Select,Divider,Cascader, List, Modal,
<<<<<<< HEAD

    Row,Col,message,Tabs,Timeline,
=======
    Skeleton,
    Row,Col,message
>>>>>>> 244a67b25196c9dde671889a3533a49e15c85250

} from "ant-design-vue";

Vue.prototype.$message = message;
message.config({
  duration: 1,
});

Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Dropdown);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(Table);
Vue.use(Card);
Vue.use(Popconfirm);
Vue.use(Radio);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Select);
Vue.use(Divider);
Vue.use(Cascader);
Vue.use(List);
Vue.use(Modal);
Vue.use(Row);
Vue.use(Col);
<<<<<<< HEAD
Vue.use(Tabs);
Vue.use(Timeline);
=======
Vue.use(Skeleton);
>>>>>>> 244a67b25196c9dde671889a3533a49e15c85250


import PermissionPlugin from './dicrectives/permission';

Vue.config.productionTip = false;

Vue.use(PermissionPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
