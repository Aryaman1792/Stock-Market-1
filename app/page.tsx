"use client"

import { useState } from "react"
import { DashboardScreen } from "@/components/dashboard-screen"
import { StockDetailScreen } from "@/components/stock-detail-screen"
import { OrderScreen } from "@/components/order-screen"
import { HoldingsScreen } from "@/components/holdings-screen"
import { FundsScreen } from "@/components/funds-screen"

type Screen = "dashboard" | "stock-detail" | "order" | "holdings" | "funds"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("dashboard")
  const [selectedStock, setSelectedStock] = useState<string>("RELIANCE")

  const navigateToStock = (symbol: string) => {
    setSelectedStock(symbol)
    setCurrentScreen("stock-detail")
  }

  const navigateToOrder = (type: "buy" | "sell", symbol: string) => {
    setSelectedStock(symbol)
    setCurrentScreen("order")
  }

  return (
    <div className="min-h-screen bg-background">
      {currentScreen === "dashboard" && (
        <DashboardScreen onNavigateToStock={navigateToStock} onNavigateToScreen={setCurrentScreen} />
      )}
      {currentScreen === "stock-detail" && (
        <StockDetailScreen
          symbol={selectedStock}
          onBack={() => setCurrentScreen("dashboard")}
          onOrder={navigateToOrder}
        />
      )}
      {currentScreen === "order" && (
        <OrderScreen symbol={selectedStock} onBack={() => setCurrentScreen("stock-detail")} />
      )}
      {currentScreen === "holdings" && <HoldingsScreen onBack={() => setCurrentScreen("dashboard")} />}
      {currentScreen === "funds" && <FundsScreen onBack={() => setCurrentScreen("dashboard")} />}
    </div>
  )
}
