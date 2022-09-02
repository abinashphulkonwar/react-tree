import "./App.css";
import Draggable from "react-draggable";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import DragableComponent from "./components/dragable-component";

function App() {
  const updateXarrow = useXarrow();
  const updateXarrow1 = useXarrow();
  return (
    <div className="App">
      <Xwrapper>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 10 }}
          grid={[25, 25]}
          scale={1}
          allowAnyClick={true}
          onDrag={updateXarrow}
          onStop={updateXarrow}
        >
          <div id="box1" className="handle">
            <div>Drag from here</div>
            <div>This readme is really dragging on...</div>
          </div>
        </Draggable>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 200, y: 200 }}
          grid={[25, 25]}
          scale={1}
          allowAnyClick={true}
          onDrag={updateXarrow1}
          onStop={updateXarrow1}
        >
          <div id="elem2" className="handle">
            <div>Drag from here</div>
            <div>This readme is really dragging on...</div>
          </div>
        </Draggable>
        <Xarrow
          start="box1" //can be react ref
          end="elem2" //or an id
        />
      </Xwrapper>
      <DragableComponent id={"id"} />
    </div>
  );
}

export default App;
