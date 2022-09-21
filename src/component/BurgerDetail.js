import { Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function BurgerDetail({burgers}) {
    let {id} = useParams();
    let bgdetail = burgers.find((data,i)=>{
        return data.id == id;
    })
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + bgdetail.imgPath} />
        <Card.Body>
          <Card.Title>{bgdetail.bName}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        {/* <ListGroup className="list-group-flush">
          <ListGroup.Item>{foodInfo.content}</ListGroup.Item>
        </ListGroup> */}
        {/* <Card.Body>
          <Button variant="primary">담기</Button>
        </Card.Body> */}
      </Card>
    </div>
  );
}
export default BurgerDetail;