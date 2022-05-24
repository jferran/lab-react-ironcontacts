import './App.css';
import contacts from './contacts.json'
import { useState } from 'react'

function App() {
  const [ contactsList, setContactsList ] = useState(contacts.slice(0,5))

  const handleAdd = () =>{
    //if(contactsList.length === contacts.length) return;
    const randomNumber = Math.floor(Math.random() * contacts.length)
    const randomContact = contacts[randomNumber]

    //const contactsId = contacts.map((contact)=>contact.id)
    //if(contactsId.includes(randomContact.id)) return handleAdd()

    setContactsList([...contactsList, randomContact])
  }

  return (
    <div className="App">
    <button onClick={handleAdd}>Add Random Contact</button>
    <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
      </tr>
    </thead>
    <tbody>
      {contactsList.map((contact) => {
        return (
        <tr key={contact.id}>
        <td><img src={contact.pictureUrl} alt='contact' width="100px"/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td>{contact.wonOscar ? '🏆' : '' }</td>
        <td>{contact.wonEmmy ? '🏆' : '' }</td>
        </tr>
        )
        })}
    </tbody>
    </table>
    </div>
  );
}

export default App;
