// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import { faAngleDown, faAngleUp, faCheckCircle, faDesktop, faExclamationCircle, faMobile, faTags} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';
// import { faWindows, faFirefox } from '@fortawesome/free-brands-svg-icons';
// import Tooltip from '@mui/material/Tooltip';


// type FeaturesOverviewRow = {
//     FeatureName: string;
//     Tag: string;
//     Status: string;
//     Device: string;
//     OS: string;
//     Browser: string;
//     Total: number;
//     Passed: number;
//     Failed: number;
//   };
  

// type FeaturesOverviewProps = {
//     featuresOverviewData: FeaturesOverviewRow[];
// };

// const FeaturesOverview: React.FC<FeaturesOverviewProps> = ({ featuresOverviewData }) => {
//     const [expandedBox, setExpandedBox] = useState(true); // Set initial state to expanded

//     const toggleBox = () => {
//       setExpandedBox(!expandedBox);
//     };
//   const properties = Object.keys(featuresOverviewData[0]);

//   return (
//     <div className=" flex relative mb-2.5 bg-white border border-gray-300 w-full ">
//     <div className="flex w-full mb-5">
//       <div className="flex-1">
//     <h2 className="text-2xl fontweight-400 text-[#73879C]">Features Overview</h2>
//     <hr className="mb-2" />
//     <div className={`index-box-content ${expandedBox ? 'block' : 'hidden'} transition-height duration-300 ease-in-out overflow-hidden`}>
//     <div className='w-full bg-white'>
//     <table className='w-full bg-white border border-gray-300 px-2'>
//       <thead className='bg-gray-100 text-[#73879C] text-left'>
//         <tr className='bg-#f2f2f2 w-full px-2 border'>
//           {properties.map(prop => (
//           <th key={prop}>
//           {prop === 'icon' && <div><FontAwesomeIcon className="text-[#73879C]" icon={faDesktop} />&nbsp;<FontAwesomeIcon className="text-[#73879C]" icon={faMobile}/> </div>}
//           {prop === 'Tag' && <div><FontAwesomeIcon className="text-[#73879C]" icon={faTags}/>&nbsp;</div>}
//           {prop !== 'icon' && prop !== 'Tag' && prop}
//           </th>
// ))}
//         </tr>
//       </thead>
//       <tbody>
//         {featuresOverviewData.map((row, rowIndex) => (
//           <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
//             <td className='text-sm text-[#337ab7] mb-2 p-2 border'><a  className="hover:underline" href="">{row.FeatureName}</a></td>
//             <td className='text-sm text-[#73879C] mb-2 border text-center'><Tooltip title={row.Tag}><FontAwesomeIcon className="text-[#73879C]" icon={faTags}/></Tooltip></td>
//             <td className='text-sm text-[#73879C] mb-2 border text-center'>{row.Failed > 0 ? <FontAwesomeIcon className="text-red-500 " icon={faExclamationCircle}/> :<FontAwesomeIcon className="text-[#1ABB9C] " icon={faCheckCircle} />}&nbsp;
//         </td>
//             <td className='text-sm text-[#73879C] mb-2 border text-center'><FontAwesomeIcon className="text-[#73879C]" icon={faDesktop} />&nbsp;</td>
//             <td className='text-sm text-[#73879C] mb-2 border text-center'>{row.Device}</td>
//             <td className='text-sm text-[#73879C] mb-2 border'> <FontAwesomeIcon className="text-[#73879C]" icon={faWindows} />&nbsp;{row.OS}</td>
//             <td className='text-sm text-[#73879C] mb-2 border'><FontAwesomeIcon className="text-[#73879C]" icon={faFirefox} />&nbsp;{row.Browser}</td>
//             <td className='text-sm text-[#73879C] mb-2 border text-end'>{row.Total}</td>
//             <td className='text-sm text-[#73879C] mb-2 border text-end'>{row.Passed}</td>
//             <td className='text-sm text-[#73879C] mb-2 border text-end'>{row.Failed}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
//     </div>
//     </div>
//     <div className="toggle-box cursor-pointer ml-auto" onClick={toggleBox}>
//           <FontAwesomeIcon icon={expandedBox ? faAngleUp : faAngleDown} />
//         </div>
//     </div>
//     </div>
//   );
// };

// export default FeaturesOverview;

import React, { useState } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp, faCheckCircle, faDesktop, faExclamationCircle, faMobile, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faFirefox } from '@fortawesome/free-brands-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

type FeaturesOverviewRow = {
  FeatureName: string;
  Tag: string;
  Status: string;
  Device: string;
  OS: string;
  Browser: string;
  Total: number;
  Passed: number;
  Failed: number;
};

type FeaturesOverviewProps = {
  featuresOverviewData: FeaturesOverviewRow[];
};

const FeaturesOverview: React.FC<FeaturesOverviewProps> = ({ featuresOverviewData }) => {
  const [expandedBox, setExpandedBox] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const toggleBox = () => {
    setExpandedBox(!expandedBox);
  };

  const handleChangeRowsPerPage = (event: SelectChangeEvent<number>) => {
    setRowsPerPage(event.target.value as number);
  };

  const properties = Object.keys(featuresOverviewData[0]);
  const displayedData = featuresOverviewData.slice(0, rowsPerPage);

  return (
    <div className="flex relative mb-2.5 bg-white border border-gray-300 w-full">
      <div className="flex w-full mb-5">
        <div className="flex-1">
          <h2 className="text-2xl fontweight-400 text-[#73879C]">Features Overview</h2>
          <hr className="mb-2" />
          <div className=' flex justify-between'>
          <div className=" flex  justify-start p-1 text-[#73879C] text-xs">&nbsp;Show&nbsp;
            <Select className='text-xs'
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              displayEmpty
              sx={{ minWidth: 60, height: 24, fontSize: '0.75rem', padding: 0 }}
            >
              <MenuItem className='text-[#555] text-xs pt-0 pb-0.5' value={5}>5</MenuItem>
              <MenuItem value={10} className='text-[#555] text-xs pt-0 pb-0.5' >10</MenuItem>
              <MenuItem value={20} className='text-[#555] text-xs pt-0 pb-0.5'>50</MenuItem>
              <MenuItem value={50} className='text-[#555] text-xs pt-0 pb-0.5'>100</MenuItem>
              <MenuItem value={100} className='text-[#555] text-xs pt-0 pb-0.5'>150</MenuItem>
              <MenuItem value={featuresOverviewData.length} className='text-[#555] text-xs'>All</MenuItem>
            </Select>&nbsp;entries
          </div>
          <label className='text-xs text-[#73879C]'>Search: &nbsp;
          <input type='search' placeholder='' className=' bg-white border justify-end border-gray-300 px-2 h-7 text-xs'/>
          </label>
          </div>
          <div className={`index-box-content ${expandedBox ? 'block' : 'hidden'} transition-height duration-300 ease-in-out overflow-hidden`}>
            <div className='w-full bg-white'>
              <table className='w-full bg-white border border-gray-300 px-2'>
                <thead className='bg-gray-100 text-[#73879C] text-left'>
                  <tr className='bg-#f2f2f2 w-full px-2 border'>
                    {properties.map(prop => (
                      <th className='p-2' key={prop}>
                        {prop === 'icon' && (
                          <div>
                            <FontAwesomeIcon className="text-[#73879C]" icon={faDesktop} />
                            &nbsp;
                            <FontAwesomeIcon className="text-[#73879C]" icon={faMobile} />
                          </div>
                        )}
                        {prop === 'Tag' && (
                          <div>
                            <FontAwesomeIcon className="text-[#73879C]" icon={faTags} />
                            &nbsp;
                          </div>
                        )}
                        {prop !== 'icon' && prop !== 'Tag' && prop}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {displayedData.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                      <td className='text-sm text-[#337ab7] mb-2 p-2 border'>
                        <a className="hover:underline" href="">{row.FeatureName}</a>
                      </td>
                      <td className='text-sm text-[#73879C] mb-2 border text-center'>
                        <Tooltip title={row.Tag}>
                          <FontAwesomeIcon className="text-[#73879C]" icon={faTags} />
                        </Tooltip>
                      </td>
                      <td className='text-sm text-[#73879C] mb-2 border text-center'>
                        {row.Failed > 0 ? (
                          <FontAwesomeIcon className="text-red-500" icon={faExclamationCircle} />
                        ) : (
                          <FontAwesomeIcon className="text-[#1ABB9C]" icon={faCheckCircle} />
                        )}
                        &nbsp;
                      </td>
                      <td className='text-sm text-[#73879C] mb-2 border text-center'>
                        <FontAwesomeIcon className="text-[#73879C]" icon={faDesktop} />
                        &nbsp;
                      </td>
                      <td className='text-sm text-[#73879C] mb-2 border text-center'>{row.Device}</td>
                      <td className='text-sm text-[#73879C] mb-2 border'>
                        <FontAwesomeIcon className="text-[#73879C]" icon={faWindows} />
                        &nbsp;{row.OS}
                      </td>
                      <td className='text-sm text-[#73879C] mb-2 border'>
                        <FontAwesomeIcon className="text-[#73879C]" icon={faFirefox} />
                        &nbsp;{row.Browser}
                      </td>
                      <td className='text-sm text-[#73879C] mb-2 border text-end'>{row.Total}</td>
                      <td className='text-sm text-[#73879C] mb-2 border text-end'>{row.Passed}</td>
                      <td className='text-sm text-[#73879C] mb-2 border text-end'>{row.Failed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="toggle-box cursor-pointer ml-auto" onClick={toggleBox}>
          <FontAwesomeIcon icon={expandedBox ? faAngleUp : faAngleDown} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesOverview;
