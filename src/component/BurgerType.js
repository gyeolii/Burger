import { Col, Card, CardGroup, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function BurgerType({ burgers, i, burger }) {
  let navigate = useNavigate();
  // let [burgeres, setBurgeres] = useState([
  //   {
  //     id: 'b01',
  //     bName: '1955버거',
  //     imgPath: './image/1955버거.png',
  //   },
  //   {
  //     id: 'b02',
  //     bName: '더블불고기버거',
  //     imgPath: './image/더블불고기버거.png',
  //   },
  //   {
  //     id: 'b03',
  //     bName: '더블치즈버거',
  //     imgPath: './image/더블치즈버거.png',
  //   },
  //   {
  //     id: 'b04',
  //     bName: '더블필레오피쉬',
  //     imgPath: './image/더블필레오피쉬.png',
  //   },
  //   {
  //     id: 'b05',
  //     bName: '맥스파이시상하이버거',
  //     imgPath: './image/맥스파이시상하이버거.png',
  //   },
  //   {
  //     id: 'b06',
  //     bName: '맥치킨',
  //     imgPath: './image/맥치킨.png',
  //   },
  //   {
  //     id: 'b07',
  //     bName: '맥치킨모짜렐라',
  //     imgPath: './image/맥치킨모짜렐라.png',
  //   },
  //   {
  //     id: 'b08',
  //     bName: '맥크리스피디럭스버거',
  //     imgPath: './image/맥크리스피디럭스버거.png',
  //   },
  //   {
  //     id: 'b09',
  //     bName: '맥크리스피클래식버거',
  //     imgPath: './image/맥크리스피클래식버거.png',
  //   },
  //   {
  //     id: 'b10',
  //     bName: '베이컨토마토디럭스',
  //     imgPath: './image/베이컨토마토디럭스.png',
  //   },
  //   {
  //     id: 'b11',
  //     bName: '불고기버거',
  //     imgPath: './image/불고기버거.png',
  //   },
  //   {
  //     id: 'b12',
  //     bName: '빅맥',
  //     imgPath: './image/빅맥.png',
  //   },
  // ]);

  return (
    <div>
      {/* <CardGroup>
        <Card style={{ width: '360px', heigth: '300px' }}>
          <Card.Img variant="top" src={burgers[i].imgPath} width="300px" height="205px" />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>
              {burgers[i].bName}
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </CardGroup> */}
      <CardGroup style={{ margin: '10px' }}>
        <Card
          style={{ width: '18rem', cursor: 'pointer' }}
          onClick={() => {
            navigate('/burger/detail/' + burger.id);}}>
          <Card.Body>
            <Card.Title style={{ padding: '10px' }}>
              <Card.Img
                variant="top"
                src={burgers[i].mImgPath}
                // width="300px"
                // height="205px"
              />
            </Card.Title>
            <Card.Text
              style={{
                textAlign: 'center',
                fontFamily: 'SLEI',
                fontSize: '25px',
              }}>
              {burgers[i].bName}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default BurgerType;
