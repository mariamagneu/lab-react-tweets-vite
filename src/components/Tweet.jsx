import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User
            name={tweet.user.name}
            handle={tweet.user.handle}
            className="user"
          />
          <Timestamp timestamp={tweet.timestamp} />
        </div>
        <Message message={tweet.message} />
      </div>
      <Actions />
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
