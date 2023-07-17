import CountUp from "react-countup";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IProps {
    label: number;
    subLabel: string;
    additionalLabel?: string;
}

const Metric:React.FC<IProps> = ({label, subLabel, additionalLabel}) =>  {
    return (
        <Box style={{marginRight: 10}}>
            <Typography gutterBottom variant="h5" component="div">
                <CountUp start={0} end={label} duration={Math.random() * (5 - 2) + 2} /><span style={{fontSize: '1rem'}}>{additionalLabel}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {subLabel}
            </Typography>
        </Box>
    );
};

export default React.memo(Metric)
