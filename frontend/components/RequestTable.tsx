import React from 'react';

type Request = {
  phone: string;
  text: string;
  timestamp: string;
};

type Props = {
  requests: Request[];
};

const RequestTable: React.FC<Props> = ({ requests }) => {
  return (
    <div className="overflow-x-auto w-full max-w-4xl shadow-lg rounded-xl border border-blue-200 bg-white">
      <table className="w-full text-left text-blue-900">
        <thead className="bg-blue-100 border-b border-blue-300">
          <tr>
            <th className="px-6 py-3 uppercase font-semibold text-sm tracking-widest">Phone</th>
            <th className="px-6 py-3 uppercase font-semibold text-sm tracking-widest">Text</th>
            <th className="px-6 py-3 uppercase font-semibold text-sm tracking-widest">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(({ phone, text, timestamp }, index) => (
            <tr
              key={index}
              className={`border-b border-blue-200 ${
                index % 2 === 0 ? 'bg-blue-50' : 'bg-white'
              } hover:bg-blue-200 transition-colors duration-200`}
            >
              <td className="px-6 py-4 font-mono">{phone}</td>
              <td className="px-6 py-4 font-serif">{text}</td>
              <td className="px-6 py-4 font-mono text-sm text-blue-700">
                {timestamp ? new Date(timestamp).toLocaleString() : 'Invalid Date'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable; 