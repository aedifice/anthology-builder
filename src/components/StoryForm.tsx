import { useState } from "react";
import './StoryStyles.css';

function StoryForm(props: any) {
    const [storyTitle, setStoryTitle] = useState('');

    function updateTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setStoryTitle(e.target.value);
    }

    function addStory(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        props.saveStory(storyTitle);
        setStoryTitle('');
    }

    return (
        <form className='story-form' onSubmit={addStory}>
            <input type="text"
                value={storyTitle}
                onChange={updateTitle}
                required
            />
            <button type="submit">Add Story</button>
        </form>
    );
}

export default StoryForm;
