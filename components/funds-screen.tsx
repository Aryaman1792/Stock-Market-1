"use client"

import { ArrowLeft, Plus, ArrowDownToLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface FundsScreenProps {
  onBack: () => void
}

export function FundsScreen({ onBack }: FundsScreenProps) {
  return (
    <div className="max-w-md mx-auto bg-background min-h-screen">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="p-1 hover:bg-secondary rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Funds</h1>
          <div className="w-8" />
        </div>
      </div>

      {/* Available Balance */}
      <div className="px-4 py-6 bg-card border-b border-border">
        <Card className="p-6 bg-primary text-primary-foreground border-0">
          <p className="text-sm opacity-90 mb-2">Available Balance</p>
          <p className="text-4xl font-bold mb-4">₹85,450.00</p>
          <div className="grid grid-cols-2 gap-3">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Funds
            </Button>
            <Button
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <ArrowDownToLine className="h-4 w-4 mr-2" />
              Withdraw
            </Button>
          </div>
        </Card>
      </div>

      {/* Funds Breakdown */}
      <div className="px-4 py-4">
        <h2 className="text-sm font-semibold text-foreground mb-4">Funds Breakdown</h2>

        <div className="space-y-3">
          <Card className="p-4 border border-border">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-medium text-foreground">Available Margin</p>
              <p className="text-sm font-semibold text-foreground">₹85,450.00</p>
            </div>
            <p className="text-xs text-muted-foreground">Free cash available for trading</p>
          </Card>

          <Card className="p-4 border border-border">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-medium text-foreground">Used Margin</p>
              <p className="text-sm font-semibold text-foreground">₹52,340.00</p>
            </div>
            <p className="text-xs text-muted-foreground">Margin blocked for open positions</p>
          </Card>

          <Card className="p-4 border border-border">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-medium text-foreground">Collateral</p>
              <p className="text-sm font-semibold text-foreground">₹1,25,000.00</p>
            </div>
            <p className="text-xs text-muted-foreground">Value of holdings pledged as collateral</p>
          </Card>

          <Card className="p-4 border border-border">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-medium text-foreground">Opening Balance</p>
              <p className="text-sm font-semibold text-foreground">₹1,50,000.00</p>
            </div>
            <p className="text-xs text-muted-foreground">Balance at start of day</p>
          </Card>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-4 py-4">
        <h2 className="text-sm font-semibold text-foreground mb-4">Recent Transactions</h2>

        <div className="space-y-2">
          <Card className="p-3 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Funds Added</p>
                <p className="text-xs text-muted-foreground">Jan 10, 2025</p>
              </div>
              <p className="text-sm font-semibold text-success">+₹50,000.00</p>
            </div>
          </Card>

          <Card className="p-3 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Withdrawal</p>
                <p className="text-xs text-muted-foreground">Jan 8, 2025</p>
              </div>
              <p className="text-sm font-semibold text-destructive">-₹25,000.00</p>
            </div>
          </Card>

          <Card className="p-3 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Funds Added</p>
                <p className="text-xs text-muted-foreground">Jan 5, 2025</p>
              </div>
              <p className="text-sm font-semibold text-success">+₹1,00,000.00</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
