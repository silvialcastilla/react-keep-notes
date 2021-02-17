import ArchivePage from "../pages/ArchivePage/ArchivePage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import RemindersPage from "../pages/RemindersPage/RemindersPage";
import TrashPage from "../pages/TrashPage/TrashPage";



const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/login",
    component: LoginPage,
    exact: false,
  },
  {
    path: "/register",
    component: RegisterPage,
    exact: false,
  },
  {
    path: "/reminders",
    component: RemindersPage,
    exact: false,
  },
  {
    path: "/archive",
    component: ArchivePage,
    exact: false,
  },
  {
    path: "/trash",
    component: TrashPage,
    exact: false,
  }
];

export default routes;