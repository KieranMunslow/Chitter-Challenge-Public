import Peep from "./Peep";
import "./css/PeepList.css";
import { useEffect, useState } from "react";
const axios = require('axios');

const PeepList = ({ peeps }) => {
    const [peepsList, setPeepsList] = useState([]);

    useEffect(() => {

        const getPeeps = async () => {
            axios.get(`http://localhost:4000/addPeep`)
                .then((response) => {
                    // console.log(response.data);
                    setPeepsList(response.data);
                });
        }
        getPeeps();
    }, [])

    // const peepsList1 = peepsList.map(currentPeep => {
    //     console.log(currentPeep._id);

    //     return (
    //         <li key={currentPeep._id}><Peep peep={currentPeep} /></li>
    //     );
    // })

    console.log(peeps);
    console.log(peepsList);
    const peepsList1 = peepsList.map(currentPeep => {
        console.log(currentPeep.name)
        return (
            <li key={currentPeep._id}><Peep peep={currentPeep} /></li>
        );
    })

    return (
        <ul data-testid="list">
            {peepsList1}
        </ul>
    );
};

export default PeepList;