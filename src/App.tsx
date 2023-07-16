import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { styled } from '@mui/material/styles';
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

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Chart from "react-apexcharts";

import manpng from './static/gender-identity.png';
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;
import CountUp from "react-countup";
import {PlayerDescriptionModal} from "./PlayerDescriptionModal";
import ApexOptions = ApexCharts.ApexOptions;


const data = [
    {
        name: '-',
        level: 11,
        position: 'Senior Java разработчик, тех. лид',
        company: 'Сбер',
        city: 'Москва',
        type: 'Backend',
        skills: [
            'k8s',
            'openshift',
            'gradle',
            'maven',
            'jdbc',
            'sql',
            'hibernate',
            'spring',
            'jenkins',
            'ефс 20.1',
            'ппрб4',
            'dataspace',
            'platformV',
            'DevOpsTools',
            'java',
            'delphi',
            'bash',
            'git',
            'postgres',
            'firebird',
            'mysql'

        ],
        specs: [
            'ЕФС BH^',
            'ППРБ^',
            'CI/CD^',
            'Менеджмент',
        ],
        comments: '2.5+ последних года разработка на платформах ЕФС и ППРБ. Люблю интересные задачи, люблю их больше чем не интересные. Сторонник agile. Сам себе могу в аналитику, если задач нет.'
    },
    {
        name: '-',
        level: 10,
        position: 'Senior (low) Главный инженер по тестированию',
        company: 'Сбер',
        city: 'Москва',
        type: 'QA',
        skills: [
            'SQL',
            'oracle',
            'postgress',
            'devtools',
            'postman',
            'kafka',
            'SOAP ui',
            'Kibana',
            'XML',
            'JSON',
            'REST',
            'Jenkins',
            'Teamcity',
            'DevOpsTools',
            'Google Analytics',
            'Yandex analytics',
            'Jmeter',

        ],
        specs: [
            'Нагрузочное тестирование^',
            'Интеграционное тестирование^',
            'Инциденты^',
            'ЕФС',
            'ППРБ',
        ],
    },
    {
        name: '-',
        level: 11,
        position: 'Senior Frontend developer, UI/UX лид',
        company: 'Корус',
        type: 'Frontend',
        city: 'Санкт-Петербург',
        skills: [
            'JavaScript',
            'TypeScript',
            'React',
            'Redux',
            'Webpack',
            'ufs-ui',
            'v-uik',
            'MUI',
            'Node.js',
            'REST',
            'OpenApi',
            'Планирование',
            'Мониторинг',
            'Module Federation',
            'SystemJS',
            'Playwright',
            'Jest',
            'Allure'
        ],
        specs: [
            'UI/UX^',
            'ЕФС PL^',
            'Автотесты (Framework)^',
            'Frontend innersource',
            'ЕФС',
            'Монолит',
        ],
        comments: 'Cамоорганизованность и организация других. Смежные области будь то дизайн или аналитика. Ментор для 3х начинающих frontend-разработчиков. Достаточно широкие знания во многих сферах, чуть бэк, чуть юай юикс, чуть аналитика. Ответственность за любой процесс и доведение процесса до результата. Склонность к планированию. Готов вписаться в любую активность.'
    },
    {
        name: '-',
        level: 11,
        position: 'Senior Frontend developer, Release Team лид (ВРИО ВП, STL, ЛАС)',
        company: 'Сбер',
        type: 'Team Lead',
        city: 'Москва',
        skills: [
            'JavaScript',
            'TypeScript',
            'React',
            'Redux',
            'Webpack',
            'ufs-ui',
            'v-uik',
            'MUI',
            'Node.js',
            'REST',
            'OpenApi',
            'Планирование',
            'Мониторинг',
            'Module Federation',
            'SystemJS',
            'Playwright',
            'Jest',
            'Allure'
        ],
        specs: [
            'Release Team^',
            'ЕФС PL',
            'Frontend innersource',
            'ЕФС',
            'Монолит',
        ],
    },
    {
        name: '-',
        level: 9,
        position: 'Middle Java разработчик',
        city: 'Москва',
        type: 'Backend',
        company: 'Корус',
        skills: [
            'Java',
            'Spring',
            'Hibernate',
            'WebFlux',
            'Kubernetes',
            'OpenShift',
            'Istio'
        ],
        specs: [
            'Unit тесты^',
            'ЕФС BH',
            'OSE',
            'Автономность',
        ],
        comments: 'Настройка open shift, istio. Соло бэкэнд разработка и вывод в ПРОМ сервиса (в рамках перехода на новую архитектуру).'
    },
    {
        name: '-',
        level: 9,
        position: 'Middle(low) Разработчик по тестированию',
        company: 'Сбер',
        type: 'QA',
        city: 'Москва',
        skills: [
            'JavaScript',
            'Black Box testing',
            'BDD',
            'Agile',
            'Jira',
            'git',
            'Selenium',
            'CSS'
        ],
        specs: [
            'Ручное тестирование^',
            'BDD автотесты^',
            'Scrum master',
            'ЕФС',
        ],
        comments: 'Тестирование пользовательского пути. Работа с тестовой моделью. Тестовые прогоны. Ведение jira. Практический опыт работы по Agile (scrum /kanban)спринты 1-2 недели. Работа с дефектами. Обеспечение настроек организации на стендах ift/psi.'
    },
    {
        name: '-',
        level: 9,
        position: 'Инженер IT сопровождения/junior Devops',
        type: 'DevOps',
        company: 'Сбер',
        city: 'Москва',
        skills: [
            'ЗНОопс',
            'Работа в Service Manager',
            'Настройка/Сопровождение тестовых стендов',
            'Настройка/Сопровождение CI/CD pipeline',
            'Устранение рисков',
            'Администрирование Unix КТС',
            'Сопровождение проектов OSE',
            'Groovy',
            'Ansible'
        ],
        specs: [
            'Администрирование стендов^',
            'Delivery^',
            'Разработка Job-ов',
            'ЕФС',
            'ППРБ'
        ],
        comments: 'Сопровождение Job-ов CI/CD команды. Администрирование стендов DEV/IFT/NT команды по 3м проектам (~50 КТС). Работа с сопровождением ПСИ/ПРОМ.'
    },
    {
        name: '-',
        level: 7,
        position: 'Junior+ Java разработчик',
        type: 'Backend',
        city: 'Москва',
        company: 'Сбер',
        skills: [
            'Java',
            'Gradle',
            'Maven',
            'PostgreSQL',
            'Kubernetes',
            'Hubernate ORM',
            'Spring',
            'Junit',
            'Mockito',
            'Docker'
        ],
        specs: [
            'ЕФС BH',
            'ППРБ',
            'OSE'
        ]
    },
    {
        name: '-',
        level: 11,
        position: 'Middle+ Системный аналитик',
        city: 'Москва',
        type: 'Analyst',
        company: 'Сбер',
        skills: [
            'GIT',
            'PlantUML (UML)',
            'BPMN 2.0',
            'C',
            'openAPI',
            'SQL',
            'PowerShell',
            'Java'
        ],
        specs: [
            'ЕФС',
            'ППРБ',
            'Системная аналитика',
            'OpenApi'
        ]
    },
];

data.sort((a,b) => a.level > b.level ? -1 : 1);


export default function App() {
    const [selectedPlayer, setSelectedPlayer] = React.useState(null);
    const [selectedSpec, setSelectedSpec] = React.useState(null);

    var chartOptions: ApexOptions = {
        labels: ['Backend', 'Frontend', 'Analyst', 'QA', 'DevOps'],
        colors: ['#2e7d32', '#ff1744', '#556cd6', '#19857b', '#ed6c02'],
        chart: {
            events: {
                dataPointSelection: function(event, chartContext, config) {
                    setSelectedSpec(config.w.config.labels[config.dataPointIndex]);
                }
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


    const Metric = ({label, subLabel}) =>  {
        return (
            <Box style={{marginRight: 10}}>
                <Typography gutterBottom variant="h5" component="div">
                    <CountUp start={0} end={label} duration={Math.random() * (5 - 2) + 2} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {subLabel}
                </Typography>
            </Box>
        );
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
                        <Metric label={data.length} subLabel={'Членов команды'}/>
                        <Metric label={3} subLabel={'Года возраст команды'}/>
                        <Metric label={5000} subLabel={'Всего задач'}/>
                        <Metric label={2} subLabel={'Пережили ВП'}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    {selectedSpec &&
                        <Grid container item xs={12} sm={12} md={12} lg={12} spacing={1}>
                            {data.filter((p) => selectedSpec ? selectedSpec === p.type : true).map((player) => [renderPlayer(player, false),
                                <hr/>])}
                            {data.filter((p) => selectedSpec ? selectedSpec !== p.type : true).map((player) => [renderPlayer(player, true),
                                <hr/>])}
                        </Grid>
                    }
                    {!selectedSpec &&
                    <Grid container item xs={12} sm={12} md={12} lg={12} spacing={1}>
                        {data.map((player) => [renderPlayer(player, false),
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
