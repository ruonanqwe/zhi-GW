import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Apple, ComputerIcon as Windows, SmartphoneIcon as Android } from "lucide-react"
import Image from "next/image"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">软件下载</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 lg:mb-20">
            {downloads.map((item, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    {item.icon}
                  </div>
                  <CardTitle className="text-center text-lg sm:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-6">{item.description}</p>
                  <div className="space-y-3">
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      立即下载
                    </Button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">版本：{item.version}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">移动端下载</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl inline-block mb-4">
                  <Image src="/下载二维码.png" alt="iOS App Store" width={200} height={200} className="w-40 h-40" />
                </div>
                <p className="font-medium">iOS App Store</p>
              </div>
              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl inline-block mb-4">
                  <Image src="/下载二维码.png" alt="Android" width={200} height={200} className="w-40 h-40" />
                </div>
                <p className="font-medium">Android 应用</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const downloads = [
  {
    icon: <Windows className="h-8 w-8 text-primary" />,
    title: "Windows 版本",
    description: "适用于 Windows 10 及以上系统",
    version: "1.1.0",
  },
  {
    icon: <Apple className="h-8 w-8 text-primary" />,
    title: "macOS 版本",
    description: "适用于 macOS 10.15 及以上系统",
    version: "1.1.0",
  },
  {
    icon: <Android className="h-8 w-8 text-primary" />,
    title: "Android 版本",
    description: "适用于 Android 8.0 及以上系统",
    version: "1.0.5",
  },
]

