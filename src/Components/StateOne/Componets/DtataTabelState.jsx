// import React from 'react';

// const DataTable = () => {
//   const data = [
//     {
//       srNo: 1,
//       title: "U.P MBBL 2916",
//       date: "05/03/2024",
//       type: "/pdfs/Final_Consolidated_EVCI_Guidelines_2022_with_ANNEXURES.pdf",
//       size: "500 KB",
//       language: "English",
//       viewLink: "/pdfs/Final_Consolidated_EVCI_Guidelines_2022_with_ANNEXURES.pdf", // Local path
//     },
//     {
//       srNo: 2,
//       title: "Final Battery Swapping and Charging Guidelines",
//       date: "02/12/2022",
//       type: "PDF",
//       size: "975 KB",
//       language: "English",
//       viewLink: "/pdfs/Final_Battery_Swapping_and_Charging_Guidelines.pdf", // Local path
//     },
//     {
//       srNo: 3,
//       title: "Guidelines And Standards",
//       date: "18/09/2022",
//       type: "PDF",
//       size: "1615 KB",
//       language: "Hindi",
//       viewLink: "/pdfs/Guidelines_and_Standards.pdf", // Local path
//     },
//   ];

//   return (
//     <div className="overflow-x-auto bg-white shadow-lg rounded-lg my-3">
//       <table className="min-w-full table-auto">
//         <thead className="bg-orange-500 text-white">
//           <tr>
//             <th className="py-3 px-4 text-left">Sr. No.</th>
//             <th className="py-3 px-4 text-left">Title</th>
//             <th className="py-3 px-4 text-left">Date</th>
//             <th className="py-3 px-4 text-left">Type</th>
//             <th className="py-3 px-4 text-left">Size</th>
//             <th className="py-3 px-4 text-left">Language</th>
//             <th className="py-3 px-4 text-left">Download</th>
//           </tr>
//         </thead>
//         <tbody className="bg-gray-100">
//           {data.map((item) => (
//             <tr key={item.srNo} className="hover:bg-gray-200">
//               <td className="py-3 px-4">{item.srNo}</td>
//               <td className="py-3 px-4">{item.title}</td>
//               <td className="py-3 px-4">{item.date}</td>
//               <td className="py-3 px-4">
//                 <i className="fas fa-file-pdf text-red-600"></i> {item.type}
//               </td>
//               <td className="py-3 px-4">{item.size}</td>
//               <td className="py-3 px-4">{item.language}</td>
//               <td className="py-3 px-4">
//                 <a
//                   href={item.viewLink}
//                   target="_blank"
//                   className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
//                   download
//                 >
//                   <i className="fas fa-download"></i> Download
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;



import React from 'react';

const DtataTabelState = () => {
  const data = [
    {
      srNo: 1,
      title: "EV Policy Claim SOP",
      date: "06/06/2025",
      type: "PDF",
      size: "500 KB",
      language: "English",
      viewLink: "/All_Pdf/State/EV Policy Claim SOP (1).pdf", // Local path
    },
  
  ];

  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg my-3">
      <table className="min-w-full table-auto">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Sr. No.</th>
            <th className="py-3 px-4 text-left">Title</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Type</th>
            <th className="py-3 px-4 text-left">Size</th>
            <th className="py-3 px-4 text-left">Language</th>
            <th className="py-3 px-4 text-left">View PDF</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {data.map((item) => (
            <tr key={item.srNo} className="hover:bg-gray-200">
              <td className="py-3 px-4">{item.srNo}</td>
              <td className="py-3 px-4">{item.title}</td>
              <td className="py-3 px-4">{item.date}</td>
              <td className="py-3 px-4">
                <i className="fas fa-file-pdf text-red-600"></i> {item.type}
              </td>
              <td className="py-3 px-4">{item.size}</td>
              <td className="py-3 px-4">{item.language}</td>
              <td className="py-3 px-4">
                <a
                  href={item.viewLink}
                  target="_blank" // Opens in a new tab
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                  <i className="fas fa-eye"></i> View PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DtataTabelState;
