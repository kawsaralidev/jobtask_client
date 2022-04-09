import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sector from "../Sector/Sector";

const SectorData = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/data")
            .then((res) => res.json())
            .then((data) => setMenu(data));
    }, [menu]);
    return (
        <Container>
            <div className="  py-5">
                <div className="data-container">
                    <div className=" row">
                        {menu?.map((data) => (
                            <Sector key={data.id} data={data}></Sector>
                        ))}
                    </div>
                </div>
                <Link to="/home">
                    <Button className="btn-regular mt-3" variant="primary">
                        Home
                    </Button>
                </Link>
            </div>
        </Container>
    );
};

export default SectorData;
