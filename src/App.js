import './App.css';
import contacts from './contacts.json'

function App() {
  return (
    <div className="App">
    <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
    </thead>
    <tbody>
      {contacts.slice(0,5).map((contact) => {
        return (
        <tr key={contact.name}>
        <td><img src={contact.pictureUrl} alt='contact' width="100px"/></td><td>{contact.name}</td><td>{contact.popularity.toFixed(2)}</td>
        </tr>
        )
        })}
    </tbody>
    </table>
    </div>
  );
}

export default App;
