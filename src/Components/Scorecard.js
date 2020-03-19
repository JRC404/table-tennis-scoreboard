import React, { useState } from "react";

const Scorecard = () => {
  const [state, setState] = useState({
    scores: [
      [
        {
          player1: 7,
          player2: 5
        },
        {
          player1: 7,
          player2: 5
        },
        {
          player1: 4,
          player2: 5
        },
        {
          player1: 7,
          player2: 2
        },
        {
          player1: 7,
          player2: 5
        }
      ]
    ]
  });

  return (
    <>
      <table>
        <tr>
          <th>Home Player</th>
          <th>Away Player</th>
          <th>Set 1</th>
          <th>Set 2</th>
          <th>Set 3</th>
          <th>Set 4</th>
          <th>Set 5</th>
          <th>Home Team Score</th>
          <th>Away Team Score</th>
        </tr>
        <tr>
          <td>Player Name</td>
          <td>Player Name</td>

          {state.scores[0].map(set => {
            return (
              <td>
                {set.player1}-{set.player2}
              </td>
            );
          })}

          {/* <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td> */}
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Player Name</td>
          <td>Player Name</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Player Name</td>
          <td>Player Name</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Player Name</td>
          <td>Player Name</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Player Name</td>
          <td>Player Name</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Player Name</td>
          <td>Player Name</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Player Name</td>
          <td>Player Name</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Player Name</td>
          <td>Player Name</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Player Name</td>
          <td>Player Name</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Player Name</td>
          <td>Player Name</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0-0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </table>
    </>
  );
};

export default Scorecard;
