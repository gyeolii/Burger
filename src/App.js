import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Carousel, Navbar, Nav, Container, Row, Card } from 'react-bootstrap';
import BurgerType from './component/BurgerType';
import MainInfo from './component/MainInfo';
import BurgerDetail from './component/BurgerDetail'

function App() {
  let navigate = useNavigate();
  let [burgers, setBurgers] = useState([
    {
      id: 'b01',
      bName: '1955버거',
      imgPath: '/image/1955버거.png',
      mImgPath: './image/m1955버거.png',
      // bgInfo:"부드럽고 고소한 에그 양배추 샐러드에"<br>
      //       "쫄깃 바삭 크로켓 번, 육즙 가득 쇠고기 패티로 풍미 가득한"<br>
      //       "88년 추억의 맛을 담은 버거!"
    },
    {
      id: 'b02',
      bName: '더블 불고기 버거',
      imgPath: './image/더블불고기버거.png',
      mImgPath: './image/m더블불고기버거.png',
    },
    {
      id: 'b03',
      bName: '더블 치즈 버거',
      imgPath: './image/더블치즈버거.png',
      mImgPath: './image/m더블치즈버거.png',
    },
    {
      id: 'b04',
      bName: '더블 필레 오 피쉬',
      imgPath: './image/더블필레오피쉬.png',
      mImgPath: './image/m더블필레오피쉬.png',
    },
    {
      id: 'b05',
      bName: '맥스파이시 상하이 버거',
      imgPath: './image/맥스파이시상하이버거.png',
      mImgPath: './image/m맥스파이시상하이버거.png',
    },
    {
      id: 'b06',
      bName: '맥치킨',
      imgPath: './image/맥치킨.png',
      mImgPath: './image/m맥치킨.png',
    },
    {
      id: 'b07',
      bName: '맥치킨 모짜렐라',
      imgPath: './image/맥치킨모짜렐라.png',
      mImgPath: './image/m맥치킨모짜렐라.png',
    },
    {
      id: 'b08',
      bName: '맥크리스피 디럭스 버거',
      imgPath: './image/맥크리스피디럭스버거.png',
      mImgPath: './image/m맥크리스피디럭스버거.png',
    },
    {
      id: 'b09',
      bName: '맥크리스피 클래식 버거',
      imgPath: './image/맥크리스피클래식버거.png',
      mImgPath: './image/m맥크리스피클래식버거.png',
    },
    {
      id: 'b10',
      bName: '베이컨 토마토 디럭스',
      imgPath: './image/베이컨토마토디럭스.png',
      mImgPath: './image/m베이컨토마토디럭스.png',
    },
    {
      id: 'b11',
      bName: '불고기 버거',
      imgPath: './image/불고기버거.png',
      mImgPath: './image/m불고기버거.png',
    },
    {
      id: 'b12',
      bName: '빅맥',
      imgPath: './image/빅맥.png',
      mImgPath: './image/m빅맥.png',
    },
    {
      id: 'b13',
      bName: '서울 비프 버거',
      imgPath: './image/서울비프버거.png',
      mImgPath: './image/m서울비프버거.png',
    },
    {
      id: 'b14',
      bName: '슈비버거',
      imgPath: './image/슈비버거.png',
      mImgPath: './image/m슈비버거.png',
    },
    {
      id: 'b15',
      bName: '슈슈버거',
      imgPath: './image/슈슈버거.png',
      mImgPath: './image/m슈슈버거.png',
    },
    {
      id: 'b16',
      bName: '에그 불고기 버거',
      imgPath: './image/에그불고기버거.png',
      mImgPath: './image/m에그불고기버거.png',
    },
    {
      id: 'b17',
      bName: '창녕 갈릭 버거',
      imgPath: './image/창녕갈릭버거.png',
      mImgPath: './image/m창녕갈릭버거.png',
    },
    {
      id: 'b18',
      bName: '치즈 버거',
      imgPath: './image/치즈버거.png',
      mImgPath: './image/m치즈버거.png',
    },
    {
      id: 'b19',
      bName: '쿼터 파운더 치즈 버거',
      imgPath: './image/쿼터파운더치즈.png',
      mImgPath: './image/m쿼터파운더치즈.png',
    },
    {
      id: 'b20',
      bName: '필레 오 피쉬',
      imgPath: './image/필레오피쉬.png',
      mImgPath: './image/m필레오피쉬.png',
    },
  ]);
  return (
    <div>
      <div className="main"></div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/" className="mainLogo"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/burger');
              }}>
              Burger
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/store');
              }}>
              Store
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/info');
              }}>
              Info
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <Carousel className="mainImg">
                  {/* 메인사진들 */}
                  <Carousel.Item className="main1" />
                  <Carousel.Item className="main2" />
                  <Carousel.Item className="main3" />
                  {/* <Carousel.Item className="main4" /> */}
                </Carousel>
              </div>
              <MainInfo />
            </>
          }
        />
        <Route
          path="/burger"
          element={
            <div className="burgerstype">
              <div className="burerTypeMain" />
              <Container>
                <Row sm={1} md={3}>
                  {burgers.map((data, i) => {
                    return (
                      <BurgerType
                        key={data.id}
                        burgers={burgers}
                        i={i}
                        burger={data}
                      />
                    );
                  })}
                </Row>
              </Container>
            </div>
          }/>
        <Route path="/burger/detail/:id" element={<BurgerDetail burgers={burgers}/>}/>
        <Route path="/store" />
        <Route path="/info" />
      </Routes>
    </div> //최상단 div
  );
}

export default App;
