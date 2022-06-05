import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CCard,
  CCardBody,
  CButton,
  CButtonGroup,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChart, CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions, cilCloudDownload } from '@coreui/icons'


const Graficos = () => {
    return(
        <>
        <CRow>
            <CCol sm={6} lg={3}>
                <CWidgetStatsA
                className="mb-4"
                color="primary"
                value={
                    <>
                    26K{' '}
                    <span className="fs-6 fw-normal">
                        (12.4% <CIcon icon={cilArrowTop} />)
                    </span>
                    </>
                }
                title="Users"
                action={
                    <CDropdown alignment="end">
                    <CDropdownToggle color="transparent" caret={false} className="p-0">
                        <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                    </CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem>Action</CDropdownItem>
                        <CDropdownItem>Another action</CDropdownItem>
                        <CDropdownItem disabled>Disabled action</CDropdownItem>
                    </CDropdownMenu>
                    </CDropdown>
                }
                chart={
                    <CChartLine
                    className="mt-3 mx-3"
                    style={{ height: '70px' }}
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                        {
                            label: 'My First dataset',
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(255,255,255,.55)',
                            pointBackgroundColor: getStyle('--cui-primary'),
                            data: [65, 59, 84, 84, 51, 55, 61],
                        },
                        ],
                    }}
                    options={{
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                grid: {
                                display: false,
                                drawBorder: false,
                                },
                                ticks: {
                                display: false,
                                },
                            },
                            y: {
                                min: 30,
                                max: 89,
                                display: false,
                                grid: {
                                display: false,
                                },
                                ticks: {
                                display: false,
                                },
                            },
                        },
                        elements: {
                            line: {
                                borderWidth: 1,
                                tension: 0.4,
                            },
                            point: {
                                radius: 4,
                                hitRadius: 10,
                                hoverRadius: 4,
                            },
                        },
                    }}
                    />
                }
                />
            </CCol>
            <CCol sm={6} lg={3}>
                <CWidgetStatsA
                    className="mb-4"
                    color="info"
                    value={
                    <>
                        R$6.200{' '}
                        <span className="fs-6 fw-normal">
                        (40.9% <CIcon icon={cilArrowBottom} />)
                        </span>
                    </>
                    }
                    title="Vendas"
                    action={
                    <CDropdown alignment="end">
                        <CDropdownToggle color="transparent" caret={false} className="p-0">
                        <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                        </CDropdownToggle>
                        <CDropdownMenu>
                        <CDropdownItem>Action</CDropdownItem>
                        <CDropdownItem>Another action</CDropdownItem>
                        <CDropdownItem>Something else here...</CDropdownItem>
                        <CDropdownItem disabled>Disabled action</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    }
                    chart={
                    <CChartLine
                        className="mt-3 mx-3"
                        style={{ height: '70px' }}
                        data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                            {
                            label: 'My First dataset',
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(255,255,255,.55)',
                            pointBackgroundColor: getStyle('--cui-info'),
                            data: [1, 18, 9, 17, 34, 22, 13],
                            },
                        ],
                        }}
                        options={{
                        plugins: {
                            legend: {
                            display: false,
                            },
                        },
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                            grid: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                display: false,
                            },
                            },
                            y: {
                            min: -9,
                            max: 39,
                            display: false,
                            grid: {
                                display: false,
                            },
                            ticks: {
                                display: false,
                            },
                            },
                        },
                        elements: {
                            line: {
                            borderWidth: 1,
                            },
                            point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4,
                            },
                        },
                        }}
                    />
                    }
                />
                </CCol>
                <CCol sm={6} lg={3}>
                <CWidgetStatsA
                    className="mb-4"
                    color="success"
                    value={
                    <>
                        9.491{' '}
                        <span className="fs-6 fw-normal">
                        (54.7% <CIcon icon={cilArrowTop} />)
                        </span>
                    </>
                    }
                    title="Trocas"
                    action={
                    <CDropdown alignment="end">
                        <CDropdownToggle color="transparent" caret={false} className="p-0">
                        <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                        </CDropdownToggle>
                        <CDropdownMenu>
                        <CDropdownItem>Action</CDropdownItem>
                        <CDropdownItem>Another action</CDropdownItem>
                        <CDropdownItem>Something else here...</CDropdownItem>
                        <CDropdownItem disabled>Disabled action</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    }
                    chart={
                    <CChartLine
                        className="mt-3"
                        style={{ height: '70px' }}
                        data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                            {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,255,255,.2)',
                            borderColor: 'rgba(255,255,255,.55)',
                            data: [34, 26, 45, 55, 33, 52, 80],
                            fill: true,
                            },
                        ],
                        }}
                        options={{
                        plugins: {
                            legend: {
                            display: false,
                            },
                        },
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                            display: false,
                            },
                            y: {
                            display: false,
                            },
                        },
                        elements: {
                            line: {
                            borderWidth: 2,
                            tension: 0.4,
                            },
                            point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                            },
                        },
                        }}
                    />
                    }
                />
            </CCol>
            <CCol sm={6} lg={3}>
                <CWidgetStatsA
                    className="mb-4"
                    color="secondary"
                    value={
                    <>
                        1.498{' '}
                        <span className="fs-6 fw-normal">
                        (-14.2% <CIcon icon={cilArrowBottom} />)
                        </span>
                    </>
                    }
                    title="Doações"
                    action={
                    <CDropdown alignment="end">
                        <CDropdownToggle color="transparent" caret={false} className="p-0">
                        <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                        </CDropdownToggle>
                        <CDropdownMenu>
                        <CDropdownItem>Action</CDropdownItem>
                        <CDropdownItem>Another action</CDropdownItem>
                        <CDropdownItem>Something else here...</CDropdownItem>
                        <CDropdownItem disabled>Disabled action</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    }
                    chart={
                    <CChartBar
                        className="mt-3 mx-3"
                        style={{ height: '70px' }}
                        data={{
                        labels: [
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                            'August',
                            'September',
                            'October',
                            'November',
                            'December',
                        ],
                        datasets: [
                            {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,255,255,.2)',
                            borderColor: 'rgba(255,255,255,.55)',
                            data: [68, 81, 80, 45, 34, 12, 40, 85, 65, 23, 50, 43],
                            barPercentage: 0.6,
                            },
                        ],
                        }}
                        options={{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                            display: false,
                            },
                        },
                        scales: {
                            x: {
                            grid: {
                                display: false,
                                drawTicks: false,
                            },
                            ticks: {
                                display: false,
                            },
                            },
                            y: {
                            grid: {
                                display: false,
                                drawBorder: false,
                                drawTicks: false,
                            },
                            ticks: {
                                display: false,
                            },
                            },
                        },
                        }}
                    />
                    }
                />
            </CCol>
        </CRow>

        <CCard className='mb-4'>
            <CCardBody>
                <CRow>
                    <CCol sm={5} className="mt-3">
                        <h3 id="traffic" className="card-title mb-0">
                            RELATÓRIOS
                        </h3>
                        <div className="small text-medium-emphasis">Maio - Junho 2022</div>
                    </CCol>
                    <CCol sm={7} className="d-none d-md-block mt-3">
                        <CButton color="primary" className="float-end">
                            <CIcon icon={cilCloudDownload} />
                        </CButton>
                        <CButtonGroup className="float-end me-3">
                            {['Dia', 'Mês', 'Ano'].map((value) => (
                            <CButton
                                color="outline-secondary"
                                key={value}
                                className="mx-0"
                                active={value === 'Mês'}
                            >
                                {value}
                            </CButton>
                            ))}
                        </CButtonGroup>
                    </CCol>
                    <CCol md="2"></CCol>
                    <CCol md="4" className="text-center p-2">
                        <h4 className='mt-2 mb-3'> MÉDIA (%)</h4>
                        <CChart
                            type="doughnut"
                            data={{
                                labels: ['Users', 'Vendas', 'Trocas', 'Doações'],
                                datasets: [
                                {
                                    backgroundColor: ['#321fdb', '#3399ff', '#2eb85c', '#9da5b1'],
                                    // data: [40, 20, 80, 10],
                                    data: [12, 40, 54, 14],
                                },
                                ],
                            }}
                        />
                    </CCol>
                    <CCol md="4" className='text-center relatorio-border'>
                        <h4 className='mt-2 mb-3'> GERAL</h4>
                      <CChart
                        type="polarArea"
                        data={{
                            labels: ['Inicio de Chat', 'Clique em Anuncio', 'Novos Anuncios', 'Novos Usuários', 'Visualizar Anunciante'],
                            datasets: [
                            {
                                data: [11, 16, 7, 3, 14],
                                backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                            },
                            ],
                        }}
                        />
                    </CCol>
                    <CCol md="2"></CCol>
                </CRow>
            </CCardBody>
        </CCard>
        </>
    )
}

export default Graficos