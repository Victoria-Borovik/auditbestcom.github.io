import { useTranslation } from 'react-i18next';
import Header from './Header.jsx'

import './App.css';

const App = () => {
  const { t } = useTranslation();
  
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
