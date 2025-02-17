import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Phone, Mail, MapPin, CircleDollarSign, FileSpreadsheet, BarChart3, Shield } from "lucide-react"
import { Carousel } from "@/components/carousel"

const features = [
  {
    icon: <CircleDollarSign className="h-8 w-8 text-primary" />,
    title: "农业补贴管理",
    description: "一站式农业补贴申请平台",
    items: [
      "补贴政策查询",
      "在线补贴申请",
      "申请进度跟踪",
      "补贴发放记录"
    ]
  },
  {
    icon: <FileSpreadsheet className="h-8 w-8 text-primary" />,
    title: "财务记账管理",
    description: "智能农业财务管理系统",
    items: [
      "日常收支记录",
      "农资采购管理",
      "销售收入统计",
      "财务报表生成"
    ]
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "数据分析报告",
    description: "专业的农业数据分析",
    items: [
      "收益分析报告",
      "成本核算分析",
      "市场行情预测",
      "经营状况评估"
    ]
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "农业保险服务",
    description: "全面的农业保险解决方案",
    items: [
      "保险产品推荐",
      "在线投保服务",
      "理赔进度查询",
      "风险评估报告"
    ]
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4 h-full flex items-center justify-center -mt-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full py-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-8">
                智慧农业解决方案
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                农业财务管理的
                <span className="text-primary">智能平台</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4">
                为农业经营者提供专业的财务管理和补贴申请服务，助力现代农业发展
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="https://xiaohai-nct.netlify.app" target="_blank" rel="noopener noreferrer">
                    免费试用
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  申请账户
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 mt-12 border-t">
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">补贴申请通过率</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50万+</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">服务农户数量</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">31个</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">覆盖省份</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Carousel />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-[80%]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">最新版本</p>
                    <h3 className="text-lg font-semibold">农财通 V1.0</h3>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    下载
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">核心功能</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              农财通为您提供全方位的农业金融服务，助力农业现代化发展
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  {feature.icon}
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">联系我们</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                如果您有任何问题或建议，请随时与我们联系。我们的团队将竭诚为您服务。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">电话</p>
                    <p className="font-medium">173181325038</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">邮箱</p>
                    <p className="font-medium">1963876196@qq.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">地址</p>
                    <p className="font-medium">四川省成都市成华区</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">姓名</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">邮箱</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">留言</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button className="w-full">提交</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

