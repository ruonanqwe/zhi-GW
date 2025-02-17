import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">农财通</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">智能农业财务管理平台，助力现代农业发展</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M8.691 2.188C3.891 3.788 0 8.388 0 13.688c0 3.388 1.791 6.488 4.691 8.588c0.5 0.3 1.141-0.3 0.991-0.9c-0.2-0.8-0.3-1.7-0.3-2.6c0-4.688 3.591-8.588 8.191-8.988c-0.2-0.6-0.5-1.2-0.891-1.7c-1.591-2.188-3.591-3.688-6.091-4.188c-0.3-0.1-0.5-0.1-0.8-0.1c-0.891 0-1.691 0.4-2.191 1.1c-0.5 0.7-0.691 1.6-0.391 2.4c0.2 0.5 0.791 0.7 1.191 0.3c0.2-0.2 0.3-0.5 0.3-0.8c0-0.4-0.2-0.7-0.5-0.9c-0.3-0.2-0.691-0.2-1.091 0z" />
                </svg>
                <span className="sr-only">WeChat</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M12.003 2C6.478 2 2 6.478 2 12.003c0 5.526 4.478 10.003 10.003 10.003c5.526 0 10.003-4.478 10.003-10.003C22.006 6.478 17.528 2 12.003 2zM12.5 17.503c-0.671 0-1.205-0.534-1.205-1.205s0.534-1.205 1.205-1.205s1.205 0.534 1.205 1.205S13.171 17.503 12.5 17.503zM14.801 12.132c-0.309 0.389-0.979 0.989-1.338 1.339c-0.169 0.164-0.276 0.357-0.276 0.625v0.501h-1.378v-0.501c0-0.518 0.19-0.984 0.478-1.338c0.389-0.389 0.908-0.908 1.217-1.298c0.219-0.279 0.328-0.518 0.328-0.757c0-0.279-0.109-0.518-0.328-0.757c-0.219-0.219-0.518-0.328-0.908-0.328c-0.389 0-0.688 0.109-0.908 0.328c-0.219 0.239-0.328 0.518-0.328 0.837h-1.378c0-0.757 0.269-1.378 0.797-1.847c0.518-0.478 1.217-0.707 2.087-0.707c0.868 0 1.567 0.229 2.087 0.707c0.518 0.469 0.797 1.09 0.797 1.847C15.748 11.254 15.439 11.743 14.801 12.132z" />
                </svg>
                <span className="sr-only">QQ</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M12 2C6.478 2 2 6.478 2 12s4.478 10 10 10 10-4.478 10-10S17.522 2 12 2zm4.013 15.873h-2.678v-5.535c0-.998-.017-2.283-1.389-2.283-1.389 0-1.601 1.086-1.601 2.207v5.611H7.667V8.287h2.567v1.174h.037c.356-.675 1.227-1.389 2.523-1.389 2.698 0 3.197 1.775 3.197 4.082v5.719h.022z" />
                </svg>
                <span className="sr-only">CSDN</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">产品</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/products/features">功能介绍</Link>
              </li>
              <li>
                <Link href="/download">软件下载</Link>
              </li>
              <li>
                <Link href="/products/updates">更新日志</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">资源</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/docs">使用文档</Link>
              </li>
              <li>
                <Link href="/api">API 文档</Link>
              </li>
              <li>
                <Link href="/help">帮助中心</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">关于</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/about">公司介绍</Link>
              </li>
              <li>
                <Link href="/contact">联系我们</Link>
              </li>
              <li>
                <Link href="/careers">加入我们</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-sm font-semibold mb-2">订阅我们的新闻</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">获取最新的农业科技和政策资讯</p>
              <div className="flex max-w-md mx-auto lg:mx-0">
                <Input type="email" placeholder="输入您的邮箱" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none">
                  订阅 <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <h3 className="text-sm font-semibold mb-2">关注我们</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <Link href="/wechat">微信公众号</Link>
                </li>
                <li>
                  <Link href="/blog">官方博客</Link>
                </li>
                <li>
                  <Link href="/community">技术社区</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">© 2024 农财通. 保留所有权利.</div>
        </div>
      </div>
    </footer>
  )
}

