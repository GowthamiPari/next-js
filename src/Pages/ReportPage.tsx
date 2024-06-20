"use client";
import { faGlobe, faEye, faChartBar, faTimes, faClock, faChartLine,faCheckSquare, faMountain } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGlobe, faEye, faChartBar, faTimes, faClock, faChartLine, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import summaryData from '../../public/Json/summaryData.json';
import ReqMetrics from '../Pages/ReqMetric';
import OtherStatsTab from '../Pages/OtherStatsTab';
import Box from '../Components/Box';
import Groups from '../Pages/Groups';
import TabButton from '../Components/TabButton';

type SummaryData = {
  totalRequests: string;
  failedRequests: string;
  breachedThresholds: string;
  failedChecks: string;
  boxes: { title: string; icon: string; valueKey: string }[];
  tabs: { key: string; icon: string; label: string }[];
};

const iconMapping = {
  faGlobe: faGlobe,
  faEye: faEye,
  faChartBar: faChartBar,
  faTimes: faTimes,
  faClock: faClock,
  faChartLine: faChartLine,
  faCheckSquare: faCheckSquare
};
const Header: React.FC = () => {
  const currentTime = new Date();
  return (
    <header className="App-header">
      <h2 id='header-name'>
        <span><FontAwesomeIcon icon={faMountain} /></span> 
        K6 Load Test: {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
      </h2>
    </header>
  );
};

const ReportPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('');
  const [data, setData] = useState<SummaryData | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    setData(summaryData as SummaryData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const boxes = [];
  for (let i = 0; i < data.boxes.length; i++) {
    const box = data.boxes[i];
    boxes.push(
      <Box
        key={box.title}
        title={box.title}
        icon={iconMapping[box.icon as keyof typeof iconMapping]}
        value={data[box.valueKey as keyof SummaryData]as string}
      />
    );
  }

  const tabs = [];
  for (let i = 0; i < data.tabs.length; i++) {
    const tab = data.tabs[i];
    tabs.push(
      <TabButton
        key={tab.key}
        isActive={activeTab === tab.key}
        icon={iconMapping[tab.icon as keyof typeof iconMapping]}
        label={tab.label}
        onClick={() => handleTabClick(tab.key)}
      />
    );
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="boxes">
          {boxes}
        </div>
        <div className="tabs">
          {tabs}
        </div>
        {activeTab === 'requestMetrics' && <ReqMetrics />}
        {activeTab === 'otherStats' && <OtherStatsTab />}
        {activeTab === 'checksGroups' && <Groups />}
      </div>
    </div>
  );
};

export default ReportPage;









