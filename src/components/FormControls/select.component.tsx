import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect(props: any) {
  const [state, setState] = React.useState(props.default);

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  return (
    <FormControl className="w-60" variant="standard">
      <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state}
        label={props.name}
        onChange={handleChange}
        className="h-8"
      >
        {props.items.map((i: any) => (
          <MenuItem value={i}>{i}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
