import { useState } from "react";

function SearchOrder() {
  const [query, setQuery] = useState();

  return (
    <input
      placeholder="Search Order #"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchOrder;
