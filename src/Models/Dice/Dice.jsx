import React, { Component } from "react";
import Dice1 from "../../Components/assets/images/dice/die_face_1.png";
import Dice2 from "../../Components/assets/images/dice/die_face_2.png";
import Dice3 from "../../Components/assets/images/dice/die_face_3.png";
import Dice4 from "../../Components/assets/images/dice/die_face_4.png";
import Dice5 from "../../Components/assets/images/dice/die_face_5.png";
import Dice6 from "../../Components/assets/images/dice/die_face_6.png";

export default class Dice extends Component {
    constructor(props) {
        super();

        this.state = [];
    }

    rollDice = () => {
        let dice = Math.floor(Math.random() * 6) + 1;
        let diceImage = "";
        let diceMsg = "";

        switch (dice) {
            case 1:
                diceImage = { Dice1 };
                break;
            case 2:
                diceImage = { Dice2 };
                break;
            case 3:
                diceImage = { Dice3 };
                break;
            case 4:
                diceImage = { Dice4 };
                break;
            case 5:
                diceImage = { Dice5 };
                break;
            case 6:
                diceImage = { Dice6 };
                break;

            default:
                diceMsg += "ERRO";
                break;
        }

        diceMsg = document.getElementById(
            "dice_1"
        ).innerHTML = `<img src='${diceImage}' />`;
    };

    render() {
        return (
            <div>
                <input
                    type="button"
                    value="Roll Dice"
                    onClick={() => this.rollDice}
                />
                <div id="dice_1"></div>
            </div>
        );
    }
}
