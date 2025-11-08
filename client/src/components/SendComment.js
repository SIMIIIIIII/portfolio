import { useState } from "react";

const SendComment = ({onSend, isSubmitting}) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('')
      
    const onSubmit = (e) => {
        e.preventDefault()

        if (!comment){
            alert('Please type your your comment')
            return
        }
          
        onSend(name, comment)
        setComment('')
        setName('');
    }
  
    return (
        <form className="add-form" onSubmit={onSubmit}>

        <div className="form-control">
            <label>Nom et Prenom</label>
            <input
                type="text"
                placeholder="Nom & Prenom"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>

        <div className="form-control">
            <label>Message:</label>
            <textarea
                className="my-textarea"
                rows="4" cols="50"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ecrivez votre message ici"
            >   
            </textarea>
        </div>
        
        <input
            type="submit"
            value={isSubmitting? "Submitting.." : "Commenter"}
            className='btn'
        />
      </form>
    )
}

export default SendComment
