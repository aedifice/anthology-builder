function StoryList(props: any) {
    const stories = props.data;

    function display() {
        // temporarily provide simple story title display
        // later will hand off each story to the Story component
        if (stories.length > 0) {
            return (
                <p>{stories.join(' | ')}</p>
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
