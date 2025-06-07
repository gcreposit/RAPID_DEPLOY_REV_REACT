import React from "react";

const DataTablePolicies = () => {
  const data = [
    {
      srNo: 1,
      title: "EV Policy Claim SOP",
      date: "05/03/2025",
      type: "PDF",
      size: "500 KB",
      language: "Hindi",
      viewLink: "/All_Pdf/Policies/BioEnergyPolicy_2022.pdf",
    },
    {
      srNo: 2,
      title: "BioEnergyPolicy",
      date: "02/6/2025",
      type: "PDF",
      size: "975 KB",
      language: "English",
      viewLink: "/All_Pdf/Policies/UPREV_GH_Policy-English.pdf",
    },
    {
      srNo: 3,
      title: "Energy Policy",
      date: "2/06/2025",
      type: "PDF",
      size: "1615 KB",
      language: "Hindi",
      viewLink: "/All_Pdf/Policies/UPREV_Solar_Energy_Policy2022_English.pdf",
    },
        {
      srNo: 4,
      title: "UPREV_Energy",
      date:  "2/06/2025",
      type: "PDF",
      size: "1615 KB",
      language: "Hindi",
      viewLink: "/All_Pdf/Policies/Uttar-Pradesh-Electric-Vehicle-Manufacturing-Policy-2022.pdf",
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
            <th className="py-3 px-4 text-left">View</th>
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
                target="_blank"
                  href={item.viewLink}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                  <i className="fas fa-download"></i> Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTablePolicies;
