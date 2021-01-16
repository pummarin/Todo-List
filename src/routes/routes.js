import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import UserProfile from "@/pages/UserProfile.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/todo",
    children: [
      {
        path: "todo",
        name: "Todo List",
        component: UserProfile
      }
    ]
  }
];

export default routes;
