-- Seed catalog content (mirrors src/content/seed.ts)

insert into public.services (brand, slug, title, summary, icon, sort_order) values
  ('ennobler','ai-automation','AI & Automation Solutions','Custom AI models, LLM integrations, and workflow automation that cut manual effort and unlock new capabilities.','sparkles',1),
  ('ennobler','quality-assurance','Software Quality Assurance','Manual and automated testing across web, mobile, and APIs — so bugs get caught before your users do.','shield-check',2),
  ('ennobler','software-development','Custom Software Development','End-to-end software engineering for complex business problems — from architecture to production-ready delivery.','code',3),
  ('ennobler','digital-transformation','IT Consulting & Digital Transformation','Strategic guidance to modernize legacy systems, define roadmaps, and align your tech stack with business goals.','refresh-cw',4),
  ('ennobler','cloud-devops','Cloud & DevOps Solutions','Cloud-native infrastructure, CI/CD pipelines, and DevOps practices that speed up delivery and reduce downtime.','cloud',5),
  ('ennobler','ui-ux-design','UI/UX & Product Design','Research-led design that turns complex workflows into intuitive, delightful product experiences users love.','pen-tool',6),
  ('ennobler','mobile-app-development','Mobile App Development','Native and cross-platform mobile apps for iOS and Android — built for performance, retention, and growth.','smartphone',7),
  ('ennobler','api-development','API Development & Integrations','Well-documented, secure REST and GraphQL APIs — plus third-party integrations that keep your systems connected.','webhook',8),
  ('ennobler','ecommerce-solutions','E-Commerce Solutions','Full-featured online stores with smooth checkout, inventory management, and integrations built to drive conversions.','shopping-cart',9),
  ('ennobler','web-platform-development','Web & Platform Development','High-performance web platforms built for speed, scalability, and seamless user experience across all devices.','monitor-smartphone',10),
  ('oolo','brand-strategy','Brand Strategy & Identity','Positioning, narrative, and identity that stands out.','palette',1),
  ('oolo','social-media','Social Media Marketing','Always-on social that builds an audience and converts.','share-2',2),
  ('oolo','content','Content Creation','Editorial, video, and design that earns attention.','pen-tool',3),
  ('oolo','creative','Creative Design','Campaign-grade creative across every channel.','sparkles',4),
  ('oolo','campaign','Campaign Planning','Integrated campaigns mapped to measurable goals.','megaphone',5),
  ('oolo','digital-growth','Digital Growth Support','Paid, SEO, and lifecycle growth that compounds.','trending-up',6);

insert into public.projects (brand, slug, title, summary, tags, sort_order) values
  ('ennobler','fintech-platform','Fintech Platform Rebuild','Re-architected a payments platform for 10x scale.','{Platform,Cloud}',1),
  ('oolo','dtc-launch','DTC Brand Launch','0→1 brand and growth engine for a new consumer label.','{Brand,Growth}',2),
  ('joint','retail-omnichannel','Omnichannel Retail','Engineering + marketing in lockstep for a retail rollout.','{Joint,Campaign}',3);

insert into public.pricing_plans (brand, name, price, cadence, features, highlighted, sort_order) values
  ('ennobler','Pilot','$5k','/ project','{Scoped MVP,QA included,2-week sprints}',false,1),
  ('ennobler','Build','$15k','/ month','{Dedicated squad,CI/CD + cloud,Roadmap ownership}',true,2),
  ('ennobler','Scale','Custom',null,'{Multi-team delivery,SLAs,Compliance}',false,3),
  ('oolo','Project Based','$3k','/ project','{One-time campaign,Creative + copy,Launch support}',false,1),
  ('oolo','Retainer Model','$8k','/ month','{Always-on growth,Content + paid,Monthly reporting}',true,2),
  ('oolo','Team Hiring','Custom',null,'{Embedded creatives,Dedicated strategist,Flexible scope}',false,3);

insert into public.job_postings (title, department, location, employment_type, active) values
  ('Senior Frontend Engineer','Engineering','Remote','Full-time',true),
  ('Growth Marketer','Marketing','Hybrid','Full-time',true),
  ('Brand Designer','Creative','Remote','Contract',true);
