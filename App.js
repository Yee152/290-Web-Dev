import './App.css';
import Greeting from './Greeting';
import BookList from './BookList';
import books from './data/books.js';

function App() {
  const name = "Nauman";
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name={name} time={Date()}></Greeting>
        <BookList books={books}></BookList>
      </header>
    </div>
  );
}

export default App;