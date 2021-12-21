function ImgDisplay(props) {
  console.log(props.text);
  return (
    <div className="prviRed">
      <button>
        <img src={props.text} alt="" />{" "}
      </button>
    </div>
  );
}
export default ImgDisplay;
