import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import CardContact from './components/CardContact/CardContact';
import NavSearch from './components/NavSearch/NavSearch';

function App() {

  const [data, setData] = useState([]);

  const [search, setSearch] = useState();

  const [load, setLoad] = useState(false)


  const getContacts = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/contacts`);
      setData(response.data)
    } catch (error) {
      return null;
    }
  }

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/contacts/${id}`);
      setLoad(!load);
    } catch (error) {
      return null;
    }
  }

  const updateContact = async (id) => {
    await axios.put(`http://localhost:3000/contacts/${id}`);
  }


  useEffect(() => {
    getContacts();
  }, [search, load])


  const valueSearch = data.filter(contact => contact.name === search)

  return (
    <div className="App">

      {/* search */}
      <NavSearch
        setSearch={setSearch}
        setLoad={() => setLoad(!load)}
      />

      {/* main */}

      {search ? (
        valueSearch.map((contact, index) => (
          <CardContact
            idContact={contact.id}
            setLoad={() => setLoad(!load)}
            key={index}
            name={contact.name}
            phone={contact.phone}
            birthDay={contact.date_birth}
            address={contact.address}
            email={contact.email}

            onClickDelete={() => deleteContact(contact.id)}
            onClickUpdate={updateContact}
          />
        ))
      ) :
        (
          data.map((contact, index) => (
            <CardContact
              idContact={contact.id}
              setLoad={() => setLoad(!load)}
              key={index}
              name={contact.name}
              phone={contact.phone}
              birthDay={contact.date_birth}
              address={contact.address}
              email={contact.email}

              onClickDelete={() => deleteContact(contact.id)}
              onClickUpdate={updateContact}
            />
          ))
        )

      }


    </div>
  );
}

export default App;
