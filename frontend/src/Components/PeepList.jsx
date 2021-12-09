import Peep from "./Peep";
import "./css/PeepList.css";

const PeepList = ({ peeps }) => {

    const peepsList = peeps.map(currentPeep => {
        return (
            <li key={currentPeep.id}><Peep peep={currentPeep} /></li>
        );
    })

    return (
        <ul data-testid="list">
            {peepsList}
        </ul>
    );
};

export default PeepList;