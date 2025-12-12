"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StockChart } from "@/components/stock-chart"

interface StockDetailScreenProps {
  symbol: string
  onBack: () => void
  onOrder: (type: "buy" | "sell", symbol: string) => void
}

const timeframes = ["1D", "1W", "1M", "1Y", "5Y"]

export function StockDetailScreen({ symbol, onBack, onOrder }: StockDetailScreenProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1D")

  const stockData = {
    RELIANCE: {
      name: "Reliance Industries Ltd.",
      price: 2456.8,
      change: 29.95,
      changePercent: 1.23,
      open: 2430.5,
      high: 2465.3,
      low: 2425.8,
      close: 2456.8,
    },
    TCS: {
      name: "Tata Consultancy Services Ltd.",
      price: 3892.5,
      change: -12.3,
      changePercent: -0.31,
      open: 3905.0,
      high: 3920.0,
      low: 3880.0,
      close: 3892.5,
    },
    INFY: {
      name: "Infosys Limited",
      price: 1678.9,
      change: 18.65,
      changePercent: 1.12,
      open: 1662.0,
      high: 1685.5,
      low: 1658.2,
      close: 1678.9,
    },
  }

  const stock = stockData[symbol as keyof typeof stockData] || stockData.RELIANCE

  return (
    <div className="max-w-md mx-auto bg-background min-h-screen">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="p-1 hover:bg-secondary rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">{symbol}</h1>
          <div className="w-8" />
        </div>

        {/* Price Info */}
        <div className="mb-2">
          <p className="text-3xl font-bold text-foreground">₹{stock.price.toFixed(2)}</p>
          <div className={`flex items-center gap-2 mt-1 ${stock.change >= 0 ? "text-success" : "text-destructive"}`}>
            <span className="text-sm font-medium">
              {stock.change >= 0 ? "+" : ""}₹{Math.abs(stock.change).toFixed(2)}
            </span>
            <span className="text-sm">
              ({stock.change >= 0 ? "+" : ""}
              {stock.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{stock.name}</p>
      </div>

      {/* Chart */}
      <div className="bg-card border-b border-border px-4 py-6">
        <StockChart timeframe={selectedTimeframe} positive={stock.change >= 0} />

        {/* Timeframe Selector */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setSelectedTimeframe(tf)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedTimeframe === tf
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Market Stats */}
      <div className="bg-card border-b border-border px-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Open</p>
            <p className="text-sm font-semibold text-foreground">₹{stock.open.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">High</p>
            <p className="text-sm font-semibold text-foreground">₹{stock.high.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Low</p>
            <p className="text-sm font-semibold text-foreground">₹{stock.low.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Prev. Close</p>
            <p className="text-sm font-semibold text-foreground">₹{(stock.price - stock.change).toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="px-4 py-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">Company Overview</h3>
        <Card className="p-4 bg-muted/50 border-0">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {symbol === "RELIANCE" &&
              "Reliance Industries Limited is an Indian multinational conglomerate, headquartered in Mumbai. It has diverse businesses including energy, petrochemicals, natural gas, retail, telecommunications, mass media, and textiles."}
            {symbol === "TCS" &&
              "Tata Consultancy Services is an Indian multinational information technology services and consulting company, headquartered in Mumbai. It is a part of the Tata Group and operates in 149 locations across 46 countries."}
            {symbol === "INFY" &&
              "Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services. The company is headquartered in Bangalore, Karnataka, India."}
          </p>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
          <Button
            onClick={() => onOrder("buy", symbol)}
            className="bg-success hover:bg-success/90 text-success-foreground"
          >
            Buy
          </Button>
          <Button
            onClick={() => onOrder("sell", symbol)}
            variant="destructive"
            className="bg-destructive hover:bg-destructive/90"
          >
            Sell
          </Button>
        </div>
      </div>
    </div>
  )
}
