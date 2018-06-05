import {Login} from "./pages/login/login.component";
import {List} from "./pages/list/list.component";
export const routes = [
    {path: "",component:Login},
    {path:"list", component:List}
];

export const navigatableComponents = [
    Login,
    List
];