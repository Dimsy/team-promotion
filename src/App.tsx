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
import {onDownloadXLSXReportHandler} from "./xslxUtils";
import {Button} from "@mui/material";

export default function App() {
    const [selectedPlayer, setSelectedPlayer] = React.useState(null);
    const [selectedSpec, setSelectedSpec] = React.useState(null);
    const sortedData = [...data].sort((a,b) => a.level > b.level ? -1 : 1);
    const dataForGraph = sortedData.reduce((acc, val) => {
        if (acc[val.type]) {
            acc[val.type] += 1
        } else {
            acc[val.type] = 1
        }
        return acc;
    }, {})

    const chartOptions: ApexOptions = {
        labels: Object.keys(dataForGraph),
        colors: ['#2e7d32', '#ff1744', '#d3d3d3', '#556cd6', '#19857b', '#ed6c02'],
        chart: {
            events: {
                dataPointSelection: function(event, chartContext, config) {
                    console.log(config, 'config')
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

    const series: any[] = Object.values(dataForGraph)

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
        return (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ cursor: 'pointer', opacity: shadowed ? '0.3' : '1'}} onClick={() => setSelectedPlayer(player)}>
                <Grid container spacing={1} flexGrow={1}>
                    <Grid item xs={11}>
                        <Typography variant="h6" gutterBottom style={{display: 'flex', gap: 10}}>
                            <Chip label={player.type} color={getAvatarColor(player.type)} style={{ height: 20, fontSize: 12, marginTop: 5 }}/> {`${player.position}`}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {`${!!player.level && player.company == 'Сбер' ? player.level+', ' : ''} ${player.company}, ${player.city}`}
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
                    <Grid sx={{ display: 'flex', flexDirection: { xs: "row", md: "col"}, height: { xs: 100, md: 100 }  }}>
                        <Metric label={sortedData.length} subLabel={'Членов команды'}/>
                        <Metric label={3} additionalLabel="г." subLabel={'Возраст команды'}/>
                        <Metric label={4177} additionalLabel="+" subLabel={'Всего задач'}/>
                        <Metric label={51} subLabel={'Релизов в проме'}/>
                        <Metric label={2} additionalLabel="-x" subLabel={'ВП пережили '}/>
                    </Grid>
                    <Button onClick={() => onDownloadXLSXReportHandler(sortedData)}>Скачать в Excel</Button>
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
