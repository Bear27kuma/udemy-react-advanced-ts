import axios from 'axios';
import { UserCard } from './components/UserCard';
import { User } from './types/api/user';
import { useState } from 'react';
import { UserProfile } from './types/userProfile';

const user = {
  id: 1,
  name: 'Yuta',
  email: '1213@example.com',
  address: 'ADDRESS'
};

export default function App() {
  const [userProfileList, setUserProfileList] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchUser = () => {
    setLoading(true);
    setError(false);

    axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users').then((res) => {
      const userData = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city} ${user.address.suite} ${user.address.street}`
      }));
      setUserProfileList(userData);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br/>
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfileList.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
