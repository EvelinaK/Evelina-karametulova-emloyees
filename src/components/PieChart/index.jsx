import React, { useState, useCallback } from 'react'
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Sector,
    Tooltip
} from 'recharts'

import { pieStyles } from './styles'
import theme from "../../config/theme/theme";

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        percent,
        value,
        label,
        activeIndex
    } = props
    const sin = Math.sin(-RADIAN * midAngle)
    const cos = Math.cos(-RADIAN * midAngle)
    const sx = cx + (outerRadius + 10) * cos
    const sy = cy + (outerRadius + 10) * sin
    const mx = cx + (outerRadius + 30) * cos
    const my = cy + (outerRadius + 30) * sin
    const ex = mx + (cos >= 0 ? 1 : -1) * 22
    const ey = my
    const textAnchor = cos >= 0 ? 'start' : 'end'

    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />

            {activeIndex !== null && (
                <>
                    <Sector
                        cx={cx}
                        cy={cy}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        innerRadius={outerRadius + 6}
                        outerRadius={outerRadius + 10}
                        fill={theme.palette.primary.inverse}
                    />
                    <path
                        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                        stroke={theme.palette.primary.inverse}
                        fill="none"
                    />
                    <circle
                        cx={ex}
                        cy={ey}
                        r={2}
                        fill={theme.palette.primary.inverse}
                        stroke="none"
                    />

                    <text
                        x={ex + (cos >= 0 ? 1 : -1) * 12}
                        y={ey}
                        dy={-18}
                        textAnchor={textAnchor}
                        fill={theme.palette.primary.textBrow}
                        style={{ fontSize: 16, wordWrap: 'break-word', textTransform: 'capitalize' }}
                    >{` ${label}`}</text>
                    <text
                        x={ex + (cos >= 0 ? 1 : -1) * 12}
                        y={ey}
                        textAnchor={textAnchor}
                        fill={theme.palette.primary.textBrow}
                        style={{ fontSize: 16 }}
                    >{` ${value}`}</text>
                    <text
                        x={ex + (cos >= 0 ? 1 : -1) * 12}
                        y={ey}
                        dy={18}
                        textAnchor={textAnchor}
                        fill={theme.palette.primary.textBrow}
                    >
                        {`${(percent * 100).toFixed(2)}%`}
                    </text>
                </>
            )}
        </g>
    )
}
export const responsiveContainerLicensesProps = {
    width: '90%',
    height: 320
}
const PieChartComponent = ({
    data,
    visibleEffect,
    typeOfLevel,
    infoColorBar,
    styleContainer,
}) => {

    const classes = pieStyles();
    const [activeIndex, setActiveIndex] = useState(visibleEffect ? null : 0)
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index)
        },
        [setActiveIndex]
    )

    const responsiveStyle = responsiveContainerLicensesProps

    const outerRadius = 100
    const innerRadius = 57

    return (
        <div style={classes.pieChartContainer}>
            <ResponsiveContainer {...responsiveStyle}>
                <PieChart>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={props => renderActiveShape(props, theme)}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={outerRadius}
                        innerRadius={innerRadius}
                        nameKey="label"
                        margin={{
                            left: -20
                        }}
                        isAnimationActive={false}
                        dataKey={'value'}
                        onMouseEnter={visibleEffect ? null : onPieEnter}
                    >
                        {data.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={`${theme.overrides.charts.doughnut[`cell${index + 1}`]}`
                                }
                            />
                        ))}
                    </Pie>

                    {visibleEffect && (
                        <Tooltip
                            active={activeIndex}
                        />
                    )}
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default (PieChartComponent)
