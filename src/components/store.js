import React from "react";

function Store() {
  return (
    <div className="store" style={{ padding: "20px", textAlign: "center" }}>
      <h2>Our Products</h2>
      <div className="product" style={{ marginBottom: "30px" }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/product1.jpg`}
          alt="Product 1"
          style={{ width: "200px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
        />
        <p>Product 1 - $20</p>
        <a
          href="affiliate-link-1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 20px",
            backgroundColor: "#5C6BC0",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Buy Now
        </a>
      </div>
      <div className="product" style={{ marginBottom: "30px" }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/product2.jpg`}
          alt="Product 2"
          style={{ width: "200px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
        />
        <p>Product 2 - $30</p>
        <a
          href="affiliate-link-2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 20px",
            backgroundColor: "#5C6BC0",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Buy Now
        </a>
      </div>
      <div className="product" style={{ marginBottom: "30px" }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/product3.jpg`}
          alt="Product 3"
          style={{ width: "200px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
        />
        <p>Product 3 - $40</p>
        <a
          href="affiliate-link-3"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 20px",
            backgroundColor: "#5C6BC0",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default Store;
