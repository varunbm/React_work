import React from "react";

function Title() {
  console.log("Title");
  return <div>useCallback function.</div>;
}

export default React.memo(Title);
