"use client"

import { useState } from "react"
import { ArrowLeft, TrendingUp, TrendingDown } from "lucide-react"
import { Card } from "@/components/ui/card"

interface HoldingsScreenProps {
  onBack: () => void
}

const holdings = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    qty: 50,
    avgPrice: 2380.0,
    currentPrice: 2456.8,
    pnl: 3840.0,
    pnlPercent: 3.23,
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services",
    qty: 25,
    avgPrice: 3920.0,
    currentPrice: 3892.5,
    pnl: -687.5,
    pnlPercent: -0.7,
  },
  {
    symbol: "INFY",
    name: "Infosys Limited",
    qty: 100,
    avgPrice: 1625.0,
    currentPrice: 1678.9,
    pnl: 5390.0,
    pnlPercent: 3.32,
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank",
    qty: 75,
    avgPrice: 1565.0,
    currentPrice: 1589.25,
    pnl: 1818.75,
    pnlPercent: 1.55,
  },
]

const positions = [
  {
    symbol: "WIPRO",
    name: "Wipro Limited",
    qty: 200,
    avgPrice: 445.5,
    currentPrice: 452.8,
    pnl: 1460.0,
    pnlPercent: 1.64,
  },
  {
    symbol: "BHARTIARTL",
    name: "Bharti Airtel",
    qty: 50,
    avgPrice: 1125.0,
    currentPrice: 1118.3,
    pnl: -335.0,
    pnlPercent: -0.6,
  },
]

export function HoldingsScreen({ onBack }: HoldingsScreenProps) {
  const [activeTab, setActiveTab] = useState<"holdings" | "positions">("holdings")

  const data = activeTab === "holdings" ? holdings : positions
  const totalInvested = data.reduce((sum, item) => sum + item.qty * item.avgPrice, 0)
  const currentValue = data.reduce((sum, item) => sum + item.qty * item.currentPrice, 0)
  const totalPnL = currentValue - totalInvested
  const totalPnLPercent = (totalPnL / totalInvested) * 100

  return (
    <div className="max-w-md mx-auto bg-background min-h-screen">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="p-1 hover:bg-secondary rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">My Portfolio</h1>
          <div className="w-8" />
        </div>

        {/* Toggle */}
        <div className="flex gap-2 bg-secondary rounded-lg p-1">
          <button
            onClick={() => setActiveTab("holdings")}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "holdings" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            Holdings
          </button>
          <button
            onClick={() => setActiveTab("positions")}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "positions" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            Positions
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="px-4 py-4 bg-card border-b border-border">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Invested</p>
            <p className="text-sm font-semibold text-foreground">₹{(totalInvested / 1000).toFixed(1)}k</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Current</p>
            <p className="text-sm font-semibold text-foreground">₹{(currentValue / 1000).toFixed(1)}k</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">P&L</p>
            <p className={`text-sm font-semibold ${totalPnL >= 0 ? "text-success" : "text-destructive"}`}>
              {totalPnL >= 0 ? "+" : ""}₹{(totalPnL / 1000).toFixed(2)}k ({totalPnL >= 0 ? "+" : ""}
              {totalPnLPercent.toFixed(2)}%)
            </p>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="px-4 py-4 space-y-3">
        {data.map((item) => {
          const currentValue = item.qty * item.currentPrice
          const investedValue = item.qty * item.avgPrice

          return (
            <Card key={item.symbol} className="p-4 border border-border hover:border-primary transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-foreground">{item.symbol}</p>
                  <p className="text-xs text-muted-foreground">{item.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">₹{item.currentPrice.toFixed(2)}</p>
                  <div
                    className={`flex items-center justify-end gap-1 text-xs ${item.pnl >= 0 ? "text-success" : "text-destructive"}`}
                  >
                    {item.pnl >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    <span>
                      {item.pnl >= 0 ? "+" : ""}
                      {item.pnlPercent.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-muted-foreground mb-0.5">Qty</p>
                  <p className="font-medium text-foreground">{item.qty}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-0.5">Avg</p>
                  <p className="font-medium text-foreground">₹{item.avgPrice.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground mb-0.5">P&L</p>
                  <p className={`font-medium ${item.pnl >= 0 ? "text-success" : "text-destructive"}`}>
                    {item.pnl >= 0 ? "+" : ""}₹{Math.abs(item.pnl).toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
