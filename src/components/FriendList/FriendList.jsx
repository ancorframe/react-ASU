import { FriendItem } from './FriendItem';
import  PropTypes  from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friends => {
        return <FriendItem key={friends.id} friends={friends} />;
      })}
    </ul>
  );
};


// FriendList.propTypes = {
//   friends; PropTypes.shape({

//   })
// };