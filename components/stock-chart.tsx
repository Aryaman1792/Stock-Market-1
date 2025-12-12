"use client"

interface StockChartProps {
  timeframe: string
  positive?: boolean
}

export function StockChart({ timeframe, positive = true }: StockChartProps) {
  // Generate mock chart data based on timeframe
  const generatePath = () => {
    const width = 320
    const height = 180
    const points = 50

    let path = `M 0 ${height / 2}`

    for (let i = 1; i <= points; i++) {
      const x = (width / points) * i
      const variance = positive ? -30 : 30
      const y = height / 2 + Math.sin(i / 5) * 30 + Math.random() * 20 + (i / points) * variance
      path += ` L ${x} ${y}`
    }

    return path
  }

  const chartColor = positive ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"

  return (
    <div className="w-full h-48 relative">
      <svg viewBox="0 0 320 180" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`gradient-${positive ? "up" : "down"}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={chartColor} stopOpacity="0.2" />
            <stop offset="100%" stopColor={chartColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area under the line */}
        <path d={`${generatePath()} L 320 180 L 0 180 Z`} fill={`url(#gradient-${positive ? "up" : "down"})`} />

        {/* Line */}
        <path
          d={generatePath()}
          fill="none"
          stroke={chartColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
