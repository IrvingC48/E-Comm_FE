import Header from './components/Header/Header';
import './styles/App.scss';

//Context
import ProfileContext from './context/Profile/ProfileState';

function App() {
  return (
    <>
      <ProfileContext>
        <Header />
      </ProfileContext>
    </>
  );
}

export default App;
