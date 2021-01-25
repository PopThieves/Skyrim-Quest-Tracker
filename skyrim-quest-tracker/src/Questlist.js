import React from "react";

const Questlist = (props) => {
  const { title } = props;
  const { mainQuestDesc } = props;
  return (
    <div className="list">
      <p className="questType">{title}</p>
      <ul>
        {props.mainQuests.map((quest, i) => {
          return (
            <div className="questlist">
              <li key={quest} className="quest">
                <p className="questName">{quest}</p>
                <p className="questDesc">{mainQuestDesc[i]}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Questlist;
