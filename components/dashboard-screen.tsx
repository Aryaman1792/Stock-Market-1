"use client"

import { TrendingUp, TrendingDown, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface DashboardScreenProps {
  onNavigateToStock: (symbol: string) => void
  onNavigateToScreen: (screen: string) => void
}

const watchlist = [
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2456.8, change: 2.45, changePercent: 1.21 },
  { symbol: "TCS", name: "Tata Consultancy Services", price: 3892.5, change: -12.3, changePercent: -0.31 },
  { symbol: "INFY", name: "Infosys Limited", price: 1678.9, change: 18.65, changePercent: 1.12 },
  { symbol: "HDFCBANK", name: "HDFC Bank", price: 1589.25, change: 8.75, changePercent: 0.55 },
  { symbol: "ICICIBANK", name: "ICICI Bank", price: 1024.6, change: -5.4, changePercent: -0.52 },
]

export function DashboardScreen({ onNavigateToStock, onNavigateToScreen }: DashboardScreenProps) {
  return (
    <div className="max-w-md mx-auto bg-background min-h-screen">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-foreground">Portfolio</h1>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        {/* Portfolio Summary */}
        <Card className="p-4 bg-primary text-primary-foreground border-0">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm opacity-90 mb-1">Total Value</p>
              <p className="text-3xl font-bold">₹12,45,680</p>
            </div>
            <TrendingUp className="h-6 w-6 opacity-90" />
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <ArrowUpRight className="h-4 w-4" />
              <span className="font-medium">+₹18,450</span>
            </div>
            <div className="opacity-90">
              <span>+1.5% Today</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-4 bg-card border-b border-border">
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={() => onNavigateToScreen("order")}
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
            <span className="text-xs font-medium text-foreground">Buy</span>
          </button>
          <button
            onClick={() => onNavigateToScreen("order")}
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
              <TrendingDown className="h-5 w-5 text-destructive" />
            </div>
            <span className="text-xs font-medium text-foreground">Sell</span>
          </button>
          <button
            onClick={() => onNavigateToScreen("funds")}
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Plus className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-foreground">Funds</span>
          </button>
          <button
            onClick={() => onNavigateToScreen("holdings")}
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
              <svg className="h-5 w-5 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <span className="text-xs font-medium text-foreground">Holdings</span>
          </button>
        </div>
      </div>

      {/* Watchlist */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Watchlist</h2>
          <Button variant="ghost" size="sm" className="text-primary h-8">
            + Add
          </Button>
        </div>

        <div className="space-y-2">
          {watchlist.map((stock) => (
            <button
              key={stock.symbol}
              onClick={() => onNavigateToStock(stock.symbol)}
              className="w-full bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="font-semibold text-foreground">{stock.symbol}</p>
                  <p className="text-xs text-muted-foreground">{stock.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">₹{stock.price.toFixed(2)}</p>
                  <div
                    className={`flex items-center justify-end gap-1 text-sm ${stock.change >= 0 ? "text-success" : "text-destructive"}`}
                  >
                    {stock.change >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    <span className="font-medium">
                      {stock.changePercent >= 0 ? "+" : ""}
                      {stock.changePercent.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
