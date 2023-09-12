
import './App.css';
import { Title } from './ui/title/title';
import { Menu } from './ui/header/menu';
import { cardArray } from './arrayData';
import { ListCard } from './ui/list_posts/list-posts';

function App() {
  return (
    <div className="App">
      <Title>Sign In</Title>
      <Menu />
        <ListCard value={cardArray}></ListCard>
    </div>
  );
}

export default App;
