import { useEffect, useState } from "react";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    Progress,
} from "reactstrap";
const URL = "http://localhost:8000/login/";
export default function Login({ modalOpen, setModalOpen }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        console.log("Login");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.length === 0 && password.length === 0) {
            setErrorMessage("Empty username & password");
            setSuccess(false);
            return;
        }

        //make a call to the server to login
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.access) {
                    setSuccess(true);
                    setSuccessMessage("Allowed");
                    //set the access token to session token
                    sessionStorage.setItem(
                        "access_token",
                        "Bearer " + res.access
                    );
                    setModalOpen(false);
                    //refresh the page
                    window.location.reload();
                } else {
                    setErrorMessage("Not Allowed");
                    setSuccess(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage("Something went wrong");
                setSuccess(false);
            });
    };

    const handleLogin = () => {
        setUserName("admin");
        setPassword("admin");
    };

    return (
        <div>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div className=" modal-header">
                    <h5 className=" modal-title" id="exampleModalLabel">
                        Login
                    </h5>
                    {success ? (
                        <h5>{successMessage}</h5>
                    ) : (
                        <h5>{errorMessage}</h5>
                    )}
                </div>

                <ModalBody>
                    <Form inline>
                        <FormGroup>
                            <Label for="username" hidden>
                                Username
                            </Label>
                            <Input
                                id="username"
                                name="username"
                                placeholder="Username"
                                type="username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </FormGroup>{" "}
                        <FormGroup>
                            <Label for="password" hidden>
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>{" "}
                        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    username:admin
                    <br></br>
                    password:admin
                    <Button color="secondary" onClick={() => handleLogin()}>
                        Auto-fill
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
