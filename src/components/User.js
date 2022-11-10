import Avatar from "./Avatar";
import Button from "./Button";
import Posts from "./Posts";
import "./User.css";

function User(props) {
  return (
    <>
      {props.users.map((person) => (
        <>
          <div className="user-list">
            <Avatar img={person.avatar} />
            <div>{person.user}</div>
            <Button />
          </div>
          <Posts author={person.user} text={person.post} />
        </>
      ))}
    </>
  );
}

export default User;
