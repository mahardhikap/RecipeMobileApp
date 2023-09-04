import { combineReducers } from "redux";
import loginUser from "./loginUser";
import getMenuUser from "./getMenuUser";
import postMenu from "./postMenu";
import deleteMenu from "./deleteMenu";
import editMenu from "./editMenu";
import getMenuById from "./getMenuById";
import editProfile from "./editProfile";
import getAllMenu from "./getAllMenu";

const rootReducers = combineReducers({
    loginUser,
    getMenuUser,
    postMenu,
    deleteMenu,
    editMenu,
    getMenuById,
    editProfile,
    getAllMenu
})

export default rootReducers