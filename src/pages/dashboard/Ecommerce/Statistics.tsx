import { Row, Col } from 'react-bootstrap';
import { StatisticsWidget } from 'components';

const Statistics = () => {
    return (
        <>
            <Row>
                <Col sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-check-circle-outline"
                        description="Número de Tarefas Concluídas"
                        title="Tarefas"
                        stats="42"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '8.5%',
                            time: 'Desde o último mês',
                        }}
                    ></StatisticsWidget>
                </Col>

                <Col sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-calendar-check-outline"
                        description="Reuniões Agendadas"
                        title="Reuniões"
                        stats="5"
                        trend={{
                            textClass: 'text-danger',
                            icon: 'mdi mdi-arrow-down-bold',
                            value: '-2%',
                            time: 'Desde o último mês',
                        }}
                    ></StatisticsWidget>
                </Col>
            </Row>

            <Row>
                <Col sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-currency-usd"
                        description="Colaboradores"
                        title="Colaboradores Ativos"
                        stats="125"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mmdi-account-group-outline',
                            value: '4.2%',
                            time: 'Desde o último mês',
                        }}
                    ></StatisticsWidget>
                </Col>

                <Col sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-pulse"
                        description="Projetos"
                        title="Projetos em Andamento"
                        stats="+ 15%"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-folder-outline',
                            value: '15%',
                            time: 'Desde o último mês',
                        }}
                    ></StatisticsWidget>
                </Col>
            </Row>
        </>
    );
};

export default Statistics;
