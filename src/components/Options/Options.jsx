import s from "./Options.module.css";


const Options = ({ onFeedback, onReset, total }) => {

    return (
        <ul className={s.wrapper}>
            <button className={s.btn} onClick={() => onFeedback('good')}>Good</button>
            <button className={s.btn} onClick={() => onFeedback('neutral')}>Neutral</button>
            <button className={s.btn} onClick={() => onFeedback('bad')}>Bad</button>

            {total > 0 ? <button className={s.btn} onClick={onReset} >Reset</button> : <></>}

        </ul>
    )


}

export default Options;