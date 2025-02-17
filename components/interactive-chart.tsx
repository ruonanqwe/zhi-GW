"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function InteractiveChart({ className = "" }) {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["一月", "二月", "三月", "四月", "五月", "六月"],
            datasets: [
              {
                label: "农产品价格指数",
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: "index",
              intersect: false,
            },
            plugins: {
              tooltip: {
                enabled: true,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        })
      }
    }
  }, [])

  return <canvas ref={chartRef} className={className} />
}

