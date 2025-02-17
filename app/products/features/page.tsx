import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">功能介绍</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <feature.icon className="h-6 w-6 mr-2 text-primary" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.subFeatures.map((subFeature, subIndex) => (
                    <li key={subIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{subFeature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    icon: CheckCircle,
    title: "智能财务管理",
    description: "全面的农业财务管理解决方案",
    subFeatures: ["自动化记账和报表生成", "多维度财务分析", "智能预警和风险控制", "农业补贴管理"],
  },
  {
    icon: CheckCircle,
    title: "补贴申请助手",
    description: "简化农业补贴申请流程",
    subFeatures: ["一键式补贴申请", "智能材料审核", "申请进度实时跟踪", "政策解读和建议"],
  },
  {
    icon: CheckCircle,
    title: "农产品市场分析",
    description: "实时掌握市场动态",
    subFeatures: ["农产品价格趋势分析", "供需关系预测", "竞品对比分析", "个性化市场报告"],
  },
  {
    icon: CheckCircle,
    title: "智能种植建议",
    description: "基于大数据的种植决策支持",
    subFeatures: ["作物选择建议", "最佳种植时间预测", "病虫害预警", "产量优化方案"],
  },
  {
    icon: CheckCircle,
    title: "供应链管理",
    description: "优化农业生产供应链",
    subFeatures: ["供应商管理", "库存智能管理", "物流跟踪", "采购成本优化"],
  },
  {
    icon: CheckCircle,
    title: "农业保险服务",
    description: "全面的农业保险解决方案",
    subFeatures: ["保险产品推荐", "在线投保", "理赔进度跟踪", "风险评估报告"],
  },
]

