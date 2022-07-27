import './App.css';
import { UserInfo } from './UserInfo';
import { UserInfoForm } from './UserInfoForm';
import { withUser } from './WithUser';


// Impoving the higher order component into a reuseable resource component that works with users, products etc
const UserInfoWithLoader = withUser(UserInfo, '234')

function App() {
  return (
    <>
        <UserInfoForm />
    </>
  );
}

export default App;
