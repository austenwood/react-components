import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          content={faker.random.words()}
          timeAgo={faker.date.recent().toDateString()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          content={faker.random.words()}
          timeAgo={faker.date.recent().toDateString()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          content={faker.random.words()}
          timeAgo={faker.date.recent().toDateString()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
