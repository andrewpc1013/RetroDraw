import React from "react";

/* Need to build a blank cell list when user clicks CLEAR ALL */
import { buildCellList } from "../utils";

/**
 * The ActionPanel component represents the interface for updating the Grid
 * based on any number of buttons the user might click on.
 */
const ActionPanel = (props) => {
  /**
   * Create constants for activeColor, cellList, and setCellList, reading them from the props
   */
  const activeColor = props.activeColor;
  const cellList = props.cellList;
  const setCellList = props.setCellList;

  return (
    <div className="action-panel">
      {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - passes the new cell list to setCellList
    */}
      <button
        onClick={() => {
          const newCellList = buildCellList();
          setCellList(newCellList);
        }}
      >
        clear all
      </button>
      {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over it, setting the color on each cell to activeColor
        - passes the new cell list to setCellList
    */}
      <button
        onClick={() => {
          const newCellList = buildCellList();
          newCellList.map((cell, idx) => {
            cell.color = activeColor;
            setCellList(newCellList);
          });
        }}
      >
        fill all
      </button>
      {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over the original cellList, and for each cell in it:
          - set the corresponding (by index) new cell to its color (if it has one) OR
          - set the corresponding (by index) new cell to the activeColor
    */}
      <button
        onClick={() => {
          const newCellList = buildCellList();
          cellList.map((cell, idx) => {
            if (cell.color) {
              newCellList[idx].color = cell.color;
            } else {
              newCellList[idx].color = activeColor;
            }
          });
          setCellList(newCellList);
        }}
      >
        fill empty
      </button>

      <button
        onClick={() => {
          
          const newCellList = [...cellList];
          let currentIndex = newCellList.length, randomIndex
          while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [newCellList[currentIndex], newCellList[randomIndex]] = [
              newCellList[randomIndex], newCellList[currentIndex]];
          }
        
          setCellList(newCellList)
          }}
      >
        Shuffle All
      </button>
    </div>
  );
};

export default ActionPanel;
