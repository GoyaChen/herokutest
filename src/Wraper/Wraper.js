// import Filter from "../Filter/Filter";
import Filter from "./Filter";
import {useState} from "react";
import Scatter from "../viz/Scatter";
import {Container} from "@mui/material";
import Result from "./Result";

export default function Wraper() {
    const [data, setData] = useState({
        name:["name1", "name2"],
        aaa:["bbb", "ccc"]
    })
    return (
        <Container>
            <Filter setData={setData} data={data}/>
            <Result data={data} setData={setData}/>
            {/*<Scatter data={data} setData={setData}/>*/}
        </Container>
    )
}