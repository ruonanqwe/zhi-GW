"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Tag, User } from "lucide-react"

interface Announcement {
  id: string
  title: string
  date: string
  content: string
  type: string
  status: string
  department?: string
  priority?: string
  author?: string
  tags?: string[]
}

export default function UpdatesPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch('/api/announcements')
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        
        const response = await res.json()
        if (!response.data) {
          throw new Error('No data in response')
        }

        // 按日期排序
        const sortedAnnouncements = response.data.sort((a: Announcement, b: Announcement) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        setAnnouncements(sortedAnnouncements)
      } catch (error: any) {
        console.error('Error fetching announcements:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAnnouncements()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 页面标题部分 */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                更新历史
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                了解农财通的发展历程，见证我们不断进步的每一步
              </p>
            </div>
            
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent" />
                <p className="mt-4 text-gray-600 dark:text-gray-400">加载中...</p>
              </div>
            ) : announcements.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">
                  暂无更新记录
                  <br />
                  <span className="text-sm mt-2 block">请稍后再试或联系管理员</span>
                </p>
              </div>
            ) : (
              <div className="relative space-y-8">
                {/* 时间线 */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-blue-500/50 ml-8 lg:ml-16" />
                
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="relative pl-20 lg:pl-32">
                    {/* 时间点 */}
                    <div className="absolute left-7 lg:left-[60px] top-4 w-4 h-4 bg-gradient-to-br from-primary to-blue-500 rounded-full shadow-lg shadow-primary/20 ring-4 ring-white dark:ring-gray-900" />
                    
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                      <div className="flex items-start justify-between mb-4">
                        <div className="space-y-3">
                          <h2 className="text-xl font-bold">{announcement.title}</h2>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{formatDate(announcement.date)}</span>
                            </div>
                            {announcement.author && (
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{announcement.author}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="secondary">
                              {announcement.type}
                            </Badge>
                            {announcement.status === "置顶" && (
                              <Badge variant="default">置顶</Badge>
                            )}
                            {announcement.priority === "高" && (
                              <Badge variant="destructive">重要</Badge>
                            )}
                            {announcement.department && (
                              <Badge variant="outline" className="text-blue-500 border-blue-500">
                                {announcement.department}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="pl-4 border-l-2 border-gray-100 dark:border-gray-700 mt-6 prose dark:prose-invert max-w-none">
                        {announcement.content.split('\n').map((line, lineIndex) => (
                          <p
                            key={lineIndex}
                            className="text-gray-600 dark:text-gray-400 mb-2 last:mb-0"
                          >
                            {line.trim()}
                          </p>
                        ))}
                      </div>

                      {announcement.tags && announcement.tags.length > 0 && (
                        <div className="mt-6 flex items-start gap-2">
                          <Tag className="h-4 w-4 text-gray-400 mt-1" />
                          <div className="flex flex-wrap gap-2">
                            {announcement.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs bg-gray-50 dark:bg-gray-700">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 