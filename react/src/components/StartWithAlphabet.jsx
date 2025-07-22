
// Show all products whose name starts with 'a' or 'A'
function StartWithAlphabet({ products2 }) {
  const filterProduct = products2.filter((p) =>
    p.name.toLowerCase().startsWith('l')
  );
  // console.log(filterProduct);
  return (
    <div className="top-div">
        <h1>Products whose name starts with 'l' or 'L'</h1>
        <div className="container">
            {filterProduct.map((p) => (
                <div className="main-container">
                    <h2>{p.name}</h2>
                    <p>Price : {p.price}</p>
                    <span style={{color : p.status ? 'blue' : 'red'}}>
                    <p>{p.status ? 'Availible' : 'Not Availible'}</p>
                    </span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default StartWithAlphabet;
