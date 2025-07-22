
// 5) Show top 3 most expensive products
function ThreeMostExpProduct({ products2 }) {
  let sortData = [...products2].sort((a, b) => b.price - a.price);
  // console.log(sortData);
  let filterData = sortData.slice(0, 3);
  // console.log(filterData);
  return (
    <div className="top-div">
      <h1>Show top 3 most expensive products</h1>
      <div className="container">
        {filterData.map((p) => (
          <div className="main-container">
            <h2>{p.name}</h2>
            <p>Price : {p.price}</p>
            <span style={{ color: p.status ? "blue" : "red" }}>
              <p>{p.status ? "Availible" : "Not Availible"}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThreeMostExpProduct;
