import React, {useEffect, useState} from 'react';

const App = () => {

    let [mission, setMission] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flight => {
                setMission(flight.filter(flight => flight.launch_year !== '2020'))
            })
    }, [])

    return (
        <div>
            {
                mission.map(value => <div key={value.flight_number}>
                    {value.mission_name},
                    {value.launch_year};
                    <img src={value.links.mission_patch} alt=""/>
                </div>)

            }
        </div>
    );
};

export default App;