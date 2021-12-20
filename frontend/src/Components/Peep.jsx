import './css/Peep.css'
import FindTime from './utils/FindTime';

const Peep = ({ peep }) => {
    const { name, username, date, message } = peep;
    const dateString = new Date(date);
    const displayDate = FindTime(Date.now() - dateString);
    return (
        <div className="Peep">
            <h2>{name.first} {name.surname}<span> @{username}</span> <span>- {displayDate}</span></h2>
            <h4>{message}</h4>
        </div>
    );
};

export default Peep;