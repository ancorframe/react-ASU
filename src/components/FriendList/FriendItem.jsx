import { Box } from '../Box';
import { Frienditem, IsOnline } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <Frienditem>
      <Box
        display="flex"
        alignItems="center"
        gridGap={3}
        bg="white"
        boxShadow="medium"
        borderRadius={4}
        width="190px"
        pl={3}
      >
        <IsOnline isOnline={isOnline}></IsOnline>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
      </Box>
    </Frienditem>
  );
};

