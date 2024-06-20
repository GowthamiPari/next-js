import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, icon } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp, faCheckCircle,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import PassesAndFails from "../../public/Json/index-html/passesAndFails.json"


type StatusProps = {
  Pass: string;
  Fail: string;
};

type ProgressProps = {
  Passed: string;
  Failed: string;
};

type DataProps = {
  Chart: string;
  Status: StatusProps;
  Progress: ProgressProps;
};

type IndexBoxProps = {
  name: string;
  data?: DataProps;
};

type IndexBoxIcon = {
  icon1: string;
  icon2: string;
};

type IndexBoxData = {
  passAndFailData: IndexBoxProps[];
  icon: IndexBoxIcon;
};

const indexIconMapping = {
  faCheckCircle: faCheckCircle,
  faExclamationCircle: faExclamationCircle,
};

const IndexBox: React.FC<IndexBoxData> = ({ passAndFailData }) => {
  const [scenariosCount, setScenariosCount] = useState(0);
  const [featuresCount, setFeaturesCount] = useState(0);
  const [expandedBoxes, setExpandedBoxes] = useState(-1); 
  
    const toggleBox = (index: number) => {
      if (expandedBoxes === index) {
        setExpandedBoxes(-1);
      } else {
        setExpandedBoxes(index);
      }
    };
  if (!passAndFailData || passAndFailData.length === 0) {
    return <div>No data available</div>;
  }

  const renderTableHeaders = (data: DataProps) => {
    return (
      <tr>
        {Object.keys(data).map((key, index) => (
          <th key={index}>{key}</th>
        ))}
      </tr>
    );
  };
  useEffect(() => {
    // Calculate scenarios and features counts from passAndFailData
    let scenarios = 0;
    let features = 0;

    passAndFailData.forEach((item) => {
      if (item.name === "Scenarios") {
        scenarios++;
      } else if (item.name === "Features") {
        features++;
      }
    });

    setScenariosCount(scenarios);
    setFeaturesCount(features);
  }, [passAndFailData]);
  return (
    <div className="container">
      {passAndFailData.map((item, index) => (
        <div key={index} className="index-box">
           <div className="toggle-box" onClick={() => toggleBox(index)}>
            <FontAwesomeIcon icon={expandedBoxes === index ? faAngleUp : faAngleDown} />
          </div>
          <h2>{item.name}</h2>
          <hr />
          <div className="index-box-content" style={{ display: expandedBoxes === index ? 'block' : 'none' }}>
          {item.data && (
                <>
                  <table>
                  <thead>{renderTableHeaders(item.data)}</thead>
                    <tbody>
                      <tr>
                        <td>{item.data.Chart}</td>
                        <td>
                        <div className="icon-text">
                            <FontAwesomeIcon className='fa fa-check-circle passed-color' icon={indexIconMapping[PassesAndFails.icons.icon1 as keyof typeof indexIconMapping]} size="2x" />&nbsp;
                            <span>{item.data.Status.Pass}</span>
                          </div>
                          <br/>
                          <div className="icon-text">
                            <FontAwesomeIcon className='fa fa-exclamation-circle failed-color' icon={indexIconMapping[PassesAndFails.icons.icon2 as keyof typeof indexIconMapping]} size="2x" />&nbsp;
                            <span>{item.data.Status.Fail}</span>
                          </div>
                        </td>
                        <td>{item.data.Progress.Passed} <br /> <br /> {item.data.Progress.Failed}</td>
                      </tr>
                    </tbody>
                  </table>
                </>
              )}
          </div>
        </div>
      ))}
    </div>
  );

 

























//working
  // return (
  //   <div className="main-container">
  //     <div className="container">
  //       {passAndFailData.map((item, index) => (
  //         <div key={index} className="index-box">
  //           <h2>{item.name}</h2>
  //           <div className="content">
  //             <hr style={{ margin: '20px 0' }} />
  //             {item.data && (
  //               <>
  //                 <table>
  //                 <thead>{renderTableHeaders(item.data)}</thead>
  //                   <tbody>
  //                     <tr>
  //                       <td>{item.data.Chart}</td>
  //                       <td>
  //                       <div className="icon-text">
  //                           <FontAwesomeIcon className='fa fa-check-circle passed-color' icon={indexIconMapping[PassesAndFails.icons.icon1 as keyof typeof indexIconMapping]} size="2x" />&nbsp;
  //                           <span>{item.data.Status.Pass}</span>
  //                         </div>
  //                         <br/>
  //                         <div className="icon-text">
  //                           <FontAwesomeIcon className='fa fa-exclamation-circle failed-color' icon={indexIconMapping[PassesAndFails.icons.icon2 as keyof typeof indexIconMapping]} size="2x" />&nbsp;
  //                           <span>{item.data.Status.Fail}</span>
  //                         </div>
  //                       </td>
  //                       <td>{item.data.Progress.Passed} <br /> <br /> {item.data.Progress.Failed}</td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //               </>
  //             )}
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  

  


















  
};

export default IndexBox;


// type IndexBoxProps = {
//   name: string;
//   Passed: string;
//   Failed: string;
// };
// type IndexBoxIcon = {
//     icon1: IconDefinition;
//     icon2: IconDefinition;
//   };
// type IndexBoxData = {
//     passAndFailData: IndexBoxProps[];
//     icon: IndexBoxIcon;
//   };
//   const indexIconMapping = {
//     faCheckCircle: faCheckCircle,
//     faExclamationCircle: faExclamationCircle
//   };
  
  
//   const IndexBox: React.FC<IndexBoxData> = ({ passAndFailData}) => {
//     // Assuming you want to access the first item in passAndFailData

//     return (
//       <div className="container">
//         <span className="icon">
//         </span>
//         <div className="content">
            
//           <h2>{passAndFailData[0].name}</h2>
//           <hr style={{ margin: '20px 0' }} />
//           <div className='index-boxes'style={{display:'flex', flexDirection:"row"}}>
//           <FontAwesomeIcon  className = 'fa fa-check-circle passed-color' icon={indexIconMapping[PassesAndFails.icons.icon1 as keyof typeof indexIconMapping]}
//  size="2x" />
//           <p>Passed: {passAndFailData[0].Passed}</p>
//           </div>
//           <div className='index-boxes'style={{display:'flex', flexDirection:"row"}}>
//           <FontAwesomeIcon className ="fa fa-exclamation-circle failed-color" icon={indexIconMapping[PassesAndFails.icons.icon2 as keyof typeof indexIconMapping]} size="2x" />
//           <p>Failed: {passAndFailData[0].Failed}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default IndexBox;
  
// const Box: React.FC<IndexBoxData> = ({ name, icon, Passed, Failed }) => {
//     const properties = Object.keys(passAndFailData[0]);

//   return (
//     <div className="container">
//       <span className="icon">
//         <FontAwesomeIcon icon={icon} size="2x" />
//       </span>
//       <div className='text-Overlay'>
//       <h3>{name}</h3>
//       <hr style={{ margin: '20px 0' }} />
//       <table>
//         <tr>
//           <th>Passed</th>
//           <th>Failed</th>
//         </tr>
//         <tr>
//           <td>{Passed}</td>
//           <td>{Failed}</td>
//         </tr>
        
//       </table>
//       </div>
//     </div>
//   );
// };

//export default Box;
