import { useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
function UpdateJob() {
  const JobName = useRef("");
  const JobDescription = useRef("");
  const JobStatus = useRef("");
  const HiringExpiration = useRef("");
 
  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://localhost:44310/Jobs/${id}`).then((response) => {
      JobName.current.value = response.data.jobName;
      JobDescription.current.value = response.data.jobDescription;
      JobStatus.current.value = response.data.jobStatus;
      HiringExpiration.current.value = response.data.hiringExpiration;
    });
  }, []);
 
  function updateJobHandler() {
    var payload = {
        jobName: JobName.current.value,
        jobDescription: JobDescription.current.value,
        jobStatus: JobStatus.current.value,
        hiringExpiration: HiringExpiration.current.value,
      id: id,
    };
 
    axios
      .put("https://localhost:44310/Jobs", payload)
      .then((response) => {
        navigate("/");
      });
  }
 
  return (
    <>
      <legend>Update</legend>
      <form>
        <Form.Group className="mb-3" controlId="formJobName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={JobName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formJobDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text-area" ref={JobDescription} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="FormJobStatus">
          <Form.Label>Status</Form.Label>
          <select ref={JobStatus}>
            <option value="Hiring">Hiring</option>
            <option value="NotHiring">Not Hiring</option>
          </select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHiringExpiration">
          <Form.Label>Expiration Date: </Form.Label>
          <Form.Control type="date" ref={HiringExpiration} />
        </Form.Group>
      </form>
      <Button variant="primary" type="button" onClick={updateJobHandler}>
        Update
      </Button>
    </>
  );
}
export default UpdateJob;