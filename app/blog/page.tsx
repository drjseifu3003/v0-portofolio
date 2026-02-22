import Link from "next/link"
import { Button } from "@/components/ui/button"

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 py-20">
      <div className="container max-w-4xl">
        <div className="mb-10 text-center">
          <p className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
            Strategic Engineering Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Notes on Scalable Architecture, Hardened Security, and Revenue-Ready Speed
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Practical breakdowns from real production environments supporting high growth and high reliability demands.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 text-center">
          <h2 className="text-2xl font-semibold mb-3">Articles are being refreshed for 2026</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            In the meantime, book a 15-minute architecture audit and get a focused bottleneck map for your product.
          </p>
          <Link href="/#contact">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Book a 15-Min Architecture Audit</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default BlogPage
