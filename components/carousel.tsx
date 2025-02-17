"use client"

import { useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const slides = [
  {
    src: "/首页展示.png",
    alt: "农财通平台展示"
  },
  {
    src: "/产品界面-财务管理.png",
    alt: "财务管理系统"
  },
  {
    src: "/产品界面-补贴申请.png",
    alt: "补贴申请系统"
  }
]

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[600px] min-w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
} 