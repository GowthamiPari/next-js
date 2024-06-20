import { useState, useEffect } from 'react';
import CheckTable from '../Components/CheckTable';
import ChecksAndGroupData from '../../public/Json/checksGroups.json';

type Group = {
  name: string;
  checks: { CheckName: string; [key: string]: string | number }[];
};

function renderChecks(jsonData: { groups?: Group[]; otherChecks?: {name: string; checks: any[] } } | null) {
  if (!jsonData) {
    return <div>Loading...</div>;
  }

  if (jsonData.groups && jsonData.otherChecks) {
    return <>
      {jsonData.groups.map((group: Group, index: number) => (
      <div key={index}>
        &nbsp;&nbsp;<li className='group-name'>{group.name}</li>
        <hr style={{ margin: '20px 0' }} />
        <CheckTable checks={group.checks} />
      </div>
    ))};
      <div>
      &nbsp;&nbsp;<li className='group-name'>{jsonData.otherChecks.name}</li>
      <hr style={{ margin: '20px 0' }} />
      <CheckTable checks={jsonData.otherChecks.checks} />
    </div>
    </>
    
  }
  
}

function Groups() {
  const [jsonData, setJsonData] = useState<{ groups?: Group[]; otherChecks?: { name : string; checks: any[] } } | null>(null);

  useEffect(() => {
    setJsonData(ChecksAndGroupData);
  }, []);

  return (
    <div>
      {renderChecks(jsonData)}
    </div>
  );
}

export default Groups;

