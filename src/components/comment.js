import "../css/comment.css";

function Comment(props) {
  console.log(props);
  return (
    <>
      <p style={{ color: "orange", fontStyle: "italic" }}>{props.Comment}</p>
    </>
  );
}

export default Comment;
