import { combineReducers } from "redux";
import loginUser from "./loginUser";
import getMenuUser from "./getMenuUser";
import postMenu from "./postMenu";
import deleteMenu from "./deleteMenu";
import editMenu from "./editMenu";
import getMenuById from "./getMenuById";
import editProfile from "./editProfile";
import getAllMenu from "./getAllMenu";
import register from "./register";
import activateUser from "./activateUser";
import likedMenu from "./likedMenu";
import getLikedMenu from "./getLikedMenu";
import bookmarkedMenu from "./bookmarkedMenu";
import getBookmarkedMenu from "./getBookmarkedMenu";

const rootReducers = combineReducers({
    loginUser,
    getMenuUser,
    postMenu,
    deleteMenu,
    editMenu,
    getMenuById,
    editProfile,
    getAllMenu,
    register,
    activateUser,
    likedMenu,
    getLikedMenu,
    bookmarkedMenu,
    getBookmarkedMenu
})

export default rootReducers