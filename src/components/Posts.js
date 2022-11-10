import "./Posts.css";

function Posts(props) {
  console.log(props.text);
  return (
    <>
      {props.text.map((post) => (
        <>
          <div className="post">
            <div className="author">
              <b>@{props.author}</b> - posted {Math.floor(Math.random() * 101)}{" "}
              days ago
            </div>

            <div>{post}</div>
          </div>
        </>
      ))}
    </>
  );
}

export default Posts;
