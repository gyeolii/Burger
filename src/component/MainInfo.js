import { Card, CardGroup } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './MainInfo.css';

function MainInfo() {
    let navigate = useNavigate();
  return (
    <div className="maininfo">
      <CardGroup>
        <Card
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate('/mainInfo1');
          }}>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + '/image/1653467599860.png'}
          />
          <Card.Body>
            <h5>
              겉바속촉100% 통닭다리살!
              <br />
              먹어봐야 아는 맛! 맥크리스피™출시
            </h5>
          </Card.Body>
        </Card>
        <Card
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate('/mainInfo2');
          }}>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + '/image/1656467182899.jpg'}
          />
          <Card.Body>
            <h5>
              NEW해피스낵,
              <br />
              일상 속 확실한 행복을 즐겨요
            </h5>
          </Card.Body>
        </Card>
        <Card
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate('/mainInfo3');
          }}>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + '/image/1659512755699.jpg'}
          />
          <Card.Body>
            <h5>
              돌아온 한국 마늘의 맛!
              <br />
              창녕 갈릭 버거 재출시!
            </h5>
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
      <CardGroup>
        <Card
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate('/mainInfo4');
          }}>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + '/image/1661337592960.jpg'}
          />
          <Card.Body>
            <h5>
              88년 서울, 풍미 넘치는 맛 그대로!
              <br />
              88서울 비-프 버거 출시
            </h5>
          </Card.Body>
        </Card>
        <Card
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate('/mainInfo5');
          }}>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + '/image/1662529660303.jpg'}
          />
          <Card.Body>
            <h5>
              양상추 수급 불안정에 따른
              <br />
              쿠폰 제공 안내문
            </h5>
          </Card.Body>
        </Card>
        <Card
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate('/mainInfo6');
          }}>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + '/image/1663138164239.jpg'}
          />
          <Card.Body>
            <h5>
              색다른 아침을 원한다면?
              <br />
              NEW 맥그리들
            </h5>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
export default MainInfo;

