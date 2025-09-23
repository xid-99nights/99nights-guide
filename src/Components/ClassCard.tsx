interface ClassCardProps {
  name: string;
  price: number;
  // Add other props
}

const ClassCard: React.FC<ClassCardProps> = ({ name, price }) => {
  return (
    <div className="class-card">
      <h3>{name}</h3>
      <p>Price: {price} Diamonds</p>
      {/* Add perks, image, etc. */}
    </div>
  );
};

export default ClassCard;