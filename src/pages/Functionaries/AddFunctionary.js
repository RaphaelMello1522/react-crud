import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
function AddFunctionary() {
  const Functionary = useRef("");
  const AdmissionDate = useRef("");
  const JobTitle = useRef("");
  const imgUrl = useRef("");
 
  const navigate = useNavigate();
 
  function addFunctionaryHandler() {
    var payload = {
      functionaryName: Functionary.current.value,
      admissionDate: AdmissionDate.current.value,
      jobTitle: JobTitle.current.value,
      imageUrl: imgUrl.current.value,
    };
 
    axios
      .post("https://localhost:44310/Functionaries", payload)
      .then((response) => {
        navigate("/");
      });
  }
 
  return (
    <>
      <legend>Add A New Functionary</legend>
      <form>
        <Form.Group className="mb-3" controlId="formFunctionaryName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={Functionary} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAdmissionDate">
          <Form.Label>Admission Date</Form.Label>
          <Form.Control type="text" ref={AdmissionDate} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPowers">
          <Form.Label>Job Title</Form.Label>
          <Form.Control as="textarea" rows={3} ref={JobTitle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImgUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" ref={imgUrl} />
        </Form.Group>
      </form>
      <Button variant="primary" type="button" onClick={addFunctionaryHandler}>
        Submit
      </Button>
    </>
  );
}
export default AddFunctionary;