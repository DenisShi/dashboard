import './InfoBlock.scss';

interface InfoBlockProps {
  title: string;
  icon: string;
  completionText: string;
  completionPercentage: number;
}

function InfoBlock({ title, icon, completionText, completionPercentage }: InfoBlockProps) {
  return (
    <div className="info-block">
      <h3>{title}</h3>
      <span className="material-icons">{icon}</span>
      <p className="completion-text">{completionText}</p>
      <div className="range-display">
        <div className="range-indicator" style={{ width: `${completionPercentage}%` }}></div>
      </div>
    </div>
  );
}

export default InfoBlock;
