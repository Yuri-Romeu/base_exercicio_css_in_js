import { LinkVaga, Vaga as StyeledVaga, TitleVaga } from './styles';

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Vaga = (props: Props) => (
  <StyeledVaga>
    <TitleVaga>{props.titulo}</TitleVaga>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <LinkVaga href="#">Ver detalhes e candidatar-se</LinkVaga>
  </StyeledVaga>
);

export default Vaga;
