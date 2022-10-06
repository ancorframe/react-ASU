import PropTypes from 'prop-types';
import { Box } from '../Box';
import { ProfileStats } from './ProfileStats';
import { Stats, Img } from './Profile.styled';

export const SocialProfile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Box borderRadius={4} bg="white" boxShadow="medium">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={5}
        gridGap={3}
        pt={4}
        height={200}
      >
        <Img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </Box>
      <Stats>
        <ProfileStats text="Followers" props={followers} />
        <ProfileStats text="Views" props={views} />
        <ProfileStats text="Likes" props={likes} />
      </Stats>
    </Box>
  );
};

SocialProfile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
