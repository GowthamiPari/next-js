import React, { useState, useEffect }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGlobe,faEye, faDownload, faUpload,faRedo, faUser } from '@fortawesome/free-solid-svg-icons';
import otherStatsData from '../../public/Json/otherStats.json';

type StatsData = {
    Checks: { Passed: string; Failed: string };
    Iterations: { Total: string; Rate: string };
    VirtualUsers: { Min: string; Max: string };
    Requests: { Total: string; Rate: string };
    DataReceived: { Total: string; Rate: string };
    DataSent: { Total: string; Rate: string };
};

type StatBox = {
    title: string;
    icon: IconDefinition;
    values: { label: string; value: string }[];
};

//function OtherStatsTab() {
    const OtherStatsTab: React.FC = () =>  {
    const [data, setData] = useState<StatsData | null>(null);

    useEffect(() => { 
        setData(otherStatsData.otherStats);
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const Boxx: React.FC<StatBox> = ({ title, icon, values }) => (
        <div className="boxx">
            <span className="icon"><FontAwesomeIcon icon={icon} size="2x" /></span>
            <div className='text-Overlay'>
            <h3>{title}</h3>
            {values.map((value, index) => (
                <div key={index}>
                    <strong>{value.label}:</strong> {value.value}
                </div>
            ))}
            </div>
        </div>
    );
    const iconMapping: { [key: string]: IconDefinition } = {
        Checks: faEye,
        Iterations: faRedo,
        VirtualUsers: faUser,
        Requests: faGlobe,
        DataReceived: faDownload,
        DataSent: faUpload,
    };

    const boxesData: StatBox[] = Object.entries(data).map(([key, value]) => {
        return {
            title: key,
            icon: iconMapping[key],
            values: Object.entries(value).map(([label, value]) => ({
                label: label,
                value: typeof value === 'string' ? value : `${value}`, // Assuming value is a string or a number
            })),
        };
    });

    return (
        <div className="other-stats">
            <div className="other-stats-boxes">
                {boxesData.map((item, index) => (
                    <Boxx key={index} title={item.title} icon={item.icon} values={item.values} />
                ))}
            </div>
        </div>
    );
}

export default OtherStatsTab;

