import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'


const Graficos = () => {
    return(
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
    )
}

export default Graficos