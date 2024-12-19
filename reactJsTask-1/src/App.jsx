import "./App.css";
import { Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Form className=" d-flex " id="form_container">
        <Card className="p-3 bg-dark" id="form_card">
          <Form.Label style={{ color: "white", fontSize: "1.2rem" }}>
            Purpose:
          </Form.Label>
          <div className="d-flex flex-row gap-2" style={{ fontSize: 12 }}>
            <Form.Check
              type="radio"
              label="Client"
              name="purpose"
              id="purpose-client"
              style={{ color: "white" }}
              className="text-white"
            />
            <Form.Check
              type="radio"
              label="Group"
              name="purpose"
              id="purpose-group"
              style={{ color: "white" }}
              className="text-white"
            />
            <Form.Check
              type="radio"
              label="Agent"
              name="purpose"
              id="purpose-agent"
              style={{ color: "white" }}
              className="text-white"
            />
          </div>
          <Form.Group className="mb-3" controlId="form_label">
            <Form.Label style={{ color: "white", fontSize: "1.2rem" }}>
              Label:
            </Form.Label>
            <Form.Control type="text" name="label" />
            <Form.Text style={{ color: "#aaa" }}>
              Please write label to here.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="form_purpose">
            <Form.Label style={{ color: "white", fontSize: "1.2rem" }}>
              Key:
            </Form.Label>
            <Form.Control type="text" name="purpose" />
            <Form.Text style={{ color: "#aaa" }}>
              Please write key to here.
            </Form.Text>
          </Form.Group>
          <Form.Label style={{ color: "white", fontSize: "1.2rem" }}>
            Status:
          </Form.Label>

          <div className="d-flex flex-row gap-2" style={{ fontSize: 12 }}>
            <Form.Check
              type="radio"
              label="Active"
              name="status"
              id="status-active"
              style={{ color: "white" }}
              className="text-white"
            />
            <Form.Check
              type="radio"
              label="Passive"
              name="status"
              id="status-passive"
              style={{ color: "white" }}
              className="text-white"
            />
          </div>
          <Button className="mt-3" variant="success" type="submit">
            Save
          </Button>
        </Card>
      </Form>
    </>
  );
}

export default App;
