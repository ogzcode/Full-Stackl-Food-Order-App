import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Landing",
      component: () => import("@/views/landing/LandingPage.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("@/views/admin/AdminPage.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "",
          name: "AdminHome",
          redirect: { name: "Orders"},
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "orders",
          name: "Orders",
          component: () => import("@/views/admin/Orders.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "products",
          name: "Products",
          component: () => import("@/views/admin/Menus.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "users",
          name: "Users",
          component: () => import("@/views/admin/Users.vue"),
          meta: {
            requiresAuth: true,
          },
        },
      ]
    },
    {
      path: "/user",
      name: "User",
      component: () => import("@/views/user/UserPage.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "",
          name: "UserHome",
          redirect: { name: "UserProducts"},
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "products",
          name: "UserProducts",
          component: () => import("@/views/user/Products.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "old-orders",
          name: "OldOrders",
          component: () => import("@/views/user/OldOrders.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "settings",
          name: "Settings",
          component: () => import("@/views/user/UserSettings.vue"),
          meta: {
            requiresAuth: true,
          },
        }
      ]
    }
  ]
})

export default router
