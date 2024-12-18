import s from "./Feedback.module.css"

const Feedback = ({ good, neutral, bad, total, positive }) => {



    return (
        <ul className={ s.wrapper}>

            <p className={ s.txt}>Good:{good}</p>
            <p className={s.txt}>Neutral:{neutral}</p>
            <p className={s.txt}>Bad:{bad}</p>
            <p className={s.txt}>Total:{total}</p>
            <p className={s.txt}>Positive:{positive}</p>

        </ul>
    )

}

export default Feedback;