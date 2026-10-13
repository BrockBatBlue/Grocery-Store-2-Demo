'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion, useInView } from 'motion/react'

const videoId = 'aZzJtB1DY8A'
const clipDurationSeconds = 10

type YouTubePlayer = {
  destroy: () => void
  getCurrentTime: () => number
  getIframe: () => HTMLIFrameElement
  mute: () => void
  playVideo: () => void
  seekTo: (seconds: number, allowSeekAhead: boolean) => void
}

type YouTubeApi = {
  Player: new (
    element: HTMLElement,
    options: {
      height?: string
      width?: string
      videoId?: string
      playerVars?: Record<string, string | number>
      events: {
        onReady: (event: { target: YouTubePlayer }) => void
        onStateChange: (event: { data: number; target: YouTubePlayer }) => void
      }
    },
  ) => YouTubePlayer
  PlayerState: {
    ENDED: number
  }
}

declare global {
  interface Window {
    YT?: YouTubeApi
    onYouTubeIframeAPIReady?: () => void
  }
}

let youtubeApiPromise: Promise<YouTubeApi> | undefined

function loadYouTubeIframeApi() {
  if (window.YT) {
    return Promise.resolve(window.YT)
  }

  if (!youtubeApiPromise) {
    youtubeApiPromise = new Promise<YouTubeApi>((resolve, reject) => {
      const previousReadyCallback = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        previousReadyCallback?.()
        if (window.YT) {
          resolve(window.YT)
        } else {
          reject(new Error('The YouTube iframe API did not initialize.'))
        }
      }

      let script = document.querySelector<HTMLScriptElement>(
        'script[src="https://www.youtube.com/iframe_api"]',
      )
      if (!script) {
        script = document.createElement('script')
        script.src = 'https://www.youtube.com/iframe_api'
        script.onerror = () => {
          youtubeApiPromise = undefined
          reject(new Error('Failed to load the YouTube iframe API.'))
        }
        document.head.append(script)
      }
    })
  }

  return youtubeApiPromise
}

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const videoIframeRef = useRef<HTMLIFrameElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  useEffect(() => {
    let player: YouTubePlayer | undefined
    let playbackTimer: number | undefined
    let disposed = false

    loadYouTubeIframeApi()
      .then((youtube) => {
        if (disposed || !videoIframeRef.current) {
          return
        }

        player = new youtube.Player(videoIframeRef.current, {
          playerVars: {
            origin: window.location.origin,
          },
          events: {
            onReady: ({ target }) => {
              target.mute()
              target.playVideo()
              playbackTimer = window.setInterval(() => {
                if (target.getCurrentTime() >= clipDurationSeconds) {
                  target.seekTo(0, true)
                  target.playVideo()
                }
              }, 100)
            },
            onStateChange: ({ data, target }) => {
              if (data === youtube.PlayerState.ENDED) {
                target.seekTo(0, true)
                target.playVideo()
              }
            },
          },
        })
      })
      .catch((error: unknown) => {
        console.error(
          'Unable to start the grocery store background video.',
          error,
        )
      })

    return () => {
      disposed = true
      if (playbackTimer !== undefined) {
        window.clearInterval(playbackTimer)
      }
      player?.destroy()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex items-end text-white bg-black h-full min-h-screen overflow-hidden"
    >
      {/* Background Video */}
      <iframe
        ref={videoIframeRef}
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&playsinline=1&rel=0&enablejsapi=1&start=0&end=${clipDurationSeconds}`}
        title="Silent walking tour of an authentic Mexican grocery store"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        aria-hidden="true"
      />

      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 xl:px-16">
        <div className="flex flex-col gap-4 sm:gap-6 py-10 sm:py-16">
          <div className="flex items-start gap-2.5 md:gap-4">
            <p className="sm:text-base text-sm sm:leading-6 leading-5 font-normal text-white sm:max-w-sm">
              We have <span className=" text-emerald-500">the freshest</span>{' '}
              organic produce and groceries for your family. Visit us today and
              experience the difference!
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
            className="flex sm:flex-row flex-col items-start lg:items-baseline gap-4"
          >
            <h1 className=" sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-10 lg:leading-26 font-bold">
              Our Grocery Store
            </h1>
            <div>
              <div className="bg-primary text-emerald-600 rounded-full p-5 ">
                catalogue
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
