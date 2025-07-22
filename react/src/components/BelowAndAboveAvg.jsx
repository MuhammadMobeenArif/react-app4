
// 6) Show all products with price labeled as (Below average or Above average)

function BelowAndAboveAvg({ products2 }) {
  let total = products2.reduce((acc, curr) => acc + curr.price, 0);
  console.log(total);
  let avg = total / products2.length;
  return (
    <div className="top-div">
        <h1>Show all products with price labeled as (Below average or Above average)</h1>
      <div className="container">
        {products2.map((p) => (
          <div className="main-container">
            <h2>{p.name}</h2>
            <p>Price : {p.price}</p>
            <span style={{ color: p.price > avg ? "green" : "red" }}>
            <p>{p.price > avg ? 'Above Average' : 'Below Average'}</p>
            </span>
            <span style={{ color: p.status ? "blue" : "red" }}>
              <p>{p.status ? "Availible" : "Not Availible"}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BelowAndAboveAvg;
