import React, { useState } from "react";
import "./user.css";
import { UserData } from "../../UsersData/Users";
import Profile from "../Profile/Profile";
import Count from "../Count/Count";

const User = () => {
  let btnText = "";
  const getUsers = UserData;
  const [users, setUser] = useState(getUsers);

  const [count, setCount] = useState([]);

  const handleAddFriend = user => {
    user.isClicked = true;
    const total = [...count, user];
    setCount(total);
  };

  return (
    <div className="user">
      <div className="container">
        <div className="row">
          <div className="col-md-9 user-profiles">
            <div className="user-profile">
              {users.map(user => (
                <Profile
                  user={user}
                  handleAddFriend={handleAddFriend}
                  isClicked={false}
                  btnText="Add Friend"
                  changeText={() => (btnText = "added")}
                />
              ))}
            </div>
          </div>
          <div className="col-md-3 user-cal">
            <Count count={count} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
