import { useMemo, useState } from "react";
import useElementSize from "../../hooks/useElementSize";
import virtualizedListStyles from "./VirtualizedList.module.scss";
import { type IGame } from "../Games/Game/types";

type VirtualizedListProps = {
  rowHeight: number;
  gap: number;
  buffer: number;
  items: IGame[];
  renderItems: (IGame: IGame, styles: React.CSSProperties) => JSX.Element;
  numColumns: number;
  numRows: number;
  elementWidth: number;
};

const VirtualizedList: React.FC<VirtualizedListProps> = ({
  rowHeight,
  gap,
  buffer,
  renderItems,
  items,
  numColumns = 1,
  numRows = 3,
  elementWidth,
}) => {
  const [{ height: containerHeight }, containerRef] =
    useElementSize<HTMLUListElement>();
  const [scrollPos, setScrollPos] = useState(0);

  const onScroll = (e: React.UIEvent<HTMLUListElement, UIEvent>) => {
    setScrollPos(e.currentTarget.scrollTop);
  };

  const visibleChildren = useMemo(() => {
    const startIndex = Math.max(
      (Math.floor(scrollPos / rowHeight) - buffer) * numColumns,
      0,
    );
    const endIndex = Math.min(
      Math.ceil((scrollPos + containerHeight) / rowHeight + buffer) *
        numColumns,
      items.length - 1,
    );

    return items.slice(startIndex, endIndex + 1).map((item, index) => {
      const rowIndex = Math.floor((startIndex + index) / numColumns);
      const colIndex = (startIndex + index) % numColumns;
      return renderItems(item, {
        position: "absolute",
        height: rowHeight,
        maxWidth: `${elementWidth - gap}px`,
        width: "100%",
        top: rowIndex * rowHeight + rowIndex * gap,
        left: colIndex * elementWidth + colIndex * gap,
      });
    });
  }, [
    scrollPos,
    rowHeight,
    buffer,
    numColumns,
    containerHeight,
    items,
    renderItems,
    elementWidth,
    gap,
  ]);

  return (
    <ul
      onScroll={onScroll}
      style={{
        height: `${numRows * (rowHeight + gap)}px`,
        width: `${elementWidth * numColumns + gap * numColumns}px`,
        margin: "0 auto",
      }}
      ref={containerRef}
      className={virtualizedListStyles.container}
    >
      {visibleChildren}
    </ul>
  );
};

export default VirtualizedList;
