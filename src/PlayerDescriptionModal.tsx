import React from 'react'
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid lightgray',
    borderRadius: 8,
    boxShadow: 24,
    minHeight: 350,
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
                <Chip label={selectedPlayer.type} color={getAvatarColor(selectedPlayer.type)} style={{ height: 20, fontSize: 12, marginTop: 5 }}/>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: 15}}>
                     {selectedPlayer.position}
                </Typography>
                <Typography variant="h6" component="h6" style={{marginBottom: 5}}>
                    Tech skills
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {selectedPlayer.skills.map((skill) => <Chip label={skill} style={{ height: 20, marginRight: 5, marginBottom: 5}}/>)}
                </Typography>
                {selectedPlayer?.comments?.length &&
                  <>
                    <Typography variant="h6" component="h6" style={{marginBottom: 5}}>
                      Comments
                    </Typography>
                    <Typography variant="body1" gutterBottom >
                        <ul>
                            {selectedPlayer.comments.map((c) => <li>{c}</li>)}
                        </ul>
                    </Typography>
                  </>
                }
            </Box>
        </Modal>
    )
}
