import './EmailItem.scss';

interface EmailItemProps {
  sender: string;
  subject: string;
  time: string;
  snippet: string;
}

function EmailItem({ sender, subject, time, snippet }: EmailItemProps) {
  return (
    <div className="email-item">
      <div className="email-header">
        <span className="email-sender">{sender}</span>
        <span className="email-time">{time}</span>
      </div>
      <div className="email-subject">{subject}</div>
      <div className="email-snippet">{snippet}</div>
    </div>
  );
}

export default EmailItem;
