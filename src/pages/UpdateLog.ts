import React from 'react';

interface UpdateData {
  name: string;
  content: string;
  description: string;
}

const updates: UpdateData[] = [
  { name: "Decoration Update 6/9/2025", content: "~Additional Changes~ Added new decorations.", description: "Time to decorate your base!" },
  // Add more from wiki (e.g., "Balance Update 8/22/2025", etc.)
];

const UpdateLog: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Update Log</h1>
      <p>Track game changes. Pro Tip: Check for balance tweaks affecting strategies.</p>
      <table className="crafting-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Content</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((update, index) => (
            <tr key={index}>
              <td>{update.name}</td>
              <td>{update.content}</td>
              <td>{update.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateLog;


