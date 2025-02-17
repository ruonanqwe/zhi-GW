"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, CheckCircle2, AlertCircle, XCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { FeedbackModal } from "@/components/ui/feedback-modal"

interface MessageForm {
  name: string
  phone: string
  email: string
  content: string
}

export default function ContactPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<MessageForm>({
    name: '',
    phone: '',
    email: '',
    content: ''
  })
  const [feedback, setFeedback] = useState<{
    show: boolean
    type: "success" | "warning" | "error"
    title: string
    message: string
    details?: React.ReactNode
  }>({
    show: false,
    type: "success",
    title: "",
    message: "",
    details: null
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // 表单验证
      if (!form.name.trim() || !form.email.trim() || !form.content.trim()) {
        throw new Error('请填写完整信息')
      }

      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          content: form.content.trim()
        })
      })

      const data = await res.json()
      
      if (data.code === 200) {
        setFeedback({
          show: true,
          type: "success",
          title: "提交成功",
          message: "感谢您的留言，我们会尽快回复！",
          details: (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">留言人：</span>
                <span>{form.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">联系邮箱：</span>
                <span>{form.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">提交时间：</span>
                <span>{new Date().toLocaleString('zh-CN')}</span>
              </div>
            </div>
          )
        })
        
        // 清空表单
        setForm({
          name: '',
          phone: '',
          email: '',
          content: ''
        })
      } else {
        setFeedback({
          show: true,
          type: "warning",
          title: "提交失败",
          message: data.message || '服务器处理失败',
          details: (
            <div className="flex items-center gap-2">
              <span className="font-medium">错误代码：</span>
              <span>{data.code}</span>
            </div>
          )
        })
      }
    } catch (error: any) {
      setFeedback({
        show: true,
        type: "error",
        title: "提交失败",
        message: error.message || "网络错误，请稍后重试",
        details: "如果问题持续存在，请通过其他方式联系我们"
      })
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">联系我们</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">如果您有任何问题或建议，请随时与我们联系</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">给我们留言</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">姓名</label>
                    <Input
                      required
                      placeholder="请输入您的姓名"
                      value={form.name}
                      onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">电话</label>
                    <Input
                      required
                      type="tel"
                      placeholder="请输入您的电话"
                      value={form.phone}
                      onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">邮箱</label>
                  <Input
                    required
                    type="email"
                    placeholder="请输入您的邮箱"
                    value={form.email}
                    onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">留言内容</label>
                  <Textarea
                    required
                    placeholder="请输入您的留言内容"
                    rows={6}
                    value={form.content}
                    onChange={e => setForm(prev => ({ ...prev, content: e.target.value }))}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "提交中..." : "提交留言"}
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">常见问题</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeedbackModal
        {...feedback}
        isOpen={feedback.show}
        onClose={() => setFeedback(prev => ({ ...prev, show: false }))}
      />
    </div>
  )
}

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "电话咨询",
    content: "173181325038",
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "电子邮箱",
    content: "1963876196@qq.com",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "服务时间",
    content: "周一至周日 9:00-18:00",
  },
]

const faqs = [
  {
    question: "如何注册农财通账号？",
    answer: "您可以通过官网或手机APP下载安装农财通，按照提示完成注册流程。注册时需要提供基本信息和验证手机号码。",
  },
  {
    question: "忘记密码怎么办？",
    answer: "您可以通过&quot;忘记密码&quot;功能，使用注册手机号进行身份验证，然后重置密码。如有问题可联系客服协助。",
  },
  {
    question: "如何申请农业补贴？",
    answer:
      "登录农财通后，进入&quot;补贴申请&quot;模块，选择适合的补贴项目，按要求填写信息并上传相关证明材料即可提交申请。",
  },
  {
    question: "系统支持哪些设备使用？",
    answer: "农财通支持Windows电脑、iOS和Android手机/平板等多种设备使用，数据可在不同设备间同步。",
  },
]

