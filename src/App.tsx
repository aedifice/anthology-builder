import StoryForm from './components/StoryForm';
import StoryList from './components/StoryList';
import { StoryProps } from './components/Story';
import { useState } from 'react';
import './App.css';

function App() {
  const [stories, setStories]: [StoryProps[], Function] = useState([]);

  function addStory(storyTitle: string) {
    const newStory: StoryProps = {title: storyTitle, author: 'temp', length: 1200};
    setStories((stories: StoryProps[]) => [...stories, newStory]);
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
