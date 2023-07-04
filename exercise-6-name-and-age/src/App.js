import AddUser from "./components/AddUser/AddUser";
import styles from "./App.module.css";
import { useState } from "react";
import ListItem from "./components/ListItem/ListItem";
function App() {
  const [users, setUsers] = useState([]);
  const addUser = (newUser) => {
    setUsers(prevUsersList=>[...prevUsersList, newUser])
  }
  return (
    <main className={styles.main}>
      <AddUser onAddUser={addUser}/>
      {users.map((user, index)=><ListItem key={index} user={user}/>)}
    </main>
  );
}

export default App;
