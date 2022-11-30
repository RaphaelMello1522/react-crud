import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
function AddJob() {
  const JobName = useRef("");
  const JobDescription = useRef("");
  const JobStatus = useRef("");
  const HiringExpiration = useRef("");
 
  const navigate = useNavigate();
 
  function addJobHandler() {
    var payload = {
        jobName: JobName.current.value,
        jobDescription: JobDescription.current.value,
        jobStatus: JobStatus.current.value,
        hiringExpiration: HiringExpiration.current.value,
    };
 
    axios
      .post("https://localhost:44310/Jobs", payload)
      .then((response) => {
        navigate("/");
      });
  }
 
  return (
    <>
      <legend>Add A New Job</legend>
      <form>
        <Form.Group className="mb-3" controlId="formJobName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={JobName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAdmissionDate">
          <Form.Label>Job Description</Form.Label>
          <Form.Control type="text-area" ref={JobDescription} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPowers">
          <Form.Label>Status</Form.Label>
          <select ref={JobStatus}>
            <option value="Hiring">Hiring</option>
            <option value="NotHiring">Not Hiring</option>
          </select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImgUrl">
          <Form.Label>Expirate in:</Form.Label>
          <Form.Control type="date" ref={HiringExpiration} />
        </Form.Group>
      </form>
      <Button variant="primary" type="button" onClick={addJobHandler}>
        Submit
      </Button>
    </>
  );
}
export default AddJob;