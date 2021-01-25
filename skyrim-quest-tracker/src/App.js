import React from "react";
import "./App.css";
import Header from "./Header.js";
import Questlist from "./Questlist.js";

class App extends React.Component {
  state = {
    mainQuestsInfo: {
      title: "Main QuestLine",
      mainQuests: [
        "Unbound",
        "Before the Storm",
        "Bleak Falls Barrow",
        "Dragon Rising",
        "The Way of The Voice",
        "The Horn of Jurgen Windcaller",
      ],
      mainQuestDesc: [
        "Escape Helgen",
        "Warn the Jarl of Whiterun",
        "Retrieve the Dragonstone",
        "Slay your first Dragon",
        "Meet with the Greybeards",
        "Recover the Horn from Ustengrav",
      ],
    },
    thievesGuild: ["Find Brynyolf"],
    thievesGuildDesc: ["Find Brynyolf"],
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="questcontainer">
          <Questlist
            title={this.state.mainQuestsInfo.title}
            mainQuests={this.state.mainQuestsInfo.mainQuests}
            mainQuestDesc={this.state.mainQuestsInfo.mainQuestDesc}
          />
          <Questlist
            mainQuests={this.state.thievesGuild}
            mainQuestDesc={this.state.thievesGuildDesc}
          />
        </div>
      </div>
    );
  }
}

export default App;
