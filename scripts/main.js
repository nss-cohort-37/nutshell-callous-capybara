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
import { eventComponent } from "./events/EventsForm.js";
import { eventListComponent } from "./events/EventsList.js";
import { getEvents } from "./events/EventsDP.js";
import { messageComponent } from "./message/MessageForm.js";
import { getMessages } from "./message/MessageDP.js";
import { messageListComponent } from "./message/MessageList.js";

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
.then(getEvents)
.then(eventComponent)
.then(eventListComponent)
.then(getMessages)
.then(messageComponent)
.then(messageListComponent)


