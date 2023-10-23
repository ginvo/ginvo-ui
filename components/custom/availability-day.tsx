"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Plus, Copy } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Input } from "@/components/ui/input"

export default function AvailabilityDay(props) {
  return (
    <div className="flex space-x-20 items-center">
      <div className="flex items-center space-x-2">
        <Switch id="lunes"></Switch>
        <Label htmlFor="lunes">{props.day}</Label>
      </div>
      <div className="flex space-x-4 items-center w-60">
        <Input type="text" placeholder="9:00am" />
        <span>–</span>
        <Input type="text" placeholder="6:00pm" />
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4 text-muted-foreground" />
        </Button>
        <Button variant="ghost" size="icon">
          <Copy className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>
    </div>
  )
}