import React from "react";

const Characteristics = ({ characteristicsData }) => {
  return (
    <div className={`w-full py-5 px-4`}>
      <table border="0" cellPadding="0" cellSpacing="0" className="w-full">
        <tbody>
          {characteristicsData.map((data) => (
            <tr key={data.title}>
              <td
                className={`text-white text-[14px] leading-[18px] w-1/2 font-medium pt-3`}
              >
                {data.title}
              </td>
              <td
                className={`text-white text-[14px] leading-[18px] w-1/2 font-thin pt-3 md:text-left text-right`}
              >
                {data.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Characteristics;
