import { FaCommentAlt, FaMinus, FaWindowClose } from 'react-icons/fa';
import Comment from '../components/Comment';
import SendComment from '../components/SendComment';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showComments, setShowComment] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/comments`);
        if (!response.ok) throw new Error('Failed to fetch comments');
        const data = await response.json();
        setComments(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComments();
  }, []);

  const onAdd = async (name, comment) => {
    if (!comment.trim()) {
      setError('Comment is required');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, comment }),
      });
      if (!response.ok) throw new Error('Failed to create comment');
      const data = await response.json();
      setComments([...comments, data]);
    } catch (error) {
      setError(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onToggle = () => {setShowComment(!showComments)}


  return (
    <div className="comment">

      {showComments ? (
        <p>
          <h2>
            Comments &ensp;
            <FaWindowClose onClick={onToggle} color='red'/>
          </h2>
        </p>
        ) : (
          <h1>
            <FaCommentAlt onClick={onToggle} color='blue'/>
          </h1>
        )
      }
      <br></br>

      {showComments && (
        <p>
         
          {error && (<p style={{ color: 'red' }}> {error} </p>)}
          
          {isLoading ? (
            <p>Loading...</p>
            ) : (
              comments.map((comment) => (
                <Comment key={comment._id} comment={comment} />
              ))
            )}
            <SendComment onSend={onAdd} isSubmitting={isSubmitting} />
        </p>
        )
      }
    </div>
  );
};

export default Comments;