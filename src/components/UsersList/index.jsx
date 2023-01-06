import { Component } from "react";
import UsersListItem from "./UsersListItem";
import "./UsersList.css";

const usersData = [
  {
    id: 1,
    firstName: "Timo",
    lastName: "Timochin",
    link: "@timoha",
    imgSrc:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isMale: true,
    age: 24,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Dou",
    link: "@JohnSnow",
    imgSrc:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isMale: true,
    age: 22,
  },
  {
    id: 3,
    firstName: "Jane",
    lastName: "Dou",
    link: "@dudu",
    imgSrc:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    isMale: false,
    age: 20,
  },
  {
    id: 4,
    firstName: "Nika",
    lastName: "Robin",
    link: "@OnePiece",
    imgSrc:
      "https://images.pexels.com/photos/1031081/pexels-photo-1031081.jpeg",
    isMale: false,
    age: 21,
  },
];

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersData.map((u) => ({ ...u, isSelected: false })),
    };
  }

  selectUser = (id) => {
    const { users } = this.state;
    const foundIndex = users.findIndex((u) => u.id === id);

    const newUsers = [...users];
    newUsers[foundIndex] = {
      ...newUsers[foundIndex],
      isSelected: !newUsers[foundIndex].isSelected,
    };

    this.setState({ users: newUsers });
  };

  mapUser = (u) => {
    return <UsersListItem key={u.id} user={u} selectUser={this.selectUser} />;
  };

  render() {
    const { users } = this.state;

    return <ul>{users.map(this.mapUser)}</ul>;
  }
}

export default UsersList;
