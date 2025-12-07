"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

interface ChartData {
  name: string
  [key: string]: string | number // allow dynamic fields but no `any`
}

interface LineChartProps {
  data: ChartData[]
  categories: string[]
  index: string
  colors: string[]
  valueFormatter?: (value: number) => string
  yAxisWidth?: number
  showYAxis?: boolean
  showXAxis?: boolean
  showGrid?: boolean
  showTooltip?: boolean
  className?: string
  showLegend?: boolean
}

export function LineChartComponent({
  data,
  categories,
  index,
  colors = ["#9B66FF"], // Default purple color
  valueFormatter = (value: number) => value.toString(),
  yAxisWidth = 40,
  showYAxis = true,
  showXAxis = true,
  showGrid = false,
  showTooltip = true,
  className,
 
}: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 5,
          left: 0,
          bottom: 0,
        }}
      >
        {showXAxis && (
          <XAxis
            dataKey={index}
            tickLine={false}
            axisLine={false}
            stroke="#6b7280"
            fontSize={10}
            tickMargin={8}
            opacity={0.5}
            tick={{ fill: "#6b7280" }}
            tickFormatter={(value) => String(value)}
            interval="preserveStartEnd"
          />
        )}
        {showYAxis && (
          <YAxis
            width={yAxisWidth}
            tickLine={false}
            axisLine={false}
            stroke="#6b7280"
            fontSize={10}
            tickFormatter={(value) => valueFormatter(Number(value))}
            tickMargin={8}
            opacity={0.5}
            tick={{ fill: "#6b7280" }}
            domain={[0, "dataMax + 100"]}
          />
        )}
        {showGrid && (
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2d2d3d" opacity={0.2} />
        )}
        {showTooltip && (
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-2 shadow-md">
                    <div className="font-medium text-gray-200">{label}</div>
                    <div className="mt-1 flex flex-col gap-0.5">
                      {payload.map((entry, i) => (
                        <div key={`item-${i}`} className="flex items-center gap-2 text-xs">
                          <div
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: entry.color }}
                          />
                          <span className="font-medium text-gray-400">{entry.name}:</span>
                          <span className="text-gray-200">
                            {valueFormatter(Number(entry.value))}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
        )}
        {categories.map((category, i) => (
          <Line
            key={category}
            type="monotone"
            dataKey={category}
            stroke={colors[i % colors.length]}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: colors[i % colors.length] }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
