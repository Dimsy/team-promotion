import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { VisDonut, VisLine, VisAxis } from '@unovis/react'
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import manpng from './static/gender-identity.png';


const data = [
    {
        name: '-',
        level: '11 грейд',
        position: 'Senior Java разработчик/тех. лид',
        company: 'Сбер',
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
        level: '10 грейд',
        position: 'Senior (low) Главный инженер по тестированию',
        company: 'Сбер',
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
        level: '',
        position: 'Senior Frontend developer, UI/UX лид',
        company: 'Корус',
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
        comments: 'Cамоорганизованность и организация других. Смежные области будь то дизайн или аналитика. Достаточно широкие знания во многих сферах, чуть бэк, чуть юай юикс, чуть аналитика. Ответственность за любой процесс и доведение процесса до результата. Склонность к планированию. Готов вписаться в любую активность.'
    },
    {
        name: '-',
        level: '',
        position: 'Middle Java разработчик',
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
        level: '9 грейд',
        position: 'Middle(low) Разработчик по тестированию',
        company: 'Сбер',
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
];

export default function App() {
    const renderPlayer = (player) => {
        return (
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Avatar alt="Remy Sharp" src={manpng} sx={{width: 80, height: 80}}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom>
                            {`${player.position}`}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {`${player.level}, ${player.company}`}
                        </Typography>
                            {player.specs.map((spec) => {
                                    if (spec.indexOf('^') != -1) {
                                        return (
                                            <Badge badgeContent={'Lead'} color="primary">
                                                <Chip label={spec.replaceAll('^','')} color="success" style={{marginRight: 5, marginBottom: 5}}/>
                                            </Badge>
                                        );
                                    } else {
                                        return (
                                            <Chip label={spec} color="success" style={{marginRight: 5, marginBottom: 5}}/>
                                        )
                                    }
                                }
                            )}
                    </Grid>
                    <Grid item xs={8}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{`Тех. стек (${player.skills.length})`}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" gutterBottom>
                                    {player.skills.map((skill) => <Chip label={skill} style={{marginRight: 5, marginBottom: 5}}/>)}
                                </Typography>
                                <Typography variant="body1" gutterBottom >
                                    {player.comments}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Grid>
        );
    };
  return (
    <Container maxWidth="xl" style={{padding: 10}}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Box flexGrow={1}>
                    <VisDonut
                        value={2}
                        centralLabel="Label"
                        centralSubLabel="Long sub-label wraps onto the next line"
                    />
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Grid container spacing={2}>
                    {data.map((player) => renderPlayer(player))}
                </Grid>
            </Grid>
        </Grid>
    </Container>
  );
}
