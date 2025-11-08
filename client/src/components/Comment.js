const Comment = ({comment}) => {
  return (
    <>
      from <h4>{comment.name}</h4>
      <div>{comment.comment}</div>
      <p>---------------------------------------------</p>
      <br></br>
    </>
  )
}

export default Comment
