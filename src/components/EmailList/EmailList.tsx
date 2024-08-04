import { useState, useEffect } from 'react';
import EmailItem from '../EmailItem';
import './EmailList.scss';

interface Email {
  sender: string;
  subject: string;
  time: string;
  snippet: string;
}

function EmailList() {
  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    import('../../data/data.json')
      .then((data) => {
        setEmails(data.emails);
      })
      .catch((error) => {
        console.error('Error loading data.json:', error);
      });
  }, []);

  return (
    <div className="email-list">
      {emails.map((email, index) => (
        <EmailItem
          key={index}
          sender={email.sender}
          subject={email.subject}
          time={email.time}
          snippet={email.snippet}
        />
      ))}
    </div>
  );
}

export default EmailList;
