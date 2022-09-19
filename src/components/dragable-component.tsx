import Draggable from "react-draggable";
import Xarrow, { useXarrow } from "react-xarrows";
interface propsInterface {
  id?: string;
}

function DragableComponent({ id }: propsInterface) {
  const updateXarrow = useXarrow();
  return (
    <div>
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
        <div id={id} className="handle">
          <div>{id}</div>

          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>

      {id == "id" && (
        <div>
          <Xarrow start="id" end="hiiiiiiiiiii" />
          <DragableComponent id="hiiiiiiiiiii" />
        </div>
      )}
    </div>
  );
}

export default DragableComponent;
