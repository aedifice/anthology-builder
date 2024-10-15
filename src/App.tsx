import StoryForm from './components/StoryForm';
import StoryList from './components/StoryList';
import { useState } from 'react';
import './App.css';

function App() {
  const [stories, setStories]: [string[], Function] = useState([]);

  function addStory(storyTitle: string) {
    setStories((stories: string[]) => [...stories, storyTitle]);
  }

  return (
    <div className="App">
      <header className="App-header">
        Anthology Builder
      </header>
      <StoryForm saveStory={addStory} />
      <StoryList data={stories} />
    </div>
  );
}

export default App;
