import {Button} from "@mui/material";
import _ from "underscore";

export default function Filter(props) {
    function handleClick(){
        let newData = {...props.data}// [...array]
        newData = _.omit(newData, "aaa")
        newData.name = ["newName1", "newName2"]
        props.setData(newData)
        // props.data.name = ["newName3", "newName4"]
        // props.setData(props.data)
    }
    return (
        <Button onClick={handleClick}>
            Set New
        </Button>
    )
}