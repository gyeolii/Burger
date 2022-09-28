import { Card, CardGroup} from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';

function BurgerType({ burgers, i, burger }) {
  let navigate = useNavigate();
  return (
    <div>
      <CardGroup className="card" style={{ margin: '10px' }}>
        <Card
          style={{
            width: '18rem',
            cursor: 'pointer'
          }}
          onClick={() => {
            navigate('/burger/detail/' + burger.id);
          }}>
          <Card.Body>
            <Card.Title style={{ padding: '10px' }}>
              <Card.Img variant="top" src={burgers[i].mImgPath} />
            </Card.Title>
            <Card.Text
              style={{
                textAlign: 'center',
                fontFamily: 'ROKAF_Bold',
                fontSize: '20px',
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
