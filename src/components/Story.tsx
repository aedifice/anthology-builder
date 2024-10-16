import './StoryStyles.css';

export type StoryProps = {
    title: string,
    author: string,
    length: number
}

function Story(props: StoryProps) {
    return (
        <div className="story">
            <p>{props.title} by {props.author}</p>
            <p>{props.length} words</p>
        </div>
    );
}

export default Story;
