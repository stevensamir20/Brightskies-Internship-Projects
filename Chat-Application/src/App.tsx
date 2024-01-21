import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import "./App.css";

function App() {
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "just now",
                sender: "Joe",
                direction: "incoming",
                position: "single",
              }}
            >
              <Message.Header sender="Emily" sentTime="just now" />
            </Message>{" "}
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "just now",
                sender: "Joe",
                direction: "incoming",
                position: "single",
              }}
            >
              <Message.Header sender="Emily" sentTime="just now" />
            </Message>{" "}
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "just now",
                sender: "Joe",
                direction: "incoming",
                position: "single",
              }}
            >
              <Message.Header sender="Ahmed" />
            </Message>
          </MessageList>
          <MessageInput placeholder="Type message here" attachButton={false} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default App;
