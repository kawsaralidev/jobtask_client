import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const SectorModal = ({ data }) => {
    const { register, handleSubmit } = useForm();
    const { name, item, _id } = data;
    const [users, setUsers] = useState([]);
    // Modal add
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // delete
    const handleDelete = (id) => {
        console.log(id);
        const proced = window.confirm("Are you sure? you want to delete");
        if (proced) {
            const url = `https://floating-headland-50908.herokuapp.com/data/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("delete successfully");
                        const remainingUser = users.filter((user) => user._id !== id);
                        console.log(remainingUser);
                        setUsers(remainingUser);
                    }
                });
        }
    };

    const onSubmit = (data) => {
        axios.put(`https://floating-headland-50908.herokuapp.com/data/${_id}`, data).then((res) => {
            alert("data update successfully");
            console.log("data update successfully");
            window.location.reload();
        });
    };
    return (
        <div>
            {/* Modal add  */}
            <>
                <Button className="btn-regular" variant="primary" onClick={handleShow}>
                    Edit
                </Button>
                <Button onClick={() => handleDelete(_id)} className="btn-delete mx-2">
                    Deleted
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name*</Form.Label>
                                <Form.Control {...register("name", { required: true })} defaultValue={name} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Item*</Form.Label>
                                <Form.Control {...register("item", { required: true })} defaultValue={item} />
                            </Form.Group>

                            <div>
                                <Button className="btn-regular " type="submit" variant="primary">
                                    Save
                                </Button>
                                <Button className="btn-regular mx-3" variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default SectorModal;
