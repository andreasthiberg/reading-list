import './style/app.scss';
import Header from './components/Header'
import ReadingList from './components/ReadingList'
import ListOptions from './components/ListOptions'
import Footer from './components/Footer'

function App() {
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
