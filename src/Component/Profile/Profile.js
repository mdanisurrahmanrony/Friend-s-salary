import React from "react";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faUser,
  faPhone,
  faDollarSign,
  faFunnelDollar,
  faMoneyCheckAlt,
  faFire,
  faBriefcase,
  faCity,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

const Profile = props => {
  const user = props.user;

  return (
    <div className="profile">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img className="" src={user.image} alt="" />
          </div>
          <div className="col-md-8 profile-desc">
            <div className="row justify-content-between ml-2 mr-2">
              <div>
                <h3 className="user-name pt-2 pb-2">{user.name}</h3>
                <h5 className="user-mail">
                  <b>
                    <FontAwesomeIcon className="text-success" icon={faUser} />
                  </b>{" "}
                  {user.email}
                </h5>
                <h5 className="user-phone">
                  <b>
                    <FontAwesomeIcon className="text-success" icon={faPhone} />
                  </b>{" "}
                  {user.phone}
                </h5>
                <h5 className="user-mail">
                  <b>
                    <FontAwesomeIcon
                      className="text-success"
                      icon={faMoneyCheckAlt}
                    />
                  </b>{" "}
                  ${user.salary}
                </h5>
              </div>
              <div>
                <br />
                <br />

                <h5 className="user-mail">
                  <b>
                    <FontAwesomeIcon className="text-success" icon={faFire} />
                  </b>{" "}
                  {user.website}
                </h5>
                <h5 className="user-phone">
                  <b>
                    <FontAwesomeIcon
                      className="text-success"
                      icon={faBriefcase}
                    />
                  </b>{" "}
                  {user.company.name}
                </h5>
                <h5 className="user-mail">
                  <b>
                    <FontAwesomeIcon className="text-success" icon={faCity} />
                  </b>{" "}
                  {user.address.city}
                </h5>
              </div>
            </div>
            <br />
            {user.isClicked === true ? (
              <button className="add-friend bg-success mb-3" disabled>
                <FontAwesomeIcon icon={faCheck} />
                Added
              </button>
            ) : (
              <button
                className="add-friend mb-3"
                onClick={() => props.handleAddFriend(props.user)}
              >
                <FontAwesomeIcon icon={faUserPlus} /> {props.btnText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
