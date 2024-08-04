import EmailList from '../../components/EmailList/EmailList';
import './EmailPage.scss';

function EmailPage() {
  return (
    <div className="email-page">
      <h2>Emails</h2>
      <EmailList />
    </div>
  );
}

export default EmailPage;
