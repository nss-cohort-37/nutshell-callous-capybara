// get functions, list functions
import { loginComponent } from "./login/LoginForm.js";
import { LoginList } from "./login/LoginList.js";
import { getUsers } from "./login/LoginDP.js";
import { articleComponent } from "./news/NewsForm.js";
import { getNews } from "./news/NewsDP.js";
import { newsListComponent } from "./news/NewsList.js";
import { getFriends } from "./friends/FriendsDP.js";
import { taskComponent } from "./tasks/TasksForm.js";
import { getTasks } from "./tasks/TasksDP.js";
import { taskListComponent } from "./tasks/TasksList.js";

getUsers()
.then(loginComponent)
.then(LoginList)
.then(getNews)
.then(getFriends)
.then(newsListComponent)
.then(articleComponent)
.then(getTasks)
.then(taskComponent)
.then(taskListComponent)


