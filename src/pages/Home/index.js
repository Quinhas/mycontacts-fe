/* eslint-disable react/jsx-one-expression-per-line */
import {
  useCallback, useEffect, useMemo, useState
} from 'react';
import { Link } from 'react-router-dom';
import {
  Card, EmptyListContainer, ErrorContainer, Header, InputSearchContainer,
  ListHeader, SearchNotFoundContainer
} from './styles';

import Button from '../../components/Button';
import Loader from '../../components/Loader';

import emptyBox from '../../assets/images/empty-box.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';
import sad from '../../assets/images/sad.svg';
import ContactsService from '../../services/ContactsService';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('ASC');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toUpperCase()).includes(searchTerm.toUpperCase())), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsService.listContacts(orderBy);
      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'ASC' ? 'DESC' : 'ASC'));
  }

  function handleChangeSearchTerm(ev) {
    setSearchTerm(ev.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            value={searchTerm}
            type="text"
            placeholder="Pesquise pelo nome..."
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header
        justifyContent={
          // eslint-disable-next-line no-nested-ternary
          hasError
            ? 'flex-end'
            : (
              contacts.length > 0
                ? 'space-between'
                : 'center'
            )
        }
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {' '}
            {filteredContacts.length === 1 ? 'contato' : 'contatos'}

          </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad" />

          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tentar Novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty Box" />
              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>&quot;Novo Contato&quot;</strong> à cima
                para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier Question" />
              <span>
                Nenhum resultado foi encontrado para <strong>&quot;{searchTerm}&quot;</strong>.
              </span>
            </SearchNotFoundContainer>
          )}

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
      )}

    </>
  );
}
