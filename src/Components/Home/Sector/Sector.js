import React from "react";
import SectorModal from "../SectorModal/SectorModal";
import "./Sector.css";

const Sector = ({ data }) => {
    const { name, item, _id } = data;

    return (
        <div className=" pt-2">
            <div className=" data-box ">
                <div className="col-lg-4 text-center col-md-4 col-sm-4">
                    <h5>{name}</h5>
                </div>

                <div className="col-lg-4 text-center col-md-4 col-sm-4">
                    <h5>{item} </h5>
                </div>
                <div className="col-lg-4 text-center col-md-4 col-sm-4">
                    <SectorModal data={data}></SectorModal>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Sector;
