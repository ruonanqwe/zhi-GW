import { Download, ChevronRight, BarChart3, Users, Shield, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">农财通</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary">
              功能特点
            </a>
            <a href="#download" className="text-sm font-medium hover:text-primary">
              软件下载
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary">
              关于我们
            </a>
            <Button>立即开始</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-24 sm:py-32">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              智慧农业金融解决方案
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              为农业经营者提供专业的金融服务平台，助力现代农业发展
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                免费试用
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                了解更多
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="container py-16 sm:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">核心功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <CardTitle>数据分析</CardTitle>
                <CardDescription>全面的农业经营数据分析，助您做出明智决策</CardDescription>
              </CardHeader>
              <CardContent>实时监控农产品市场动态，提供专业的数据分析报告</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>供应链管理</CardTitle>
                <CardDescription>打通上下游供应链，优化资源配置</CardDescription>
              </CardHeader>
              <CardContent>连接农户、供应商和采购商，实现高效协同</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle>金融服务</CardTitle>
                <CardDescription>安全可靠的农业金融服务平台</CardDescription>
              </CardHeader>
              <CardContent>提供贷款、保险等多样化金融产品，保障农业生产</CardContent>
            </Card>
          </div>
        </section>

        <section id="download" className="container py-16 sm:py-24 bg-muted/50">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">下载农财通</h2>
            <p className="max-w-[600px] text-gray-500 mb-8">支持 Windows、MacOS 等多个平台，随时随地管理您的农业经营</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Windows 版本
              </Button>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                MacOS 版本
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="container py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">关于我们</h2>
              <p className="text-gray-500 mb-4">
                农财通是一家专注于农业金融科技的创新企业，致力于为农业经营者提供专业、高效的金融服务解决方案。
              </p>
              <p className="text-gray-500 mb-4">
                我们运用先进的技术，整合农业产业链资源，帮助农业经营者提高生产效率，实现可持续发展。
              </p>
              <Button variant="outline">
                了解更多
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[400px] bg-muted rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted-foreground/20 rounded-lg" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-4">产品</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>功能介绍</li>
                <li>价格方案</li>
                <li>更新日志</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">资源</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>使用文档</li>
                <li>API 文档</li>
                <li>常见问题</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">关于</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>公司介绍</li>
                <li>联系我们</li>
                <li>加入我们</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">关注我们</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>微信公众号</li>
                <li>官方博客</li>
                <li>技术社区</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 农财通. 保留所有权利.
          </div>
        </div>
      </footer>
    </div>
  )
}

