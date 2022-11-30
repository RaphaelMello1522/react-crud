import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../../components/shared/DeleteConfirmation";


 
function AllFunctionaries() {
  const [functionaries, setFunctionaries] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  useEffect(() => {
    axios.get("https://localhost:44310/Functionaries").then((response) => {
        setFunctionaries((data) => {
        return response.data;
      });
    });
  }, []);

  function confirmDeleteHandler() {
    axios
      .delete(`https://localhost:44310/Functionaries/${itemToDeleteId}`)
      .then((response) => {
        setShowModal(false);
        setFunctionaries((existingData) => {
          return existingData.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
      });
  }

  function hideConfirmDeleteHandler() {
    setShowModal(false);
 
    setItemToDeleteId(0);
  }

  function showConfirmDeleteHandler(id) {
    setShowModal(true);
    setItemToDeleteId(id);
  }
 
  return (
    <>
    <DeleteConfirmation
        showModal={showModal}
        title="Delete Confirmation"
        body="Are you want delete this item?"
        confirmDeleteHandler={confirmDeleteHandler}
        hideConfirmDeleteHandler={hideConfirmDeleteHandler}
      ></DeleteConfirmation>
    <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button
            variant="primary"
            type="button"
            onClick={() => navigate("/functionary-create")}
          >
            Add A Functionary
          </Button>
        </Col>
      </Row>
      <Row md={3} className="g-4 mt-1">
        {functionaries.map((sv) => {
          return (
            <Col key={sv.id}>
              <Card>
                <Card.Img variant="top" src={sv.imageUrl} />
                <Card.Body>
                  <Card.Title>{sv.jobTitle}</Card.Title>
                  <Card.Text>
                    <b>Name:</b> {sv.functionaryName}
                  </Card.Text>
                  <Card.Text>
                    <b>Admission Date: </b> {sv.admissionDate}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/functionary-update/${sv.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    type="button"
                    variant="danger"
                    onClick={() => showConfirmDeleteHandler(sv.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
 
export default AllFunctionaries;