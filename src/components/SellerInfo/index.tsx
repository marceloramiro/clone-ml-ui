import React from 'react';

import { 
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More
} from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>
      <LocationCard>
        <LocationIcon />
        <div>
          <p>Localização</p>
          <strong>Mogi das cruzes, São Paulo</strong>
        </div>
      </LocationCard>
      <ReputationCard>
        <ReputationThermometer>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="active"></li>
        </ReputationThermometer>
        <ReputationRow>
          <div>
            <strong>4568</strong>
            <span>vendas nos ultimos 3 meses</span>
          </div>

          <div>
            <strong><SupportIcon /></strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong><ClockIcon /></strong>
            <span>Entrega os produtos dentro do prazo</span>
          </div>
        </ReputationRow>
        <More href="#">Ver mais dados deste vendedor</More>
      </ReputationCard>
    </Container>
  );
};

export default SellerInfo;
