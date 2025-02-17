import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">系统设置</h1>
        <p className="text-muted-foreground">管理系统配置和基本设置</p>
      </div>

      <Tabs defaultValue="basic">
        <TabsList className="mb-4">
          <TabsTrigger value="basic">基础设置</TabsTrigger>
          <TabsTrigger value="notification">通知设置</TabsTrigger>
          <TabsTrigger value="security">安全设置</TabsTrigger>
          <TabsTrigger value="system">系统设置</TabsTrigger>
          <TabsTrigger value="api">API 设置</TabsTrigger>
          <TabsTrigger value="monitor">监控设置</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>基本设置</CardTitle>
                <CardDescription>配置系统的基本信息和参数</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="site-name">网站名称</Label>
                  <Input id="site-name" defaultValue="农业财务管理系统" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-desc">网站描述</Label>
                  <Input id="site-desc" defaultValue="高效的补贴申请和管理平台" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>维护模式</Label>
                    <p className="text-sm text-muted-foreground">启用后仅指定管理员可访问系统</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>界面设置</CardTitle>
                <CardDescription>配置系统界面和本地化选项</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="theme">主题模式</Label>
                  <Select defaultValue="light">
                    <SelectTrigger>
                      <SelectValue placeholder="选择主题模式" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">浅色模式</SelectItem>
                      <SelectItem value="dark">深色模式</SelectItem>
                      <SelectItem value="system">跟随系统</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">系统语言</Label>
                  <Select defaultValue="zh">
                    <SelectTrigger>
                      <SelectValue placeholder="选择系统语言" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zh">简体中文</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">时区设置</Label>
                  <Select defaultValue="UTC+8">
                    <SelectTrigger>
                      <SelectValue placeholder="选择时区" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC+8">中国标准时间 (UTC+8)</SelectItem>
                      <SelectItem value="UTC">协调世界时 (UTC)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Add other tab contents as needed */}
      </Tabs>
    </div>
  )
}

