import { Input } from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import { Select } from '../../components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <Input placeholder="Nome" />
      <Select>
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="Twitter">Twitter</option>
      </Select>
    </>
  );
}
