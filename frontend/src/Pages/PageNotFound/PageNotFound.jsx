const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const h2Style = {
  fontSize: "150px",
  color: "#ffd700",
};

const pageNotFound = () => {
  return (
    <div style={divStyle}>
      <h1 style={h2Style}>404</h1>
      <p>Page not found</p>
    </div>
  );
};

export default pageNotFound;
