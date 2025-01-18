interface MissionCardProps {
  title: string;
  description: string;
}

const MissionCard: React.FC<MissionCardProps> = ({title, description}) => {
  return (
    <div className="flex flex-col">
      <h1 className="bowlby-one text-xl">{title}</h1>
      <p className="anonymous-pro-regular text-sm">{description}</p>
    </div>
  )
}

export default MissionCard;
