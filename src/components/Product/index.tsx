import React from 'react';

import tshirtimage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo'
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtimage} />
          </Gallery>
          <Info />
        </Column>

        <Column>
          {/* <ProductAction/> */}
          <SellerInfo/>
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra Garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lorem at dui faucibus dignissim. Sed elementum lorem eros, at sollicitudin velit bibendum in. Aliquam lacinia lorem dolor, at pharetra mi tempus id. Sed id odio dolor. Donec porttitor finibus lacus. Praesent sem neque, blandit nec laoreet a, pretium eget mauris. Sed vitae rutrum velit. Morbi a sagittis lectus. Vivamus vitae eros cursus, fringilla sapien sed, gravida nibh. Proin maximus purus at mauris tristique laoreet. Integer a dui id quam pretium aliquam eget sed augue.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Sed placerat fermentum elit. Nulla facilisi. Pellentesque ullamcorper vitae eros eget iaculis. Mauris vel aliquet leo, id rutrum nisl. Ut maximus ultrices ipsum non volutpat. Suspendisse feugiat quam nisl, quis lobortis tortor ullamcorper in. Aliquam erat volutpat. Sed a leo magna. In molestie efficitur fringilla. Fusce nisi odio, commodo quis erat nec, efficitur fermentum dui. In dapibus pharetra ante sit amet feugiat. Cras sit amet congue magna.
    </p>
  </Description>
)

export default Product;
