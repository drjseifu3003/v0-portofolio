"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SkillProgress } from "./skill-progress"
import { FadeIn } from "./animations"

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 scroll-mt-20 bg-white dark:bg-zinc-950">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            My expertise spans across frontend, backend, DevOps, and SaaS development.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="saas">SaaS</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="space-y-6">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillProgress name="Next.js" level={95} color="emerald" />
                <SkillProgress name="React.js" level={95} color="blue" />
                <SkillProgress name="TypeScript" level={90} color="purple" />
                <SkillProgress name="JavaScript" level={95} color="amber" />
                <SkillProgress name="Redux" level={85} color="rose" />
                <SkillProgress name="React Query" level={85} color="emerald" />
                <SkillProgress name="Redux Toolkit" level={85} color="blue" />
                <SkillProgress />
                <SkillProgress name="Redux Toolkit" level={85} color="blue" />
                <SkillProgress name="Framer Motion" level={80} color="purple" />
                <SkillProgress name="Performance Optimization" level={90} color="emerald" />
                <SkillProgress name="SEO" level={85} color="amber" />
              </div>
            </FadeIn>
          </TabsContent>

          <TabsContent value="backend" className="space-y-6">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillProgress name="Node.js" level={95} color="emerald" />
                <SkillProgress name="RESTful API" level={95} color="blue" />
                <SkillProgress name="GraphQL" level={85} color="purple" />
                <SkillProgress name="Microservices" level={90} color="amber" />
                <SkillProgress name="PostgreSQL" level={85} color="rose" />
                <SkillProgress name="MongoDB" level={90} color="emerald" />
                <SkillProgress name="SQL Server" level={85} color="blue" />
                <SkillProgress name="System Design" level={90} color="purple" />
              </div>
            </FadeIn>
          </TabsContent>

          <TabsContent value="devops" className="space-y-6">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillProgress name="AWS" level={90} color="amber" />
                <SkillProgress name="GCP" level={85} color="blue" />
                <SkillProgress name="Azure" level={80} color="purple" />
                <SkillProgress name="CI/CD" level={90} color="emerald" />
                <SkillProgress name="Github Actions" level={90} color="rose" />
                <SkillProgress name="Docker" level={90} color="blue" />
                <SkillProgress name="Kubernetes" level={85} color="emerald" />
                <SkillProgress name="Terraform" level={80} color="purple" />
              </div>
            </FadeIn>
          </TabsContent>

          <TabsContent value="saas" className="space-y-6">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillProgress name="Multitenancy" level={90} color="emerald" />
                <SkillProgress name="SaaS Architecture" level={90} color="blue" />
                <SkillProgress name="Scalable Systems" level={90} color="purple" />
                <SkillProgress name="Cloud Infrastructure" level={85} color="amber" />
              </div>
            </FadeIn>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
