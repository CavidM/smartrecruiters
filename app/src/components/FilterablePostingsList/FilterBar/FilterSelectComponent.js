import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './FilterBarJss';

function FilterSelectComponent(props) {

    const cls = useStyles();

    const Items = props.items.map(item => (
        <MenuItem key={item.key} value={item.value}>{item.label}</MenuItem>
    ));

    return (
        <FormControl variant="outlined" className={cls.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">{props.label}</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={props.value}
                onChange={props.change}
                name={props.name}
                label={props.label}
                autoWidth
                inputProps={{
                    "data-testid": "filter-select"
                }}
            >
                <MenuItem key={''} value={''}> All </MenuItem>
                {Items}
            </Select>
        </FormControl>
    );
}

export default FilterSelectComponent;