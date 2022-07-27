import './App.css';
import { UserInfo } from './UserInfo';
import { withUser } from './WithUser';


// Loading data with higher order components
const UserInfoWithLoader = withUser(UserInfo, '234')

function App() {
  return (
    <>
        <UserInfoWithLoader />
    </>
  );
}

export default App;
