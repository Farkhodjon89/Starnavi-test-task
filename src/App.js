import React, {useEffect, useState} from "react";
import axios from "axios";
import './index.css';
import styled, {css} from "styled-components";
import _ from "lodash";
import HoverSquares from "./components/HoverSquares/HoverSquares";

const Grid = styled.div`
  display: grid;
  ${(p) => css`
    grid-template-columns: repeat(${p.count}, 30px);
  `}
`;

function App() {
  const [data, setData] = useState([])
  const [count, setCount] = useState(5)
  const [squares, setSquares] = useState([])
  const [isStart, setStart] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('https://demo7919674.mockable.io')
      setData(response.data)
    }
    fetch()
  }, [])

  const handleCount = (e) => {
    setCount(e.target.value)
    setSquares([])
    setStart(false)
  }

  const handleToggleSquare = (index) => {
    isStart && setSquares((prev) => _.xor(prev, [index]))
  }

  const getRow = (index) => Math.trunc(index / count) + 1

  const getColumn = (index) => (index % count) + 1

  const fieldsArea = new Array(Math.pow(count, 2)).fill('')

  return (
      <div className="App">
        <div className="container">
          <div className="left">
            <div className="top">
              <select name="modes" onChange={(e) => handleCount(e)}>
                {data.map((el, i) => (
                    <option value={el.field} key={i}>{el.name}</option>
                ))}
              </select>
              <button type="button" onClick={() => setStart(true)}>start</button>
            </div>
            <Grid count={count}>
              {fieldsArea.map((_, i) => (
                  <div onMouseEnter={() => handleToggleSquare(i)}
                       className={squares.includes(i) && isStart ? "square active" : "square"}
                       key={i}>
                  </div>
              ))}
            </Grid>
          </div>
          <div className="right">
            <HoverSquares squares={squares} getRow={getRow} getColumn={getColumn}/>
          </div>
        </div>
      </div>
  );
}

export default App;
