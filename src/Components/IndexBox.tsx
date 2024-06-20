// // // // import { faAngleUp, faAngleDown, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
// // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // import { useState } from "react";

// // // // type StatusProps = {
// // // //     Pass: string;
// // // //     Fail: string;
// // // //   };

// // // //   type ProgressProps = {
// // // //     Passed: string;
// // // //     Failed: string;
// // // //   };

// // // //   type DataProps = {
// // // //     Chart: string;
// // // //     Status: StatusProps;
// // // //     Progress: ProgressProps;
// // // //   };

// // // //   type IndexBoxProps = {
// // // //     name: string;
// // // //     count: number; // Added count prop
// // // //     data?: DataProps;
// // // //   };
// // // // const IndexBox: React.FC<IndexBoxProps> = ({ name, count, data }) => {
// // // //     const [expandedBox, setExpandedBox] = useState(false);

// // // //     const toggleBox = () => {
// // // //       setExpandedBox(!expandedBox);
// // // //     };

// // // //     const renderTableHeaders = (data: DataProps) => {
// // // //       return (
// // // //         <tr>
// // // //           {Object.keys(data).map((key, index) => (
// // // //             <th key={index}>{key}</th>
// // // //           ))}
// // // //         </tr>
// // // //       );
// // // //     };

// // // //     return (
// // // //       <div className="index-box">
// // // //         <div className="toggle-box" onClick={toggleBox}>
// // // //           <FontAwesomeIcon icon={expandedBox ? faAngleUp : faAngleDown} />
// // // //         </div>
// // // //         <h2>{name}</h2>
// // // //         <hr />
// // // //         <div className="index-box-content" style={{ display: expandedBox ? 'block' : 'none' }}>
// // // //           {data && (
// // // //             <table>
// // // //               <thead>{renderTableHeaders(data)}</thead>
// // // //               <tbody>
// // // //                 <tr>
// // // //                   <td>{data.Chart}</td>
// // // //                   <td>
// // // //                     <div className="icon-text">
// // // //                       <FontAwesomeIcon className='fa fa-check-circle passed-color' icon={faCheckCircle} size="2x" />
// // // //                       <span>{data.Status.Pass}</span>
// // // //                     </div>
// // // //                     <br />
// // // //                     <div className="icon-text">
// // // //                       <FontAwesomeIcon className='fa fa-exclamation-circle failed-color' icon={faExclamationCircle} size="2x" />
// // // //                       <span>{data.Status.Fail}</span>
// // // //                     </div>
// // // //                   </td>
// // // //                   <td>{data.Progress.Passed} <br /> <br /> {data.Progress.Failed}</td>
// // // //                 </tr>
// // // //               </tbody>
// // // //             </table>
// // // //           )}
// // // //         </div>
// // // //         <div className="count-box">
// // // //           <FontAwesomeIcon className='fa fa-check-circle passed-color' icon={faCheckCircle} size="2x" />
// // // //           <span>{count}</span>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   };
// // // //   export default IndexBox;
// // // import React, { useState } from "react";
// // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // import { faAngleUp, faAngleDown, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
// // // import { Pie } from "react-chartjs-2";
// // // import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// // // ChartJS.register(ArcElement, Tooltip, Legend);

// // // type StatusProps = {
// // //   Pass: string;
// // //   Fail: string;
// // // };

// // // type ProgressProps = {
// // //   Passed: string;
// // //   Failed: string;
// // // };

// // // type DataProps = {
// // //   Chart: string;
// // //   Status: StatusProps;
// // //   Progress: ProgressProps;
// // // };

// // // type IndexBoxProps = {
// // //   name: string;
// // //   count: number;
// // //   data?: DataProps;
// // // };

// // // const IndexBox: React.FC<IndexBoxProps> = ({ name, data }) => {
// // //   const [expandedBox, setExpandedBox] = useState(true); // Initialize to true for expanded state

// // //   const toggleBox = () => {
// // //     setExpandedBox(!expandedBox);
// // //   };

// // //   const renderTableHeaders = (data: DataProps) => {
// // //     return (
// // //       <tr>
// // //         {Object.keys(data).map((key, index) => (
// // //           <th key={index}>{key}</th>
// // //         ))}
// // //       </tr>
// // //     );
// // //   };

// // //   const renderPieChart = (percentage: number) => {
// // //     const data = {
// // //       datasets: [
// // //         {
// // //           data: [percentage, 100 - percentage],
// // //           backgroundColor: ['#36A2EB', '#E7E7E7'],
// // //           borderWidth: 1,
// // //         },
// // //       ],
// // //     };

// // //     const options = {
// // //       cutout: '70%', // Adjust this for the center hole size
// // //       rotation: -90,
// // //       circumference: 360 * (percentage / 100),
// // //     };

// // //     return (
// // //       <div style={{ position: 'relative', display: 'inline-block' }}>
// // //         <Pie data={data} options={options} />
// // //         <div style={{
// // //           position: 'absolute',
// // //           top: '50%',
// // //           left: '50%',
// // //           transform: 'translate(-50%, -50%)',
// // //           fontSize: '1.2em',
// // //           fontWeight: 'bold',
// // //         }}>
// // //           {/* {count} */}
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div className="index-box">
// // //       <div className="toggle-box" onClick={toggleBox}>
// // //         <FontAwesomeIcon icon={expandedBox ? faAngleUp : faAngleDown} />
// // //       </div>
// // //       <h2>{name}</h2>
// // //       <hr />
// // //       <div className="index-box-content" style={{ display: expandedBox ? 'block' : 'none' }}>
// // //         {data && (
// // //           <table>
// // //             <thead>{renderTableHeaders(data)}</thead>
// // //             <tbody>
// // //               <tr>
// // //                 <td>{renderPieChart(Number(data.Chart))}</td>
// // //                 <td>
// // //                   <div className="icon-text">
// // //                     <FontAwesomeIcon className='fa fa-check-circle passed-color' icon={faCheckCircle} size="2x" />
// // //                     <span>{data.Status.Pass}</span>
// // //                   </div>
// // //                   <br />
// // //                   <div className="icon-text">
// // //                     <FontAwesomeIcon className='fa fa-exclamation-circle failed-color' icon={faExclamationCircle} size="2x" />
// // //                     <span>{data.Status.Fail}</span>
// // //                   </div>
// // //                 </td>
// // //                 <td>{data.Progress.Passed} <br /> <br /> {data.Progress.Failed}</td>
// // //               </tr>
// // //             </tbody>
// // //           </table>
// // //         )}
// // //       </div>
// // //       <div className="count-box">
// // //         <FontAwesomeIcon className='fa fa-check-circle passed-color' icon={faCheckCircle} size="2x" />
// // //         {/* <span>{count}</span> */}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default IndexBox;




// // import { faAngleUp, faAngleDown, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { useState } from "react";
// // import { Pie } from 'react-chartjs-2';
// // import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// // import ChartDataLabels from 'chartjs-plugin-datalabels';

// // ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// // type StatusProps = {
// //     Pass: string;
// //     Fail: string;
// // };

// // type ProgressProps = {
// //     Passed: string;
// //     Failed: string;
// // };

// // type DataProps = {
// //     Chart: string;
// //     Status: StatusProps;
// //     Progress: ProgressProps;
// // };

// // type IndexBoxProps = {
// //     name: string;
// //     data?: DataProps;
// // };

// // const IndexBox: React.FC<IndexBoxProps> = ({ name, data }) => {
// //     const [expandedBox, setExpandedBox] = useState(true); // Set initial state to expanded

// //     const toggleBox = () => {
// //         setExpandedBox(!expandedBox);
// //     };

// //     const renderTableHeaders = (data: DataProps) => {
// //         return (
// //             <tr>
// //                 {Object.keys(data).map((key, index) => (
// //                     <th key={index}>{key}</th>
// //                 ))}
// //             </tr>
// //         );
// //     };

// //     const getChartData = () => {
// //         if (!data) return {
// //             labels: [],
// //             datasets: [{
// //                 data: [],
// //                 backgroundColor: [],
// //                 hoverBackgroundColor: [],
// //                 borderWidth: 0,
// //             }],
// //         };

// //         const chartValue = parseFloat(data.Chart);
// //         const remainingValue = 100 - chartValue;

// //         return {
// //             labels: ['Passed', 'Remaining'],
// //             datasets: [
// //                 {
// //                     data: [chartValue, remainingValue],
// //                     backgroundColor: ['#1abb9c', '#e0e0e0'], // Custom color for the chart
// //                     hoverBackgroundColor: ['#1abb9c', '#e0e0e0'],
// //                     borderWidth: 0,
// //                 },
// //             ],
// //         };
// //     };

// //     const chartOptions = {
// //         responsive: true,
// //         maintainAspectRatio: false,
// //         plugins: {
// //             legend: {
// //                 display: false,
// //             },
// //             datalabels: {
// //                 display: true,
// //                 align: 'center' as const,
// //                 anchor: 'center' as const,
// //                 formatter: function (value: number, context: any) {
// //                     if (context.dataIndex === 0) {
// //                         return `${data?.Chart}`;
// //                     }
// //                     return '';
// //                 },
// //                 color: '#000',
// //                 font: {
// //                     size: 12, // Adjust the font size
// //                     weight: 'normal', // Adjust the font weight
// //                 } as any, // Use 'as any' to avoid TypeScript errors with Chart.js types
// //             },
// //         },
// //         cutout: '75%', // Make the chart a doughnut chart
// //     };

// //     return (
// //         <div className="index-box">
// //             <div className="toggle-box" onClick={toggleBox}>
// //                 <FontAwesomeIcon icon={expandedBox ? faAngleUp : faAngleDown} />
// //             </div>
// //             <h2>{name}</h2>
// //             <hr />
// //             <div className="index-box-content" style={{ display: expandedBox ? 'block' : 'none' }}>
// //                 {data && (
// //                     <>
// //                         <div className="chart-container" style={{ width: '200px', height: '200px', position: 'relative' }}>
// //                             <Pie data={getChartData()} options={chartOptions} />
// //                         </div>
// //                         <table>
// //                             <thead>{renderTableHeaders(data)}</thead>
// //                             <tbody>
// //                                 <tr>
// //                                     <td>
// //                                         <div className="icon-text">
// //                                             <FontAwesomeIcon className='fa fa-check-circle passed-color' icon={faCheckCircle} size="2x" />
// //                                             <span>{data.Status.Pass}</span>
// //                                         </div>
// //                                         <br />
// //                                         <div className="icon-text">
// //                                             <FontAwesomeIcon className='fa fa-exclamation-circle failed-color' icon={faExclamationCircle} size="2x" />
// //                                             <span>{data.Status.Fail}</span>
// //                                         </div>
// //                                     </td>
// //                                     <td>{data.Progress.Passed} <br /> <br /> {data.Progress.Failed}</td>
// //                                 </tr>
// //                             </tbody>
// //                         </table>
// //                     </>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default IndexBox;
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleUp, faAngleDown, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// type StatusProps = {
//     Pass: string;
//     Fail: string;
// };

// type ProgressProps = {
//     Passed: string;
//     Failed: string;
// };

// type DataProps = {
//     Chart: string;
//     Status: StatusProps;
//     Progress: ProgressProps;
// };

// type IndexBoxProps = {
//     name: string;
//     count: number;
//     data?: DataProps;
// };

// const IndexBox: React.FC<IndexBoxProps> = ({ name, count, data }) => {
//     const [expandedBox, setExpandedBox] = useState(true); // Set initial state to expanded

//     const toggleBox = () => {
//         setExpandedBox(!expandedBox);
//     };

//     const renderTableHeaders = () => {
//         return (
//             <tr>
//                 <th>Charts</th>
//                 <th>Status</th>
//                 <th>Progress</th>
//             </tr>
//         );
//     };

//     const getChartData = () => {
//         if (!data) return {
//             labels: [],
//             datasets: [{
//                 data: [],
//                 backgroundColor: [],
//                 hoverBackgroundColor: [],
//                 borderWidth: 0,
//             }],
//         };

//         const chartValue = parseFloat(data.Chart);
//         const remainingValue = 100 - chartValue;

//         return {
//             labels: ['Passed', 'Remaining'],
//             datasets: [
//                 {
//                     data: [chartValue, remainingValue],
//                     backgroundColor: ['#1abb9c', '#e0e0e0'], // Custom color for the chart
//                     hoverBackgroundColor: ['#1abb9c', '#e0e0e0'],
//                     borderWidth: 0,
//                 },
//             ],
//         };
//     };

//     const chartOptions = {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//             legend: {
//                 display: false,
//             },
//             datalabels: {
//                 display: true,
//                 align: 'center' as const,
//                 anchor: 'center' as const,
//                 formatter: function (value: number, context: any) {
//                     if (context.dataIndex === 0) {
//                         // 
//                         console.log('True');
//                     }
//                     return '';
//                 },
//                 color: '#000',
//                 font: {
//                     size: 12, // Adjust the font size
//                     weight: 'normal', // Adjust the font weight
//                 } as any, // Use 'as any' to avoid TypeScript errors with Chart.js types
//             },
//         },
//         cutout: '75%', // Make the chart a doughnut chart
//     };

//     return (
//         <div className="index-box" style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
//             <div className="toggle-box" onClick={toggleBox}>
//                 <FontAwesomeIcon icon={expandedBox ? faAngleUp : faAngleDown} />
//             </div>
//             <div style={{ flex: '1' }}>
//                 <h2>{name}</h2>
//                 <hr />
//                 <div className="index-box-content" style={{ display: expandedBox ? 'block' : 'none' }}>
//                     {data && (
//                         <>
//                             <table>
//                                 <thead>{renderTableHeaders()}</thead>
//                                 <tbody>
//                                     <tr>
//                                         <td style={{ width: '200px', position: 'relative' }}>
//                                             <Pie data={getChartData()} options={chartOptions} />
//                                             <div style={{
//                                                 position: 'absolute',
//                                                 top: '50%',
//                                                 left: '50%',
//                                                 transform: 'translate(-50%, -50%)',
//                                                 fontSize: '1.2em',
//                                                 fontWeight: 'bold',
//                                             }}>
//                                                 {data.Chart}
//                                             </div>
//                                         </td>
//                                         <td>
//                                             <div className="icon-text">
//                                                 <FontAwesomeIcon className='fa fa-check-circle passed-color' icon={faCheckCircle} size="2x" />
//                                                 <span>{data.Status.Pass}</span>&nbsp;&nbsp;
//                                             </div>
//                                             <br />
//                                             <div className="icon-text">
//                                                 <FontAwesomeIcon className='fa fa-exclamation-circle failed-color' icon={faExclamationCircle} size="2x" />
//                                                 <span>{data.Status.Fail}</span>&nbsp;&nbsp;
//                                             </div>
//                                         </td>
//                                         <td>
//                                             <div>{data.Progress.Passed}</div><br/>

//                                             <div>{data.Progress.Failed}</div>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default IndexBox;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import FeaturesOverview from "./featuresOverviewTable";
import FeaturesOverviewJsonData from "../../public/Json/index-html/featuresOverview.json"


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

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

const IndexBox: React.FC<IndexBoxProps> = ({ name, data }) => {
  const [expandedBox, setExpandedBox] = useState(true); 

  const toggleBox = () => {
    setExpandedBox(!expandedBox);
  };

  const renderTableHeaders = () => {
    return (
      <tr>
        <th className="px-4 py-2 text-[#73879C] text-sm text-left">Charts</th>
        <th className="px-4 py-2 text-[#73879C] text-sm text-left">Status</th>
        <th className="px-4 py-2 text-[#73879C] text-sm text-left">Progress</th>
      </tr>
    );
  };

  const getChartData = () => {
    if (!data) return {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
        borderWidth: 0,
      }],
    };

    const chartValue = parseFloat(data.Progress.Passed);
    const remainingValue = 100 - chartValue;

    return {
      labels: ['Passed', 'Failed'],
      datasets: [
        {
          data: [chartValue, remainingValue],
          backgroundColor: ['#1abb9c', '#e0e0e0'], // Custom color for the chart
          hoverBackgroundColor: ['#1abb9c', '#e0e0e0'],
          borderWidth: 0,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        align: 'center' as const,
        anchor: 'center' as const,
        formatter: function (value: number, context: any) {
          if (context.dataIndex === 0) {
            console.log('True');
          }
          return '';
        },
        color: '#000',
        font: {
          size: 10,
          weight: 'normal',
        } as any,
      },
    },
    cutout: '75%', // Make the chart a doughnut chart
  };

  // return (
  //   <div className="index-box flex flex-row mb-5">
  //     <div className="toggle-box cursor-pointer" onClick={toggleBox}>
  //       <FontAwesomeIcon icon={expandedBox ? faAngleUp : faAngleDown} />
  //     </div>
  //     <div className="flex-1">
  //       <h2 className="text-xl font-bold mb-2">{name}</h2>
  //       <hr className="mb-2" />
  //       <div className={`index-box-content ${expandedBox ? 'block' : 'hidden'}`}>
  //         {data && (
  //           <>
  //             <table className="w-full">
  //               <thead>{renderTableHeaders()}</thead>
  //               <tbody>
  //                 <tr className="border">
  //                   <td className="border px-4 py-2 w-1/3">
  //                     <div className="chart-container w-40 h-40 relative mx-auto">
  //                       <Pie data={getChartData()} options={chartOptions} />
  //                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
  //                         {data.Chart}
  //                       </div>
  //                     </div>
  //                   </td>
  //                   <td className="border px-4 py-2">
  //                     <div className="icon-text flex items-center mb-2">
  //                       <FontAwesomeIcon className="text-[#1ABB9C]" icon={faCheckCircle} />
  //                       <span className="ml-2">{data.Status.Pass}</span><br/><br/>
  //                     </div>
  //                     <div className="icon-text flex items-center">
  //                       <FontAwesomeIcon className='fa fa-exclamation-circle failed-color text-red-500' icon={faExclamationCircle} />&nbsp;
  //                       <span>{data.Status.Fail}</span>&nbsp;&nbsp;
  //                     </div>
  //                   </td>
  //                   <td className="border px-4 py-2">
  //                     <div>{data.Progress.Passed}</div>
  //                     <br />
  //                     <div>{data.Progress.Failed}</div>
  //                   </td>
  //                 </tr>
  //               </tbody>
  //             </table>
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="boxes-container flex relative mb-2.5 bg-white border border-gray-300">
      <div className="flex w-full mb-5">
        <div className="flex-1">
          <h2 className="text-2xl fontweight-400 mb-2 text-[#73879C]">&nbsp;{name}</h2>
          <hr className="mb-2" />
          <div className={`index-box-content ${expandedBox ? 'block' : 'hidden'} transition-height duration-300 ease-in-out overflow-hidden`}>
            {data && (
              <>
                <table className="w-full">
                  <thead>{renderTableHeaders()}</thead>
                  <tbody>
                    <tr className="">
                      <td className=" px-4 py-2 w-1/3">
                        {/* <div className="flex items-center space-x-4"> */}
                        <div className=" flex items-center space-x-4 w-1/3">
                          <div className="chart-container w-40 h-40 relative">
                            <Pie data={getChartData()} options={chartOptions} />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
                              {data.Chart}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className=" px-4 py-2">
                        <div className="w-1/3">
                          <div className="icon-text flex items-center mb-2">
                            <FontAwesomeIcon className="text-[#1ABB9C]" icon={faCheckCircle} />&nbsp;
                            <span className="ml-2 text-base text-[#73879C]" >{data.Status.Pass}</span>&nbsp;&nbsp;
                          </div>
                          <div className="icon-text flex items-center">
                            <FontAwesomeIcon className='fa fa-exclamation-circle failed-color text-red-500' icon={faExclamationCircle} />&nbsp;&nbsp;
                            <span className="text-base text-[#73879C]">{data.Status.Fail}</span>&nbsp;&nbsp;
                          </div>
                        </div>
                      </td>
                      <td className=" px-4 py-2">
                        <div className="w-1/3">
                          <div className="text-base text-[#73879C] mb-2">{data.Progress.Passed} </div>

                          <div className="text-base text-[#73879C]">{data.Progress.Failed}</div>
                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) }
          </div>
        </div>
        <div className="toggle-box cursor-pointer ml-auto" onClick={toggleBox}>
          <FontAwesomeIcon className="text-[#C5C7CB]" icon={expandedBox ? faAngleUp : faAngleDown}/>&nbsp; 
        </div>
      </div>
    </div>
  );
};

export default IndexBox;


