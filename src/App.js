import React from 'react';
import Spinner from './components/spinner';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.places = ["Pita Pit", "Subway", "Quesada Burritos & Tacos", "Teryaki Experience", "Pizza Pizza", "Tim Hortons", "Rolltation", 
      "DC BYTES", "Lobster burger Bar", "IPotato", "Chen's Restaurant", "Seoul Soul", "Lazeez Shawarma", "Sowon Korea Dining", "Harvey's", "Kabob Hut", "Izna Poke Plus",
      "Chungchun Rice Hotdog", "Campus Pizza", "Shinwa Asian cuisine", "Nuri Village", "Yummy Chongqing", "Taste of Taiwan Home Garden", 
      "Aunty's Kitchen", "Shawerma Plus", "Roosters Fired Chicken & More", "Better Chef", "白家老汤", "Kismet Restaurant", "Fantastic Wok", "Baba Grill",
      "Fresh Burrito", "Waterloo Star", "Slap Burgers", "Pita Facotry", "Yunshang Rice Noodle", "遇见", "Molly Bloom's Irish Pub", "Gol'sLanzhou Noodle", 
      "IPHO Vietnamese Cuisine", "Pizza Nova", "Campus PIzza", "Mr. Yin", "Burger King", "Akua", "Mel's Diner", "MoMo Japanese food", "Song's Lamian",
      "Hey Chefz", "Foodie Fruitie", "Yang Yum", "Perfect Meat Bowl", "Panda House Cuisine"];
    this.state = {
      restaurant: ""
    };
  }

  onSelectItem = (selectedItem) => {
    this.setState({restaurant: this.places[selectedItem]});
  }

  render = () => {

    return <div className="App">
      <h1>What should you eat today?</h1>
      <Spinner items={this.places} onSelectItem={this.onSelectItem}/>
      <h2>Try {this.state.restaurant || "..."}</h2>
    </div>
  }
}

export default App;
