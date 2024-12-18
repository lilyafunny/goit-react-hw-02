const Feedback = ({ good, neutral, bad, total, positive }) => {



    return (
        <ul>

            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{total}</p>
            <p>Positive:{positive}</p>

        </ul>
    )

}

export default Feedback;