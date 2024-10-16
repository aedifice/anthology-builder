import Story, { StoryProps } from './Story';

function StoryList(props: {data: StoryProps[]}) {
    const stories = props.data;

    function display() {
        if (stories.length > 0) {
            return (
                <ul>
                    {stories.map((story: StoryProps) =>
                        (<Story 
                            title={story.title}
                            author={story.author}
                            length={story.length} 
                        />)
                    )}
                </ul>
            );
        } else {
            return(<h1>No stories in anthology yet</h1>);
        }
    }

    return(
        <div>
            {display()}
        </div>
    );
}

export default StoryList;
