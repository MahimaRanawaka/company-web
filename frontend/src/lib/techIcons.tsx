import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiPython, SiNodedotjs, SiReact, SiTypescript, SiPostgresql, SiMongodb, SiRedis,
  SiDocker, SiGithubactions, SiGraphql, SiNextdotjs, SiTailwindcss, SiSanity,
  SiContentful, SiVercel, SiCloudflare, SiSupabase, SiStripe, SiGoogleanalytics,
  SiSwift, SiKotlin, SiExpo, SiFirebase, SiRedux, SiSentry, SiFigma, SiHotjar,
  SiMiro, SiStorybook, SiLottiefiles, SiGooglecloud, SiTerraform, SiPulumi,
  SiKubernetes, SiHelm, SiGitlab, SiDatadog, SiGrafana, SiPrometheus, SiArgo,
  SiFastapi, SiExpress, SiOpenapiinitiative, SiPostman, SiJsonwebtokens, SiRabbitmq,
  SiApachekafka, SiLangchain, SiAnthropic, SiHuggingface, SiApacheairflow, SiN8N,
  SiCelery, SiCypress, SiSelenium, SiK6, SiApachejmeter, SiJira, SiShopify,
  SiWoocommerce, SiElasticsearch, SiGoogleplay, SiAppium,
} from "react-icons/si";
import {
  Hexagon, Webhook, KeyRound, DraftingCompass, Cloud, FileSearch, RefreshCw,
  Infinity as InfinityIcon, Braces, Database, FileText, Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** Brand logo + official colour for a technology tag. Keyed by the tag name
 *  normalised to lowercase alphanumerics (so "Node.js", "GitHub Actions",
 *  "OpenAPI 3.0" all resolve). Near-black brand marks use "currentColor" so
 *  they stay visible in both light and dark themes. */
type Entry = { Icon: IconType; color: string };

const MAP: Record<string, Entry> = {
  python: { Icon: SiPython, color: "#3776AB" },
  nodejs: { Icon: SiNodedotjs, color: "#5FA04E" },
  react: { Icon: SiReact, color: "#61DAFB" },
  reactnative: { Icon: SiReact, color: "#61DAFB" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  postgresql: { Icon: SiPostgresql, color: "#4169E1" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  redis: { Icon: SiRedis, color: "#FF4438" },
  docker: { Icon: SiDocker, color: "#2496ED" },
  githubactions: { Icon: SiGithubactions, color: "currentColor" },
  graphql: { Icon: SiGraphql, color: "#E10098" },
  nextjs: { Icon: SiNextdotjs, color: "currentColor" },
  tailwindcss: { Icon: SiTailwindcss, color: "#06B6D4" },
  sanity: { Icon: SiSanity, color: "#F03E2F" },
  sanitycms: { Icon: SiSanity, color: "#F03E2F" },
  contentful: { Icon: SiContentful, color: "#2478CC" },
  vercel: { Icon: SiVercel, color: "currentColor" },
  cloudflare: { Icon: SiCloudflare, color: "#F38020" },
  supabase: { Icon: SiSupabase, color: "#3FCF8E" },
  stripe: { Icon: SiStripe, color: "#635BFF" },
  ga4: { Icon: SiGoogleanalytics, color: "#E37400" },
  googleanalytics: { Icon: SiGoogleanalytics, color: "#E37400" },
  swift: { Icon: SiSwift, color: "#F05138" },
  kotlin: { Icon: SiKotlin, color: "#7F52FF" },
  expo: { Icon: SiExpo, color: "currentColor" },
  firebase: { Icon: SiFirebase, color: "#DD2C00" },
  redux: { Icon: SiRedux, color: "#764ABC" },
  sentry: { Icon: SiSentry, color: "#362D59" },
  figma: { Icon: SiFigma, color: "#F24E1E" },
  figjam: { Icon: SiFigma, color: "#F24E1E" },
  hotjar: { Icon: SiHotjar, color: "#FF3C00" },
  miro: { Icon: SiMiro, color: "currentColor" },
  storybook: { Icon: SiStorybook, color: "#FF4785" },
  lottie: { Icon: SiLottiefiles, color: "#00DDB3" },
  gcp: { Icon: SiGooglecloud, color: "#4285F4" },
  googlecloud: { Icon: SiGooglecloud, color: "#4285F4" },
  terraform: { Icon: SiTerraform, color: "#844FBA" },
  pulumi: { Icon: SiPulumi, color: "#8A3391" },
  kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  helm: { Icon: SiHelm, color: "#0F1689" },
  gitlabci: { Icon: SiGitlab, color: "#FC6D26" },
  gitlab: { Icon: SiGitlab, color: "#FC6D26" },
  datadog: { Icon: SiDatadog, color: "#632CA6" },
  grafana: { Icon: SiGrafana, color: "#F46800" },
  prometheus: { Icon: SiPrometheus, color: "#E6522C" },
  argocd: { Icon: SiArgo, color: "#EF7B4D" },
  fastapi: { Icon: SiFastapi, color: "#009688" },
  express: { Icon: SiExpress, color: "currentColor" },
  openapi30: { Icon: SiOpenapiinitiative, color: "#6BA539" },
  openapi: { Icon: SiOpenapiinitiative, color: "#6BA539" },
  postman: { Icon: SiPostman, color: "#FF6C37" },
  jwt: { Icon: SiJsonwebtokens, color: "currentColor" },
  rabbitmq: { Icon: SiRabbitmq, color: "#FF6600" },
  kafka: { Icon: SiApachekafka, color: "currentColor" },
  langchain: { Icon: SiLangchain, color: "#1C3C3C" },
  anthropicclaude: { Icon: SiAnthropic, color: "currentColor" },
  huggingface: { Icon: SiHuggingface, color: "#FF9D00" },
  airflow: { Icon: SiApacheairflow, color: "#017CEE" },
  n8n: { Icon: SiN8N, color: "#EA4B71" },
  celery: { Icon: SiCelery, color: "#37814A" },
  cypress: { Icon: SiCypress, color: "#69D3A7" },
  selenium: { Icon: SiSelenium, color: "#43B02A" },
  appium: { Icon: SiAppium, color: "#662D91" },
  k6: { Icon: SiK6, color: "#7D64FF" },
  jmeter: { Icon: SiApachejmeter, color: "#D22128" },
  jira: { Icon: SiJira, color: "#0052CC" },
  shopifyapi: { Icon: SiShopify, color: "#7AB55C" },
  shopify: { Icon: SiShopify, color: "#7AB55C" },
  woocommerce: { Icon: SiWoocommerce, color: "#96588A" },
  elasticsearch: { Icon: SiElasticsearch, color: "#005571" },
  playconsole: { Icon: SiGoogleplay, color: "#414141" },
};

/** Brand logos with no react-icons entry — supplied as image files in
 *  /public/tech/. Values are the base filename (no extension); the loader
 *  tries .svg then .png, then falls back to the neutral glyph, so an unfilled
 *  entry never shows a broken image. */
const ASSET: Record<string, string> = {
  openai: "openai",
  openaiapi: "openai",
  aws: "aws",
  awss3: "s3",
  s3: "s3",
  azure: "azure",
  playwright: "playwright",
  pinecone: "pinecone",
  weaviate: "weaviate",
  llamaindex: "llamaindex",
  maze: "maze",
  zeroheight: "zeroheight",
  usertesting: "usertesting",
  zustand: "zustand",
  fastlane: "fastlane",
  testflight: "testflight",
  testrail: "testrail",
  browserstack: "browserstack",
  owaspzap: "owaspzap",
  payhere: "payhere",
  medusajs: "medusajs",
};

/** Non-brand / conceptual terms → a closer generic lucide glyph (muted). */
const CONCEPT: Record<string, LucideIcon> = {
  restapis: Webhook,
  rest: Webhook,
  webhooks: Webhook,
  oauth20: KeyRound,
  oauth: KeyRound,
  architecturereview: DraftingCompass,
  cloudstrategy: Cloud,
  legacyassessment: FileSearch,
  agiletransformation: RefreshCw,
  devopsmaturity: InfinityIcon,
  apistrategy: Braces,
  dataplatformdesign: Database,
  vendorrfp: FileText,
  teamstructuring: Users,
};

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Tries /tech/{base}.svg, then .png, then the neutral glyph. A missing file
 *  is served as index.html (200) which the browser can't decode as an image,
 *  so onError fires and advances to the next candidate. */
const EXTS = ["svg", "png"] as const;
function AssetIcon({ base, className }: { base: string; className?: string }) {
  const [i, setI] = useState(0);
  if (i >= EXTS.length) return <Hexagon className={cn(className, "text-subtle")} aria-hidden />;
  const src = `/tech/${base}.${EXTS[i]}`;
  return (
    <img
      key={src}
      src={src}
      alt=""
      aria-hidden
      onError={() => setI((n) => n + 1)}
      className={cn(className, "object-contain")}
    />
  );
}

/** Resolves a technology tag to an icon, in priority order:
 *  brand SVG (react-icons) → brand PNG (/tech) → conceptual glyph → fallback. */
export function TechIcon({ name, className }: { name: string; className?: string }) {
  const key = norm(name);

  const entry = MAP[key];
  if (entry) {
    const { Icon, color } = entry;
    return <Icon className={className} style={{ color }} aria-hidden />;
  }

  const asset = ASSET[key];
  if (asset) return <AssetIcon base={asset} className={className} />;

  const Concept = CONCEPT[key];
  if (Concept) return <Concept className={cn(className, "text-subtle")} aria-hidden />;

  return <Hexagon className={cn(className, "text-subtle")} aria-hidden />;
}
