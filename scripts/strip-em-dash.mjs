import fs from "fs"
import path from "path"

const roots = ["app", "components", "lib", "public"]

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    const st = fs.statSync(p)
    if (st.isDirectory()) {
      if (name === "node_modules" || name === ".git" || name === ".next") continue
      walk(p)
    } else if (/\.(tsx|ts|json)$/.test(name)) {
      let s = fs.readFileSync(p, "utf8")
      if (!s.includes("\u2014")) continue
      const orig = s
      // Tight em dash between word chars to space (e.g. system-with-word)
      s = s.replace(/(\w)\u2014(\w)/g, "$1 $2")
      // Spaced em dash to comma (clause break)
      s = s.replace(/ \u2014 /g, ", ")
      // Remaining em dash to spaced ASCII hyphen (titles, etc.)
      s = s.replace(/\u2014/g, " - ")
      // Avoid `, .` cleanup: it corrupts `, ...props` (spread) in TS/JS.
      s = s.replace(/, ,/g, ", ")
      if (s !== orig) {
        fs.writeFileSync(p, s)
        console.log("updated", p)
      }
    }
  }
}

for (const r of roots) {
  if (fs.existsSync(r)) walk(r)
}
