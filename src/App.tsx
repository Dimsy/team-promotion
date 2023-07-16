import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Chart from "react-apexcharts";
import {PlayerDescriptionModal} from "./PlayerDescriptionModal";
import ApexOptions = ApexCharts.ApexOptions;
import Metric from "./Counter";
import {data} from "./data";

export default function App() {
    const [selectedPlayer, setSelectedPlayer] = React.useState(null);
    const [selectedSpec, setSelectedSpec] = React.useState(null);
    const sortedData = [...data].sort((a,b) => a.level > b.level ? -1 : 1);

    var chartOptions: ApexOptions = {
        labels: ['Backend', 'Frontend', 'Analyst', 'QA', 'DevOps'],
        colors: ['#2e7d32', '#ff1744', '#556cd6', '#19857b', '#ed6c02'],
        chart: {
            events: {
                dataPointSelection: function(event, chartContext, config) {
                    setSelectedSpec(prev => {
                        if (prev === config.w.config.labels[config.dataPointIndex]) {
                            return null
                        }
                        return config.w.config.labels[config.dataPointIndex]
                    })
                },
            }

        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: 'Всего',
                            color: '#373d3f',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0)
                            }
                        }
                    },
                }
            }
        }
    };

    const series = [3, 1, 2, 2, 1];

    const dropSelectedPlayer = () => setSelectedPlayer(null)

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

    const renderPlayer = (player, shadowed) => {
        // const selected = selectedSpec === player.type || player.type === 'Team Lead' && selectedSpec === 'Frontend';
        return (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ cursor: 'pointer', opacity: shadowed ? '0.3' : '1'}} onClick={() => setSelectedPlayer(player)}>
                <Grid container spacing={1} flexGrow={1}>
                    <Grid item xs={11}>
                        <Typography variant="h6" gutterBottom>
                            <Chip label={player.type} color={getAvatarColor(player.type)} style={{ height: 20, fontSize: 12, marginTop: 5 }}/> {`${player.position}`}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {`${!!player.level && player.company !== 'Корус' ? player.level+', ' : ''} ${player.company}, ${player.city}`}
                        </Typography>
                        {player.specs.map((spec) => {
                            const isLead = spec.includes('^');
                            return (
                                <Chip label={spec.replaceAll('^', '')} color={isLead ? "primary" : "success"}
                                      variant="outlined"
                                      style={{marginRight: 5, height: 20, fontSize: 12, marginBottom: 5}}/>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        );
    };
  return (
      <>
        <Container maxWidth="xl" style={{padding: 10}}>
            <Grid container spacing={2} lg={12}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Chart options={chartOptions} series={series} type={'donut'}/>
                    {/*{selectedSpec && <Box sx={{ '& > :not(style)': { m: 1 } }}>*/}
                        {/*<Fab variant="extended" size="small" color="primary" aria-label="add" onClick={() => setSelectedSpec(null)}>*/}
                            {/*Сбросить*/}
                        {/*</Fab>*/}
                    {/*</Box>}*/}
                    <Grid sx={{ display: 'flex', flexDirection: { xs: "row", md: "col"}, height: { xs: 100, md: 100 }  }}>
                        <Metric label={sortedData.length} subLabel={'Членов команды'}/>
                        <Metric label={3} subLabel={'Года возраст команды'}/>
                        <Metric label={3} subLabel={'Системы разработано'}/>
                        <Metric label={5000} subLabel={'Всего задач'}/>
                        <Metric label={2} subLabel={'Пережили ВП'}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    {selectedSpec &&
                        <Grid container item xs={12} sm={12} md={12} lg={12} spacing={1}>
                            {sortedData.filter((p) => selectedSpec ? selectedSpec === p.type : true).map((player) => [renderPlayer(player, false),
                                <hr/>])}
                            {sortedData.filter((p) => selectedSpec ? selectedSpec !== p.type : true).map((player) => [renderPlayer(player, true),
                                <hr/>])}
                        </Grid>
                    }
                    {!selectedSpec &&
                    <Grid container item xs={12} sm={12} md={12} lg={12} spacing={1}>
                        {sortedData.map((player) => [renderPlayer(player, false),
                            <hr/>])}
                    </Grid>
                    }
                </Grid>
            </Grid>
        </Container>
          {selectedPlayer && <PlayerDescriptionModal isOpened={Boolean(selectedPlayer)} handleClose={dropSelectedPlayer} selectedPlayer={selectedPlayer}/>}
    </>
  );
}
