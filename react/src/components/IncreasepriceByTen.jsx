
// 3) Show all products after increasing their price by 10%.

function IncreasePriceByTen({ products2 }) {
  let percentage = 10;
  let updatePrice = products2.map((p) => ({
    ...p,
    increasedPrice: (p.price * (1 + percentage / 100)).toFixed(2),
  }));
  // console.log(updatePrice);
  return (
    <div className="top-div">
      <h1>Products after increasing their price by 10%.</h1>
      <div className="container">
        {updatePrice.map((p) => (
          <div className="main-container">
            <h2>{p.name}</h2>
            <p>Original Price : {p.price}</p>
            <p>Increased Price : {p.increasedPrice}</p>
            <span style={{ color: p.status ? "blue" : "red" }}>
              <p>{p.status ? "Availible" : "Not Availible"}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IncreasePriceByTen;
