import './App.css';
import contacts from './contacts.json'
import { useState } from 'react'

function App() {
  const [ contactsList, setContactsList ] = useState(contacts.slice(0,5))

  const handleAdd = () =>{
    if(contactsList.length === contacts.length) return;
    const randomNumber = Math.floor(Math.random() * contacts.length)
    const randomContact = contacts[randomNumber]

    const contactsId = contactsList.map((contact)=>contact.id)
    if(contactsId.includes(randomContact.id)) return handleAdd()

    setContactsList([...contactsList, randomContact])
  }
  const handleSortByPopularity = () => {
    const sorted = [...contactsList].sort((a, b) => a.popularity > b.popularity ? 1 : -1)
    setContactsList(sorted)
  }
  const sortByName = () => {
    const sorted = [...contactsList].sort((a, b) => a.name.localeCompare(b.name))
    setContactsList(sorted)
  }
  const handleDelete = (id) => {
    const filterArray = contactsList.filter((contact) => contact.id !== id)
    setContactsList(filterArray)

  }

  return (
    <div className="App">
    <button onClick={handleAdd}>Add Random Contact</button>
    <button onClick={handleSortByPopularity}>Sort by popularity</button>
    <button onClick={sortByName}>Sort by name</button>
    <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
        <th>Actions</th>
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
        <td><button onClick={() => handleDelete(contact.id)}>Delete</button></td>
        </tr>
        )
        })}
    </tbody>
    </table>
    </div>
  );
}

export default App;
