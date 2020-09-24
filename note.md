https://www.youtube.com/watch?v=bRRA-SrNyxg

mern stack to do application

- `npm install boostrap react-hook-form`
- import "bootstrap/dist/css/bootstrap.css" in index.js
- `npm install react-router-dom`
- nest <App/> with <BrowserRouter />

- add <Switch> in App.js and delete App.css
- A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. \*
- <Route exact path="/" component={TodoList} /> you can render component like this!!
- in app.js create route, switch, link
- then make components with just js file
- and import components in App.js

- in createtodo.js import { useForm } from "react-hook-form";
- htmlFor. Since for is a reserved word in JavaScript, React elements use htmlFor instead.
- useForm?react-hook
- use register as ref in input
- import { useHistory } from "react-router-dom" to redirect
- html table tags i did not know that

- add {useState,useEffect} after react import in TodoList.js
- a lot of react hook which i have no idea

- EditTodo.js copied CreateTodo and change titles
- in EditTodo defaultValues: { text: todo ? todo.text : "" }, is not working
- how to fix ?create TOdoForm.js

- CreateTodo.js use TodoFrom and change button name to save Todo
