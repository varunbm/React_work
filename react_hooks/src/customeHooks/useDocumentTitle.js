import { useEffect } from "react";

function useDocumentTitle(Counter) {
  useEffect(() => {
    document.title = `Count ${Counter}`;
  }, [Counter]);
}

export default useDocumentTitle;
