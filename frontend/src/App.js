import './style/app.scss';
import Header from './components/Header'
import ReadingList from './components/ReadingList'
import ListOptions from './components/ListOptions'
import Footer from './components/Footer'
import { useState, useEffect } from 'react';

function App() {

  const [bookList, setBookList] = useState([]);
  
  useEffect(() => {
  },[]);


  return (
    <div className="app">
      <Header/>
      <ListOptions />
      <ReadingList/>
      <Footer />
    </div>
  );
}

export default App;
