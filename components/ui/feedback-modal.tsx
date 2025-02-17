"use client"

import { useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react"

interface FeedbackModalProps {
  type: "success" | "warning" | "error"
  title: string
  message: string
  details?: React.ReactNode
  isOpen: boolean
  onClose: () => void
  autoClose?: boolean
  duration?: number
}

export function FeedbackModal({
  type,
  title,
  message,
  details,
  isOpen,
  onClose,
  autoClose = true,
  duration = 5000
}: FeedbackModalProps) {
  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [isOpen, autoClose, duration, onClose])

  const icons = {
    success: <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />,
    warning: <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
    error: <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
  }

  const styles = {
    success: {
      title: "text-green-600 dark:text-green-400",
      bg: "bg-green-50 dark:bg-green-900/20",
    },
    warning: {
      title: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-900/20",
    },
    error: {
      title: "text-red-600 dark:text-red-400",
      bg: "bg-red-50 dark:bg-red-900/20",
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {icons[type]}
            <h2 className={`text-lg font-semibold ${styles[type].title}`}>
              {title}
            </h2>
          </div>
          
          <p className="text-base">{message}</p>
          
          {details && (
            <div className={`rounded-lg ${styles[type].bg} p-4 text-sm text-gray-600 dark:text-gray-300`}>
              {details}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 