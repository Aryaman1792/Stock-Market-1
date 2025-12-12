"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface OrderScreenProps {
  symbol: string
  onBack: () => void
}

const orderTypes = ["Market", "Limit", "Stop-Loss"]
const productTypes = ["Intraday", "Delivery"]

export function OrderScreen({ symbol, onBack }: OrderScreenProps) {
  const [orderType, setOrderType] = useState("Market")
  const [productType, setProductType] = useState("Delivery")
  const [quantity, setQuantity] = useState("1")
  const [price, setPrice] = useState("2456.80")

  const currentPrice = 2456.8
  const estimatedCost = Number.parseFloat(quantity || "0") * Number.parseFloat(price || "0")

  return (
    <div className="max-w-md mx-auto bg-background min-h-screen pb-24">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="p-1 hover:bg-secondary rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Place Order</h1>
          <div className="w-8" />
        </div>
      </div>

      {/* Stock Info */}
      <div className="bg-card border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-foreground">{symbol}</p>
            <p className="text-xs text-muted-foreground">Reliance Industries Ltd.</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-foreground">₹{currentPrice.toFixed(2)}</p>
            <p className="text-xs text-success">+1.23%</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Order Type */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Order Type</label>
          <div className="flex gap-2">
            {orderTypes.map((type) => (
              <button
                key={type}
                onClick={() => setOrderType(type)}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  orderType === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Product Type */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Product Type</label>
          <div className="flex gap-2">
            {productTypes.map((type) => (
              <button
                key={type}
                onClick={() => setProductType(type)}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  productType === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Quantity</label>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="text-base"
            placeholder="Enter quantity"
          />
        </div>

        {/* Price (if not market order) */}
        {orderType !== "Market" && (
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Price</label>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="text-base"
              placeholder="Enter price"
            />
          </div>
        )}

        {/* Order Summary */}
        <Card className="p-4 bg-muted/50 border-0">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Quantity</span>
              <span className="font-medium text-foreground">{quantity || 0} shares</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Price</span>
              <span className="font-medium text-foreground">
                ₹{orderType === "Market" ? currentPrice.toFixed(2) : price}
              </span>
            </div>
            <div className="border-t border-border pt-2 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Estimated Cost</span>
                <span className="text-lg font-bold text-foreground">₹{estimatedCost.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Margin Info */}
        <Card className="p-3 bg-primary/5 border-primary/20">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Available Margin</span>
            <span className="font-semibold text-foreground">₹85,450.00</span>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
          <Button className="bg-success hover:bg-success/90 text-success-foreground">Buy {symbol}</Button>
          <Button variant="destructive" className="bg-destructive hover:bg-destructive/90">
            Sell {symbol}
          </Button>
        </div>
      </div>
    </div>
  )
}
