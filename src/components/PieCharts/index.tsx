import React from "react"
// recharts
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

// styles
import * as S from './styles'

interface IPieChartsProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[];
}

const PieCharts: React.FC<IPieChartsProps> = ({ data }) => (
    <S.Container>
        <S.SideLeft>
            <h2>Relação</h2>
            <S.LegendContainer>
                {
                    data.map(item => (
                        <S.Legend key={item.name} color={item.color}>
                            <div>{item.percent}%</div>
                            <span>{item.name}</span>
                        </S.Legend>
                    ))
                }
            </S.LegendContainer>
        </S.SideLeft>
        <S.SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie  data={data} dataKey="percent">
                        {
                            data.map((item) => (
                                <Cell key={item.name} fill={item.color}/>
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </S.SideRight>
    </S.Container>
)

export default PieCharts