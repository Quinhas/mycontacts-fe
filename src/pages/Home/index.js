import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import {
  Card, InputSearchContainer, Header, ListHeader,
} from './styles';

import Loader from '../../components/Loader';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import delay from '../../utils/delay';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('ASC');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toUpperCase()).includes(searchTerm.toUpperCase())), [contacts, searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        await delay(2000);

        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log('erro', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'ASC' ? 'DESC' : 'ASC'));
  }

  function handleChangeSearchTerm(ev) {
    setSearchTerm(ev.target.value);
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquise pelo nome..."
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {' '}
          {filteredContacts.length === 1 ? 'contato' : 'contatos'}

        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      {filteredContacts.length > 0
        && (
          <ListHeader orderBy={orderBy}>
            <button type="button" onClick={handleToggleOrderBy} disabled={isLoading}>
              <span>Nome</span>
              <img src={arrow} alt="Arrow" />
            </button>
          </ListHeader>
        )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
                <small>{contact.category_name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}

    </>
  );
}
