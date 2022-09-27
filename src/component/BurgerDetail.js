import { Card, ListGroup } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function BurgerDetail({ burgers }) {
  let navigate = useNavigate();
  let [showPlace, setShowPlace] = useState(false);
  let [showAllergy, setShowAllergy] = useState(false);
  let [showTable, setShowTable] = useState(false);
  let { id} = useParams();

  let bgdetail = burgers.find((data, i) => {
    return data.id == id;
  });
  return (
    <div>
      <button
        className="before"
        onClick={() => {
          let tempIndex = burgers.findIndex((data, i) => {
            return data.id == id; //b00
          });
          tempIndex -= 1;
          if (tempIndex < 0) {
            alert('이전 상품이 없습니다.');
            return;
          }
          navigate('/burger/detail/' + burgers[tempIndex].id);
        }}>
        〈
      </button>
      <button
        className="after"
        onClick={() => {
          let tempIndex = burgers.findIndex((data, i) => {
            return data.id == id; //b00
          });
          tempIndex += 1;
          if (tempIndex == 20) {
            
            alert('다음 상품이 없습니다.');
            return;
          }
          navigate('/burger/detail/' + burgers[tempIndex].id);
        }}>
        〉
      </button>
      <div>
        <Card style={{ width: '30%', margin: '0 auto' }}>
          <Card.Body>
            <Card.Title className="detailTilte">
              <h2>{bgdetail.bName}</h2>
            </Card.Title>
          </Card.Body>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + bgdetail.imgPath}
            width="30%"
          />
          <Card.Body>
            <Card.Text className="detailText">{bgdetail.bgInfo}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="otherInfo">
        <h6 className="otherInfoName">
          영양정보
          <button
            className="otherInfoButton"
            onClick={() => {
              setShowTable(!showTable);
            }}>
            +
          </button>
        </h6>
        {showTable == true ? <NutritionTable burgers={burgers} /> : null}
        <h6 className="otherInfoName">
          알레르기 정보
          <button
            className="otherInfoButton "
            onClick={() => {
              setShowAllergy(!showAllergy);
            }}>
            +
          </button>
        </h6>
        {showAllergy == true ? <Allergy burgers={burgers} /> : null}
        <h6 className="otherInfoName">
          원산지 정보
          <button
            className="otherInfoButton "
            onClick={() => {
              setShowPlace(!showPlace);
            }}>
            +
          </button>
        </h6>
        {showPlace == true ? <Place burgers={burgers} /> : null}
      </div>
    </div>
  );


  
function Place({ burgers }) {
  let { id } = useParams();
  let bgPlace = burgers.find((data, i) => {
    return data.id == id;
  });
  return <p className="bgPlace">{bgPlace.placeOfOrigin} </p>;
}

function Allergy({ burgers }) {
  let { id } = useParams();
  let bgAllergy = burgers.find((data, i) => {
    return data.id == id;
  });
  return <p className="bgAllergy">{bgAllergy.allergy} </p>;
}

function NutritionTable({ burgers }) {
  let { id } = useParams();
  let bgnutrition = burgers.find((data, i) => {
    return data.id == id;
  });
  return (
    <table>
      <colgroup>
        <col style={{ width: '15%' }}></col>
      </colgroup>
      <thead>
        <tr>
          <th scope="row">영양소</th>
          <th scope="col">중량</th>
          <th scope="col">열량</th>
          <th scope="col">당</th>
          <th scope="col">단백질</th>
          <th scope="col">포화지방</th>
          <th scope="col">나트륨</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">함량</th>
          <td scope="col">{bgnutrition.nutrition.g}</td>
          <td scope="col">{bgnutrition.nutrition.kcal}</td>
          <td scope="col">{bgnutrition.nutrition.sugar}</td>
          <td scope="col">{bgnutrition.nutrition.protein}</td>
          <td scope="col">{bgnutrition.nutrition.fat}</td>
          <td scope="col">{bgnutrition.nutrition.na}</td>
        </tr>
      </tbody>
    </table>
  );
}
}


export default BurgerDetail;
