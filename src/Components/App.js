import React from "react";
import data from "../data";
import FriendList from "./friendList/FriendList";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import TransactionHistory from "./transaction/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile user={data.user} />
      <Statistics title='Upload stats' stats={data.statistic} />
      <FriendList friends={data.friends}/>
      <TransactionHistory items={data.transactions} />
    </>
  );
};

export default App;
