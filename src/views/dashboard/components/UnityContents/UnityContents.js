import React from 'react';
import DashboardCard from '../../../../components/shared/DashboardCard';
import './UnityContents.css';
import { Link} from 'react-router-dom';

const Unity = () => {

    return (
        <div>
            <DashboardCard title="Unity Contents">
                <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px' }}>
                    <Link to="/doorlock">
                        <button className="image-button">
                            <img src={require("./DoorLock.png")} alt="Button 1" />
                        </button>
                    </Link>
                    <Link to="/nback">
                        <button className="image-button">
                            <img src={require("./Nback.png")} alt="Button 2" />
                        </button>
                    </Link>
                    <Link to="/hammering">
                        <button className="image-button">
                            <img src={require("./Hammering.png")} alt="Button 3" />
                        </button>
                    </Link>
                    <Link to="/simon">
                        <button className="image-button">
                            <img src={require("./Simon.png")} alt="Button 4" />
                        </button>
                    </Link>
                    <Link to="/trafficlight">
                        <button className="image-button">
                            <img src={require("./TrafficLight.png")} alt="Button 5" />
                        </button>
                    </Link>
                    <Link to="/puzzle">
                        <button className="image-button">
                            <img src={require("./Puzzle.png")} alt="Button 6" />
                        </button>
                    </Link>
                </div>
            </DashboardCard>
        </div>
    );

};

export default Unity;