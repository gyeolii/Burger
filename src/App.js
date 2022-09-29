import logo from './logo.svg';
import './App.css';
import './component/MainInfo.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Carousel, Navbar, Nav, Container, Row, Card } from 'react-bootstrap';
import BurgerType from './component/BurgerType';
import MainInfo from './component/MainInfo';
import BurgerDetail from './component/BurgerDetail'
import ReactPlayer from 'react-player';

function App() {
  let navigate = useNavigate();
  let [burgers, setBurgers] = useState([
    {
      id: 'b01',
      bName: '1955버거',
      imgPath: '/image/1955버거.png',
      mImgPath: './image/m1955버거.png',
      bgInfo:
        ' 113g 두툼한 순 쇠고기 패티, \n 특별한 1955 소스에 깊은 풍미의 그릴드 어니언까지! \n 맥도날드가 처음 생긴 1955년의 맛을 담은 \n 영원한 오리지널 1955 버거',
      nutrition: {
        g: '258g',
        kcal: '537kcal',
        sugar: '13g',
        protein: '27g',
        fat: '9g',
        na: '809mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,우유,대두,밀,돼지고기,토마토,쇠고기) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin:
        '쇠고기:호주산 \n 돼지고기(베이컨):외국산(아일랜드,스페인,캐나다)',
    },

    {
      id: 'b02',
      bName: '더블 불고기 버거',
      imgPath: '/image/더블불고기버거.png',
      mImgPath: './image/m더블불고기버거.png',
      bgInfo:
        ' 진한 불고기 소스의 패티가 두 장! \n 여기에 고소한 치즈와 마요네즈,\n신선한 양상추를 곁들인 깊고 풍부한 맛.',
      nutrition: {
        g: '237g',
        kcal: '636kcal',
        sugar: '14g',
        protein: '26g',
        fat: '13g',
        na: '997mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,우유,대두,밀,돼지고기,조개,굴) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '돼지고기:국내산 \n *제주 지역의 경우, 함박패티:덴마크산으로 제공',
    },

    {
      id: 'b03',
      bName: '더블 치즈 버거',
      imgPath: '/image/더블치즈버거.png',
      mImgPath: './image/m더블치즈버거.png',
      bgInfo:
        ' 고소하고 부드러운 치즈와 100% 순 쇠고기 패티가 두개 \n 맥도날드만의 더블 치즈버거!!',
      nutrition: {
        g: '206g',
        kcal: '584kcal',
        sugar: '8g',
        protein: '27g',
        fat: '12g',
        na: '896mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(우유,대두,밀,토마토,쇠고기) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '쇠고기:호주산',
    },

    {
      id: 'b04',
      bName: '더블 필레 오 피쉬',
      imgPath: '/image/더블필레오피쉬.png',
      mImgPath: './image/m더블필레오피쉬.png',
      bgInfo:
        '100% 알래스카 폴락 패티의 바삭함, \n 맥도날드의 타르타르소스와 부드러운 스팀번이 \n 조화로운 더블 필레 오 피쉬',
      nutrition: {
        g: '200g',
        kcal: '481kcal',
        sugar: '7g',
        protein: '23g',
        fat: '5g',
        na: '823mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,우유,대두,밀) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '명태살필렛75%:태국산',
    },

    {
      id: 'b05',
      bName: '맥스파이시 상하이 버거',
      imgPath: '/image/맥스파이시상하이버거.png',
      mImgPath: './image/m맥스파이시상하이버거.png',
      bgInfo:
        ' 매콤한 시즈닝을 입힌 100% 닭가슴 통살 위에 \n아삭아삭한 양상추와 신선한 토마토~ 겉은 바삭, \n 속은 부드러운 치킨 패티의 매콤함으로 \n입맛도 기분도 화끈하게!',
      nutrition: {
        g: '235g',
        kcal: '494kcal',
        sugar: '8g',
        protein: '21g',
        fat: '3g',
        na: '891mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,대두,밀,토마토,닭고기) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '닭고기:국내산',
    },

    {
      id: 'b06',
      bName: '맥치킨',
      imgPath: '/image/맥치킨.png',
      mImgPath: './image/m맥치킨.png',
      bgInfo:
        ' 바삭한 치킨 패티, 고소한 화이트 마요 소스와 \n 아삭한 양상추가 함께!\n 더 업그레이드 된 맛으로 돌아온 맥치킨',
      nutrition: {
        g: '197g',
        kcal: '483kcal',
        sugar: '7g',
        protein: '18g',
        fat: '3g',
        na: '999mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,대두,밀,닭고기) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '닭고기:국내산',
    },

    {
      id: 'b07',
      bName: '맥치킨 모짜렐라',
      imgPath: '/image/맥치킨모짜렐라.png',
      mImgPath: './image/m맥치킨모짜렐라.png',
      bgInfo:
        ' 든든한 맥치킨에 골든 모짜렐라 치즈 스틱 2개와 \n 매콤한 아라비아따 소스를 더해 \n 강렬하게 재탄생한 맥치킨 모짜렐라',
      nutrition: {
        g: '276g',
        kcal: '686kcal',
        sugar: '16g',
        protein: '27g',
        fat: '6g',
        na: '1548mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,우유,대두,밀,토마토,닭고기) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '닭고기:국내산',
    },

    {
      id: 'b08',
      bName: '맥크리스피 디럭스 버거',
      imgPath: '/image/맥크리스피디럭스버거.png',
      mImgPath: './image/m맥크리스피디럭스버거.png',
      bgInfo:
        ' 100%  통닭다리살 겉바속촉 케이준 치킨 패티, \n 촉촉한 포테이포 브리오쉬 번, 스페셜 스모키 소스가 \n 선사하는 놀랍도록 새로운 맛의 치킨 버거!',
      nutrition: {
        g: '266g',
        kcal: '594kcal',
        sugar: '14g',
        protein: '23g',
        fat: '5g',
        na: '1172mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,우유,대두,밀,토마토,닭고기,쇠고기) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '닭고기:브라질산',
    },

    {
      id: 'b09',
      bName: '맥크리스피 클래식 버거',
      imgPath: '/image/맥크리스피클래식버거.png',
      mImgPath: './image/m맥크리스피클래식버거.png',
      bgInfo:
        ' 100% 통닭다리살 겉바속촉 케이준 치킨 패티! \n 치킨 버거 본연의 맛에 충실한 클래식 버거',
      nutrition: {
        g: '206g',
        kcal: '584kcal',
        sugar: '13g',
        protein: '23g',
        fat: '5g',
        na: '1171mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,우유,대두,밀,토마토,닭고기,쇠고기) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '닭고기:브라질산',
    },

    {
      id: 'b10',
      bName: '베이컨 토마토 디럭스',
      imgPath: '/image/베이컨토마토디럭스.png',
      mImgPath: './image/m베이컨토마토디럭스.png',
      bgInfo:
        ' 두 장의 100% 순 쇠고기 패티에 그릴에 구워 \n 더욱 고소한 1장의 베이컨을 얹고, \n 신선한 토마토와 양상추, \n 매콤달콤한 스위트 칠리 소스. 치즈, 마요네즈를 더해 \n 더욱 풍부하고 신선한 맛의 프리미엄 버거',
      nutrition: {
        g: '242g',
        kcal: '545kcal',
        sugar: '14g',
        protein: '27g',
        fat: '10g',
        na: '839mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,우유,대두,밀,돼지고기,토마토,쇠고기) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin:
        '쇠고기:호주산 \n 돼지고기(베이컨):외국산(아일랜드,스페인,캐나다)',
    },

    {
      id: 'b11',
      bName: '불고기 버거',
      imgPath: '/image/불고기버거.png',
      mImgPath: './image/m불고기버거.png',
      bgInfo:
        ' 한국인의 입맛에 딱 맞는 불고기 소스에 잘 재운 패티와 \n 고소한 마요네즈, 신선한 양상추의 맛있는 조합',
      nutrition: {
        g: '167g',
        kcal: '409kcal',
        sugar: '14g',
        protein: '14g',
        fat: '6g',
        na: '669mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,대두,밀,돼지고기,조개,굴) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin:
        '돼지고기:국내산 \n *제주 지역의 경우, 함박패티:덴마크산으로 제공',
    },

    {
      id: 'b12',
      bName: '빅맥',
      imgPath: '/image/빅맥.png',
      mImgPath: './image/m빅맥.png',
      bgInfo:
        ' 100% 순 쇠고기 패티 두 장에 빅맥만의 특별한 소스, \n 입안에서 살살 녹는 치즈와 신선한 양상추, 양파, 그리고 피클까지. \n 50년 넘게 전 세계인의 입맛을 사로 잡은 버거의 명대사',
      nutrition: {
        g: '223g',
        kcal: '583kcal',
        sugar: '7g',
        protein: '27g',
        fat: '11g',
        na: '902mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,우유,대두,밀,쇠고기) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '쇠고기:호주산',
    },

    {
      id: 'b13',
      bName: '서울 비프 버거',
      imgPath: '/image/서울비프버거.png',
      mImgPath: './image/m서울비프버거.png',
      bgInfo:
        ' 부드럽고 고소한 에그 양배추 샐러드에 \n 쫄깃 바삭 크로켓 번, 육즙 가득 쇠고기 패티로 풍미 가득한 \n 88년 추억의 맛을 담은 버거!',
      nutrition: {
        g: '224g',
        kcal: '521kcal',
        sugar: '11g',
        protein: '21g',
        fat: '7g',
        na: '1214mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,대두,밀,토마토,쇠고기,조개,굴) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '쇠고기:호주산',
    },

    {
      id: 'b14',
      bName: '슈비 버거',
      imgPath: '/image/슈비버거.png',
      mImgPath: './image/m슈비버거.png',
      bgInfo: ' 탱~글한 통새우살에 비프 패티를 더해 푸짐하게~',
      nutrition: {
        g: '269g',
        kcal: '563kcal',
        sugar: '15g',
        protein: '21g',
        fat: '5g',
        na: '950mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,우유,대두,밀,토마토,새우,쇠고기,굴) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '새우패티:태국산 \n 쇠고기:호주산',
    },

    {
      id: 'b15',
      bName: '슈슈 버거',
      imgPath: '/image/슈슈버거.png',
      mImgPath: './image/m슈슈버거.png',
      bgInfo: ' 탱~글한 통새우살 가득~ 슈슈 버거!',
      nutrition: {
        g: '224g',
        kcal: '432kcal',
        sugar: '12g',
        protein: '13g',
        fat: '1.9g',
        na: '758mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,우유,대두,밀,토마토,새우,쇠고기,굴) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '새우패티:태국산',
    },

    {
      id: 'b16',
      bName: '에그 불고기 버거',
      imgPath: '/image/에그불고기버거.png',
      mImgPath: './image/m에그불고기버거.png',
      bgInfo: ' 불고기 버거에 국내산 1+등급 계란을 더해 \n 맛의 정점을 찍다!',
      nutrition: {
        g: '222g',
        kcal: '492kcal',
        sugar: '14g',
        protein: '21g',
        fat: '7g',
        na: '743mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,대두,밀,돼지고기,조개,굴) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin:
        '돼지고기:국내산 \n *제주 지역의 경우, 함박패티:덴마크산으로 제공',
    },

    {
      id: 'b17',
      bName: '창녕 갈릭 버거',
      imgPath: '/image/창녕갈릭버거.png',
      mImgPath: './image/m창녕갈릭버거.png',
      bgInfo:
        ' 100% 국산 창녕 햇마늘이 듬뿍 들어간 마늘 토핑과 \n 마늘 아이올리 소스, 그리고 순 쇠고기 패티 2장의 완벽한 맛!',
      nutrition: {
        g: '270g',
        kcal: '674kcal',
        sugar: '19g',
        protein: '27g',
        fat: '12g',
        na: '949mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,우유,대두,밀,토마토,쇠고기,굴) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '쇠고기:호주산',
    },

    {
      id: 'b18',
      bName: '치즈 버거',
      imgPath: '/image/치즈버거.png',
      mImgPath: './image/m치즈버거.png',
      bgInfo:
        ' 고소하고 부드러운 치즈와 100% 순 쇠고기 패티, \n 맥도날드만의 심플한 클래식 버거',
      nutrition: {
        g: '114g',
        kcal: '317kcal',
        sugar: '7g',
        protein: '16g',
        fat: '6g',
        na: '612mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(우유,대두,밀,토마토,쇠고기) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '쇠고기:호주산',
    },

    {
      id: 'b19',
      bName: '쿼터 파운더 치즈 버거',
      imgPath: '/image/쿼터파운더치즈.png',
      mImgPath: './image/m쿼터파운더치즈.png',
      bgInfo:
        ' 쿼터파운더라는 이름에서 알 수 있듯이 \n 두 배 이상 커진 1/4파운드(113g)비프와 \n 부드러운 치즈 두 장의 환상궁합! \n 두툼한 순 쇠고기 패티와 신선한 치즈의 풍부한 맛으로 \n 세계적으로 사랑받고 있는 맥도날드의 대표적인 프리미엄 버거',
      nutrition: {
        g: '198g',
        kcal: '534kcal',
        sugar: '10g',
        protein: '31g',
        fat: '13g',
        na: '966mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(우유,대두,밀,토마토,쇠고기) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '쇠고기:호주산',
    },
    
    {
      id: 'b20',
      bName: '필레 오 피쉬',
      imgPath: '/image/필레오피쉬.png',
      mImgPath: './image/m필레오피쉬.png',
      bgInfo:
        ' 100% 알래스카 폴락 패티의 바삭함, \n 맥도날드의 타르타르소스와 부드러운 스팀번이 조화로운 필레 오 피쉬',
      nutrition: {
        g: '137g',
        kcal: '342kcal',
        sugar: '6g',
        protein: '14g',
        fat: '3g',
        na: '595mg',
      },
      allergy:
        '알레르기 유발 가능 식재료(난류,우유,대두,밀) \n *일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.',
      placeOfOrigin: '명태살필렛75%:태국산',
    },
  ]);
  return (
    <div className="app">
      <div className="mainmenu">
        <div className="main"></div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href={process.env.PUBLIC_URL+"/"} className="mainLogo"></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate('/burger');
                }}>
                Burger
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/drive');
                }}>
                Drive Thru
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/delivery');
                }}>
                Delivery
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <Carousel className="mainImg">
                  <Carousel.Item className="main1" />
                  <Carousel.Item className="main2" />
                  <Carousel.Item className="main3" />
                </Carousel>
              </div>
              <MainInfo />
            </>
          }
        />
        <Route
          path="/burger"
          element={
            <div>
              <div className="burerTypeMain">
                <h2 className="burerTypeMainTitel">햄버거</h2>
                <h6 className="burerTypeMainText">
                  빅맥에서 맥스파이시 상하이버거까지
                  <br />
                  주문 즉시 바로 조리해 더욱 맛있는 다양한 버거를 소개합니다.
                </h6>
              </div>

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
          }
        />
        <Route
          path="/burger/detail/:id"
          element={
            <div>
              <div className="burerTypeMain">
                <h2 className="burerTypeMainTitel">햄버거</h2>
                <h6 className="burerTypeMainText">
                  빅맥에서 맥스파이시 상하이버거까지
                  <br />
                  주문 즉시 바로 조리해 더욱 맛있는 다양한 버거를 소개합니다.
                </h6>
              </div>
              <BurgerDetail burgers={burgers} />
            </div>
          }
        />
        <Route
          path="/drive"
          element={
            <div>
              <div className="driveImage">
                <h1 className="driveTitle">드라이브</h1>
                <h6 className="driveText">
                  운전 중에도 24시간 간편하고 빠르게! <br />
                  차 안에서 주문하고, 차 안에서 바로 받아 <br />
                  맛있는 햄버거를 즐겨보세요.
                </h6>
              </div>
              <ReactPlayer
                className="mcDrive"
                url={'https://youtu.be/BiMkqfVNmnk'}
                width="900px"
                heigth="900px"
                playing={true}
                muted={true}
                controls={true}></ReactPlayer>
            </div>
          }
        />
        <Route
          path="/delivery"
          element={
            <div className="Delivery" style={{ textAlign: 'center' }}>
              <div className="deliveryImage">
                <h1 className="deliveryTitle">딜리버리</h1>
                <p className="deliveryText">우리집에 딜리버리 배달이 되나요?</p>
              </div>
              <fieldset className="addr">
                <input
                  type="text"
                  className="input1"
                  placeholder="주소를 입력해주세요."
                />
                <button className="addrFind">주소찾기</button>
                <br />
                <input
                  type="text"
                  className="input2"
                  placeholder="상세주소를 입력해주세요."
                />
                <br />
                <input type="text" className="input3" />
                <span className="input3_1">동</span>
                <input type="text" className="input4" />
                <span className="input4_1">호</span>
                <p className="inputText">
                  *아파트의 경우 동, 호수를 입력하셔야 정확한 검색이 가능합니다.
                </p>
                <button className="search">검색하기</button>
              </fieldset>
              <ul className="deliveruInfo">
                <li>
                  매장 별 무료 배달 주문 금액 및 소액주문비는 다르게 운영될 수
                  있으며, <br />
                  주문 시 결제 페이지에서 미리 확인 하실 수 있습니다.
                </li>
                <li>딜리버리 가격은 매장과 상이합니다.</li>
                <li>
                  배달 가능 구역 내에서도 기상조건이나 기타 매장의 사정에 따라 배달 서비스 <br />
                  이용이 어려울 수 있습니다.
                </li>
                <li>
                  주문이 밀리는 시간대에는 배달이 다소 지연될 수 있습니다.
                  <br />
                  고객님의 너그러운 이해 부탁 드립니다.
                </li>
                <li>
                  메뉴 주문 시 제공 되는 케찹류나 기타 물품의 경우 기본 제공
                  수량 기준으로
                  <br /> 배달하여 드립니다.
                </li>
                <li>맥딜리버리의 운영 시간은 매장과 상이할 수 있습니다.</li>
              </ul>
            </div>
          }
        />
        <Route path="/mainInfo1" element={<div className="mainInfo1" />} />
        <Route path="/mainInfo2" element={<div className="mainInfo2" />} />
        <Route path="/mainInfo3" element={<div className="mainInfo3" />} />
        <Route path="/mainInfo4" element={<div className="mainInfo4" />} />
        <Route path="/mainInfo5" element={<div className="mainInfo5" />} />
        <Route path="/mainInfo6" element={<div className="mainInfo6" />} />
      </Routes>
      <div className="footer">
        <p>
          휴먼교육센터 : 6강의실
          <br />
          대표자 : 조은결
          <br />
          대표전화번호 : 010-1234-5678 <br />
          Copyrigthⓒ 2011 휴먼교육센터 All Rights Recerved.
          <br />
        </p>
      </div>
    </div> //최상단 div
  );
}

export default App;
