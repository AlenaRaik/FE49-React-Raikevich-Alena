
import './App.css';
import { Title } from './ui/title/title';
import { Menu } from './ui/header/menu';
import { postCardModels } from './arrayData';
import { BigCard } from './ui/cards/big-card';
import { MiddleCard } from './ui/cards/middle-card';
import { SmallCard } from './ui/cards/small-card';

function App() {
  return (
    <div className="App">
      <Title>Sign In</Title>
      <Menu />
        <BigCard postCard={postCardModels[0]}></BigCard>
        <MiddleCard postCard={postCardModels[1]}></MiddleCard>
        <SmallCard postCard={postCardModels[2]}></SmallCard>
    </div>
  );
}

export default App;
