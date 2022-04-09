import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Sector/Sector.css";

const Sectors = () => {
    const [data, setData] = useState([]);
    const [item, setItem] = useState("");

    useEffect(() => {
        fetch("./sectorsData.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const onChangeSelect = (e) => {
        const selectId = e.target.value;
        setItem(selectId);
    };

    // form data
    const [name, setName] = useState("");
    const [box, setBox] = useState(false);

    const onSubmit = (data) => {
        const newData = { name, box, item };
        console.log(newData);
        data.preventDefault();
        axios.post("https://floating-headland-50908.herokuapp.com/data", newData).then((res) => {
            if (res.data.insertedId) {
                alert("Data Added Successfully");
            }
        });
    };

    return (
        <div style={{ backgroundColor: "lightgray" }} className=" py-5">
            <Container>
                <h3>Please enter your name and pick the Sectors you are currently involved in.</h3>
                <div>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name*</Form.Label>
                            <Form.Control
                                style={{ marginTop: "-6px" }}
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Sectors*</Form.Label>

                            <div style={{ marginTop: "-6px" }} className="title-data">
                                <div className="title-div">
                                    <select style={{ width: "220px" }} onChange={onChangeSelect} className="title-scroll">
                                        {data?.map((d) => (
                                            <option style={{ width: "220px" }} key={d.id} value={d.title}>
                                                {d.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" onChange={(e) => setBox(e.target.checked)} label="Agree to terms" />
                        </Form.Group>
                        <Button className="btn-regular " variant="primary" type="submit">
                            Save
                        </Button>
                        <Link to="/sectorData">
                            <Button className="btn-regular mx-3" variant="primary">
                                Your Data
                            </Button>
                        </Link>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Sectors;
