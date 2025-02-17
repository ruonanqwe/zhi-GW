import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // 数据验证
    if (!body.name || !body.email || !body.content) {
      return NextResponse.json({
        code: 400,
        message: "请填写完整信息"
      }, { status: 400 })
    }
    
    // 构造请求数据
    const requestData = {
      type: "留言",  // 添加消息类型
      status: "未读",  // 添加状态
      title: `来自 ${body.name} 的留言`,  // 添加标题
      name: body.name,
      email: body.email,
      content: body.content,
      createTime: new Date().toISOString()  // 添加创建时间
    }

    console.log('Sending request to API with body:', requestData)

    // 转发到后端 API
    const res = await fetch('https://xiaohai-nct.netlify.app/api/public/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://xiaohai-nct.netlify.app'
      },
      body: JSON.stringify(requestData),
      cache: 'no-store'
    })
    
    console.log('API Response status:', res.status)
    
    if (!res.ok) {
      const errorText = await res.text()
      console.error('API Error response:', errorText)
      
      // 根据状态码返回不同的错误信息
      if (res.status === 400) {
        return NextResponse.json({
          code: 400,
          message: "请求格式不正确，请检查输入内容"
        }, { status: 400 })
      }
      
      return NextResponse.json({
        code: res.status,
        message: `提交失败: ${res.statusText}`
      }, { status: res.status })
    }

    const data = await res.json()
    console.log('API Response data:', data)
    
    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Message submission error details:', {
      message: error.message,
      stack: error.stack,
      cause: error.cause
    })
    
    return NextResponse.json({
      code: 500,
      message: "服务器处理失败，请稍后重试"
    }, { status: 500 })
  }
} 