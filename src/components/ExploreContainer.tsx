import './ExploreContainer.css';
import React from "react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {

    const [counter, setCounter] = React.useState(0)

    function changeCounter(i:number) {
        setCounter((prevCount) => {
            if (prevCount === 0 && i < 0) return prevCount;
            return prevCount + i;
        })
    }

  return (
    <div className="container">
        <strong>Counter app</strong>
        <p>Click on the buttons to set the counter!</p>

        <p id={"counterValue"}> {counter} </p>

        <button className={"counter_buttons"} onClick={() => changeCounter(+1)} > + </button>
        <button className={"counter_buttons"} onClick={() => changeCounter(-1)} > - </button>
    </div>
  );
};


export default ExploreContainer;
