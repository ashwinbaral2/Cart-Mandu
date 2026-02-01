// src/features/counter/Counter.tsx
'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { increment, decrement } from './counterSlice'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'

export default function Counter() {
  const count = useAppSelector((state: any) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-900 to-slate-800 p-4">
      <Card className="w-full max-w-sm bg-slate-800 border-slate-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white">Counter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <p className="text-5xl font-bold text-white">{count}</p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => dispatch(decrement())}
              size="lg"
              className="w-20 text-xl font-bold bg-red-600 hover:bg-red-700 text-white"
            >
              −
            </Button>
            <Button
              onClick={() => dispatch(increment())}
              size="lg"
              className="w-20 text-xl font-bold bg-green-600 hover:bg-green-700 text-white"
            >
              +
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
