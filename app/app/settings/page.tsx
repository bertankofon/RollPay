"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [useCirclePaymaster, setUseCirclePaymaster] = useState(false)
  const [ensReverseName, setEnsReverseName] = useState(false)

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("rollpay-dark-mode") === "true"
    const savedCirclePaymaster = localStorage.getItem("rollpay-circle-paymaster") === "true"
    const savedEnsReverseName = localStorage.getItem("rollpay-ens-reverse-name") === "true"

    setDarkMode(savedDarkMode)
    setUseCirclePaymaster(savedCirclePaymaster)
    setEnsReverseName(savedEnsReverseName)
  }, [])

  const handleDarkModeChange = (checked: boolean) => {
    setDarkMode(checked)
    localStorage.setItem("rollpay-dark-mode", checked.toString())
  }

  const handleCirclePaymasterChange = (checked: boolean) => {
    setUseCirclePaymaster(checked)
    localStorage.setItem("rollpay-circle-paymaster", checked.toString())
  }

  const handleEnsReverseNameChange = (checked: boolean) => {
    setEnsReverseName(checked)
    localStorage.setItem("rollpay-ens-reverse-name", checked.toString())
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Configure your RollPay preferences and options</p>
      </div>

      <div className="grid gap-6 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize how RollPay looks and feels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode" className="text-base">
                  Dark Mode
                </Label>
                <div className="text-sm text-gray-500">Switch between light and dark themes</div>
              </div>
              <Switch id="dark-mode" checked={darkMode} onCheckedChange={handleDarkModeChange} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Blockchain Settings</CardTitle>
            <CardDescription>Configure blockchain and transaction preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="circle-paymaster" className="text-base">
                  Use Circle Paymaster
                </Label>
                <div className="text-sm text-gray-500">Enable Circle's paymaster for gasless transactions</div>
              </div>
              <Switch
                id="circle-paymaster"
                checked={useCirclePaymaster}
                onCheckedChange={handleCirclePaymasterChange}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="ens-reverse-name" className="text-base">
                  ENS Reverse Name
                </Label>
                <div className="text-sm text-gray-500">Display ENS names instead of addresses when available</div>
              </div>
              <Switch id="ens-reverse-name" checked={ensReverseName} onCheckedChange={handleEnsReverseNameChange} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Configuration</CardTitle>
            <CardDescription>Your current RollPay settings overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Dark Mode:</span>
                <span className={darkMode ? "text-green-600" : "text-gray-400"}>
                  {darkMode ? "Enabled" : "Disabled"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Circle Paymaster:</span>
                <span className={useCirclePaymaster ? "text-green-600" : "text-gray-400"}>
                  {useCirclePaymaster ? "Enabled" : "Disabled"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">ENS Reverse Name:</span>
                <span className={ensReverseName ? "text-green-600" : "text-gray-400"}>
                  {ensReverseName ? "Enabled" : "Disabled"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
