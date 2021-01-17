import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Todo from "@/pages/Todo.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/todo",
    children: [
      {
        path: "todo",
        name: "Todo List",
        component: Todo
      }
    ]
  }
];

export default routes;
