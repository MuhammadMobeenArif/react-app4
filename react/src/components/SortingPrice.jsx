
// 1) Show all products by sorting on price (low high)
function SortingPrice({ products2 }) {
  const sortData = [...products2].sort((a, b) => a.price - b.price);
  return (
    <div className="top-div">
      <h1>Sort Data (low to high)</h1>
      <div className="container">
        {sortData.map((s) => (
          <div className="main-container">
            <h2>{s.name}</h2>
            <p>Price : {s.price}</p>
            <span style={{ color: s.status ? "blue" : "red" }}>
              <p>{s.status ? "Availible" : "Not Availible"}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SortingPrice;
