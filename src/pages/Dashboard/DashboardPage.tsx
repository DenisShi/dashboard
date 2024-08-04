import { useState, useEffect } from 'react';
import InfoBlock from '../../components/InfoBlock';
import Chart from '../../components/Chart';
import Messages from '../../components/Messages';
import Earnings from '../../components/Earnings';
import News from '../../components/News';
import KnowledgeBase from '../../components/KnowledgeBase';
import './DashboardPage.scss';

interface ChartData {
  name: string;
  sales: number;
}

interface EarningsData {
  total: number;
  online: {
    amount: number;
    percentage: number;
  };
  offline: {
    amount: number;
    percentage: number;
  };
}

function DashboardPage() {
  const [lineData, setLineData] = useState<ChartData[]>([]);
  const [newsList, setNewsList] = useState<string[]>([]);
  const [earnings, setEarnings] = useState<EarningsData | null>(null);

  useEffect(() => {
    import('../../data/data.json')
      .then((data) => {
        setLineData(data.charts);
        setNewsList(data.news);
        setEarnings(data.earnings);
      });
  }, []);

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <div className="info-blocks">
        <InfoBlock title="Download" icon="cloud_download" completionText="90% Complete" completionPercentage={90} />
        <InfoBlock title="Upload" icon="cloud_upload" completionText="30% Complete" completionPercentage={30} />
        <InfoBlock title="Ticket" icon="assignment_turned_in" completionText="Ticket Checked" completionPercentage={70} />
      </div>

      <div className="dashboard-row">
        <Chart data={lineData} />
        <Messages messages={["Message 1: Hi! How are you?", "Message 2: Reminder of the meeting at 3 PM.", "Message 3: Don't forget the deadline!"]} />
      </div>

      <div className="dashboard-row">
        {earnings && <Earnings />}
        <News newsItems={newsList} />
        <KnowledgeBase />
      </div>
    </div>
  );
}

export default DashboardPage;
