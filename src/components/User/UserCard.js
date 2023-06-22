import profile from "./profile.png";
const UserCard = (props) => {
  {
    if (props.visibility) {
      return (
        <>
          <div className="profileDiv">
            <img src={profile} />
          </div>
          <div className="details">
            <h4>
              Name : <span>{props.singleData.name.toUpperCase()}</span>
            </h4>
            <h4>
              Email : <span>{props.singleData.email}</span>
            </h4>
            <h4>
              Phone No : <span>{props.singleData.contact}</span>
            </h4>
          </div>
        </>
      );
    }
  }
};
export default UserCard;
