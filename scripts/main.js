// get functions, list functions
import { loginComponent } from "./login/LoginForm.js";
import { LoginList } from "./login/LoginList.js";
import { getUsers } from "./login/LoginDP.js";


getUsers()
.then(loginComponent)
.then(LoginList)

