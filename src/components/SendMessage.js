import { useState } from 'react'
import validator from 'validator'

const SendMessage = ({onSend}) => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('')
    const [sexe, setSexe] = useState('Homme')
    
    const onSubmit = (e) => {
        e.preventDefault()

        if (!name || !mail || !message){
            alert('Please fill all field')
            return
        }
        if (!validator.isEmail(mail)){
            alert('The mail is invalid')
        }

        onSend({name, mail, message, sexe})
        setName('')
        setMail('')
        setMessage('')
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <label htmlFor="sexe">Sexe: </label>

        <select id="sexe" value={sexe} onChange={(e) => setSexe(e.target.value)}>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
            <option value="Autres">Autres</option>
        </select>

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
            <label>Adress email</label>
            <input
                type="email"
                placeholder="Adress mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
            />
        </div>

        <div className="form-control">
            <label>Message:</label>

            <textarea
                className="my-textarea"
                rows="4" cols="50"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ecrivez votre message ici"
            >
            </textarea>
        </div>

        <input type="submit" value="Envoyer" className='btn'/>
    </form>
  )
}

export default SendMessage
