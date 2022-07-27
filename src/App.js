import './App.css';
import { UserInfo } from './UserInfo';
import { UserInfoForm } from './UserInfoForm';
import { withUser } from './WithUser';


// Modifying data with higher order components
const UserInfoWithLoader = withUser(UserInfo, '234')

function App() {
  return (
    <>
        <UserInfoForm />
    </>
  );
}

export default App;
