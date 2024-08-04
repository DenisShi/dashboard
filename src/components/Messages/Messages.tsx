import './Messages.scss';

interface MessagesProps {
  messages: string[];
}

function Messages({ messages }: MessagesProps) {
  return (
    <div className="messages-container">
      <h3>Recent Messages</h3>
      {messages.map((message, index) => (
        <div className="message" key={index}>{message}</div>
      ))}
    </div>
  );
}

export default Messages;
