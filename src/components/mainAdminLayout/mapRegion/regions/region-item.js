import React from "react";
import DeleteRegion from "../deleteRegion/deleteRegion";
export default function ReginItem({ regionItem, chooseRegion, uniqueKey }) {
  return (
    <li>
      <div onClick={() => chooseRegion(uniqueKey)}>
        <i class="fas fa-chevron-right" />
        <span style={{ marginLeft: "5px" }}> {regionItem}</span>{" "}
      </div>

      <span className="delete-region">
        <DeleteRegion regionId={uniqueKey} />
      </span>
    </li>
  );
}
