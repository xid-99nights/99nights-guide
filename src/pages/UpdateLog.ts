interface UpdateData {
  name: string;
  content: string;
  description: string;
}

const updates: UpdateData[] = [
  { name: "Decoration Update 6/9/2025", content: "~Additional Changes~ ...", description: "Time to decorate your base!..." },
  // Add more from wiki
];

const UpdateLog: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Update Log</h1>
      <table>
        <thead><tr><th>Name</th><th>Content</th><th>Description</th></tr></thead>
        <tbody>
          {updates.map((update, i) => (
            <tr key={i}><td>{update.name}</td><td>{update.content}</td><td>{update.description}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateLog;