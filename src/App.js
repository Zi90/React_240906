import './App.css';
import UserList from './component/UserList';
import StoreList from './component/StoreList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      { <UserList /> }
      <br />
      <hr />
      {/* 맛집 리스트 추가 */}
      {/* 월미당(쌀국수집) */}
      { <StoreList />}
    </div>
  );
}

export default App;
