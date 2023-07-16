import React from 'react'
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Chart from "react-apexcharts";

import manpng from './static/gender-identity.png';
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;
import CountUp from "react-countup";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const getAvatarColor = (type) => {
    switch (type) {
        case 'Backend':
            return 'success';
        case 'Analyst':
            return 'primary';
        case 'Frontend':
            return 'error';
        case 'QA':
            return 'secondary';
        case 'DevOps':
            return 'warning';
    }
};

export const PlayerDescriptionModal = ({isOpened, handleClose, selectedPlayer}) => {
    return (
        <Modal
            open={isOpened}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: 15}}>
                    <Chip label={selectedPlayer.type} color={getAvatarColor(selectedPlayer.type)} style={{ height: 20, fontSize: 12, marginTop: 5 }}/> {`${selectedPlayer.position}`}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {selectedPlayer.skills.map((skill) => <Chip label={skill} style={{marginRight: 5, marginBottom: 5}}/>)}
                </Typography>
                <Typography variant="body1" gutterBottom >
                    {selectedPlayer.comments}
                </Typography>
            </Box>
        </Modal>
    )
}
