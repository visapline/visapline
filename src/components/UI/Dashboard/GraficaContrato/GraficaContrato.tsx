"use client"

import React, { useState } from "react"
import styled from "styled-components"
import { PieChart, Pie, Cell, Sector } from "recharts"

// === Datos y colores ===
const data = [
  { name: "ANULADO", value: 146 },
  { name: "ACTIVO", value: 7094 },
  { name: "SUSPENDIDO", value: 6 },
  { name: "VENDIENDO", value: 23 },
  { name: "CORTADO", value: 2616 },
  { name: "CANCELANDO", value: 668 },
  { name: "CORTESIA", value: 3 },
  { name: "TERMINADO", value: 4627 },
  { name: "ELIMINADO", value: 1099 },
  { name: "EXONERADO", value: 18 },
]

const COLORS = [
  "#d0e3f0",
  "#a4cce3",
  "#78b6d6",
  "#4b9fc9",
  "#2178aa",
  "#0f5f8f",
  "#084b72",
  "#04385b",
  "#012c49",
  "#001f33",
]

// === Styled components ===

const Container = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 16px;
  color: #5e6e82;
  font-weight: 500;
  margin-bottom: 8px;
  border-bottom: 1px solid #5e6e82;
`

const ChartWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  user-select: none;
`

const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
  transition: all 0.4s ease-in-out;
`

const SegmentLabel = styled.strong`
  font-size: 22px;
  font-weight: 900;
`

const SegmentValue = styled.div`
  font-size: 20px;
`

// === Sector activo con sombra ===

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props
  return (
    <g style={{ filter: "drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.3))" }}>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  )
}

// === Componente principal ===

export function GraficaContrato() {
  const defaultIndex = data.findIndex((item) => item.name === "CORTADO")
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex)

  const handleMouseEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    setActiveIndex(defaultIndex)
  }

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const activeData = data[activeIndex]

  return (
    <Container>
      <Title>Gráfica contratos</Title>
      <ChartWrapper onClick={handleClick}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={3}
            dataKey="value"
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            isAnimationActive
            animationDuration={1500}
            animationEasing="ease-in-out"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#ffffff"
                strokeWidth={2}
                style={{
                  transition: "all 0.8s ease-in-out",
                  cursor: "pointer",
                }}
              />
            ))}
          </Pie>
        </PieChart>

        <CenterText>
          <SegmentLabel>{activeData.name}</SegmentLabel>
          <SegmentValue>{activeData.value.toLocaleString()}</SegmentValue>
        </CenterText>
      </ChartWrapper>
    </Container>
  )
}
