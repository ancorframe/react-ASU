import { SocialProfile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../user';
import data from '../data';
import friends from '../friends';
import transaction from '../transactions';
import { Box } from './Box';

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="#d3dbe2"
      gridGap={5}
      pt={5}
    >
      <SocialProfile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </Box>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
