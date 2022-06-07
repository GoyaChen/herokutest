import Filter from "../Filter/Filter";
import {useState} from "react";
import Scatter from "../viz/Scatter";
import {Container} from "@mui/material";

export default function Wraper() {
    const [data, setData] = useState({})
    return (
        <Container>
            <Filter setData={setData} data={data}/>
            <Scatter data={data} setData={setData}/>
        </Container>
    )
}