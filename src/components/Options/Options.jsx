const Options = ({ onFeedback, onReset, total }) => {

    return (
        <ul>
            <button onClick={() => onFeedback('good')}>Good</button>
            <button onClick={() => onFeedback('neutral')}>Neutral</button>
            <button onClick={() => onFeedback('bad')}>Bad</button>

            {total > 0 ? <button onClick={onReset} >Reset</button> : <></>}

        </ul>
    )


}

export default Options;