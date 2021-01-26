import React from "react";
import "./App.css";
import Header from "./Header.js";
import Questlist from "./Questlist.js";
import {
  mainQuestsInfo,
  darkBrotherhoodQuestsInfo,
  collegeWinterholdQuestsInfo,
  companionsQuestsInfo,
} from "./data";

class App extends React.Component {
  state = {
    mainQuestsInfo: mainQuestsInfo,
    darkBrotherhoodQuestsInfo: darkBrotherhoodQuestsInfo,
    collegeWinterholdQuestsInfo: collegeWinterholdQuestsInfo,
    companionsQuestsInfo: companionsQuestsInfo,
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="questcontainer">
          <Questlist
            title={this.state.mainQuestsInfo.title}
            mainQuests={this.state.mainQuestsInfo.quests}
            mainQuestDesc={this.state.mainQuestsInfo.questDesc}
          />
          <Questlist
            title={this.state.darkBrotherhoodQuestsInfo.title}
            mainQuests={this.state.darkBrotherhoodQuestsInfo.quests}
            mainQuestDesc={this.state.darkBrotherhoodQuestsInfo.questDesc}
          />
          <Questlist
            title={this.state.collegeWinterholdQuestsInfo.title}
            mainQuests={this.state.collegeWinterholdQuestsInfo.quests}
            mainQuestDesc={this.state.collegeWinterholdQuestsInfo.questDesc}
          />
          <Questlist
            title={this.state.companionsQuestsInfo.title}
            mainQuests={this.state.companionsQuestsInfo.quests}
            mainQuestDesc={this.state.companionsQuestsInfo.questDesc}
          />
        </div>
      </div>
    );
  }
}

export default App;
