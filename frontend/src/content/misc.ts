import type { PageContent } from "./types";

export const ennoblerProducts: PageContent = {
  title: "En'nobler — Products",
  sections: [
    {
      type: "hero",
      eyebrow: "Products",
      title: "Digital products with clear use cases, proof, and direct action.",
      subtitle:
        "Large visual previews, short product descriptions, benefit badges, and clear CTAs — productized engineering you can see, understand, and extend.",
      primaryCta: { label: "View E-commerce Product", to: "/ennobler/products/ecommerce-product" },
      secondaryCta: { label: "View Tourism Product", to: "/ennobler/products/tourism-product" },
      chips: ["Screen 01", "Screen 02", "Screen 03", "Screen 04"],
    },
    {
      type: "productPreview",
      eyebrow: "Product Dropdown Preview",
      title: "Two focused product options",
      subtitle: "Presented in a conversion-focused way — what the product contains, who it helps, and the next action.",
      items: [
        {
          title: "E-commerce Product",
          body: "A structured commerce platform concept for businesses that need catalogue management, product discovery, checkout flow, order handling, stock visibility, and admin-side control. Catalogue · Checkout · Orders · Admin Panel. Best for retail brands, local sellers, product teams, and marketplace ideas.",
          cta: { label: "Open Detail Page", to: "/ennobler/products/ecommerce-product" },
        },
        {
          title: "Tourism Product",
          body: "A tourism-focused product concept for accommodation booking, experience promotion, destination visibility, local business participation, and tourism opportunity growth. Bookings · Promotions · Experiences · Tourism Growth. Best for tourism brands, villa owners, experience providers, and local partners.",
          cta: { label: "Open Detail Page", to: "/ennobler/products/tourism-product" },
        },
      ],
    },
    {
      type: "stats",
      items: [
        { value: "2", label: "Initial Products" },
        { value: "Dropdown", label: "Direct Flow" },
        { value: "QA", label: "Quality Layer" },
        { value: "Demo", label: "CTA Focus" },
      ],
    },
    {
      type: "features",
      eyebrow: "Product Experience",
      title: "Make each product feel tangible before the click.",
      subtitle: "Show what the product contains, who it helps, and what action to take next.",
      columns: 4,
      numbered: true,
      items: [
        { title: "Visual Preview", body: "Dashboard, screen, or workflow previews that make the product feel real." },
        { title: "Benefit Badges", body: "Show product value quickly using small, scannable labels." },
        { title: "Clear CTA", body: "One direct action per product — Open Detail Page or Request Demo." },
        { title: "Proof Sections", body: "Trust, QA, reviews, and related suggestions below the main product area." },
      ],
    },
    {
      type: "features",
      eyebrow: "Detail Pattern",
      title: "A reusable product detail structure.",
      subtitle: "Each product page answers the visitor's main questions quickly — what it is, who it's for, the problem it solves, its features, and how to move forward.",
      columns: 4,
      items: [
        { title: "Overview", body: "What the product is and who it is for." },
        { title: "Features", body: "The core capabilities and modules included." },
        { title: "Workflow", body: "How the product works end to end." },
        { title: "Quality & Support", body: "QA coverage, reliability, and ongoing support." },
      ],
    },
    {
      type: "cta",
      eyebrow: "Primary CTA",
      title: "Want a product built around your business?",
      body: "Request a demo, discuss the product, or open a detail page to see exactly what's inside.",
      cta: { label: "Start a Project", to: "/contact" },
    },
  ],
};

export const ennoblerEcommerceProduct: PageContent = {
  title: "En'nobler — E-commerce Product",
  sections: [
    {
      type: "hero",
      eyebrow: "Product Detail Page",
      title: "E-commerce Product for structured online selling.",
      subtitle:
        "A focused product detail page for an online commerce platform that supports catalogue browsing, checkout flow, order handling, admin control, and business visibility.",
      primaryCta: { label: "Explore Features", to: "#features" },
      secondaryCta: { label: "Discuss This Product", to: "/contact" },
      chips: ["Catalogue", "Checkout", "Orders", "Admin"],
      image: { src: "/showcase/ecommerce.webp", alt: "E-commerce platform preview — admin dashboard, product catalogue, and checkout flow" },
    },
    {
      type: "features",
      eyebrow: "Overview",
      title: "What this product is built to solve",
      subtitle: "The product purpose, user flow, core modules, quality layer, and final conversion path.",
      columns: 2,
      items: [
        { title: "Built for selling products online", body: "Move from manual selling into a structured digital commerce experience with clear customer journeys and admin-side control. Business Ready · Scalable · QA Supported · Admin Control." },
        { title: "Designed for business operations", body: "Support product management, stock visibility, customer order tracking, reporting, and future integrations. User Journey · Dashboard · Workflow · Support." },
      ],
    },
    {
      type: "features",
      anchor: "features",
      eyebrow: "Features",
      title: "Core product modules",
      columns: 3,
      numbered: true,
      items: [
        { title: "Product Catalogue", body: "Manage products, categories, descriptions, pricing, stock visibility, and product media." },
        { title: "Customer Storefront", body: "Let customers browse products, view details, add items, and move through a clean purchase journey." },
        { title: "Checkout Flow", body: "Cart review, customer details, payment handoff, order confirmation, and order tracking." },
        { title: "Order Management", body: "Admin can view orders, update status, manage fulfilment, and monitor customer requests." },
        { title: "Inventory Controls", body: "Stock updates, product availability, low-stock alerts, and admin-side visibility controls." },
        { title: "Reporting Dashboard", body: "Sales, orders, product performance, customer activity, and business decision insights." },
      ],
    },
    {
      type: "steps",
      eyebrow: "Workflow",
      title: "How the product journey works",
      items: [
        { title: "Browse Products", body: "Customer explores product categories and chooses a product that matches their need." },
        { title: "Add to Cart", body: "Customer reviews selected items, quantity, price, and availability before checkout." },
        { title: "Place Order", body: "Customer confirms information and submits the order through the designed checkout flow." },
        { title: "Admin Manages", body: "Business team manages orders, products, inventory, customer requests, and reports." },
      ],
    },
    {
      type: "features",
      eyebrow: "Product Specs",
      title: "Detail blocks for business and technical clarity",
      columns: 3,
      items: [
        { title: "Main Users", body: "Customers, store admin, business owner, product manager." },
        { title: "Key Screens", body: "Home, product listing, product detail, cart, checkout, order status, admin dashboard." },
        { title: "Admin Controls", body: "Product CRUD, order status, stock update, customer support, report overview." },
        { title: "Best For", body: "Retail businesses, local sellers, product-based companies, marketplace concepts." },
        { title: "QA Focus", body: "Cart flow, checkout validation, product availability, admin permissions, order accuracy." },
        { title: "Growth Path", body: "Payment integration, delivery tracking, coupon system, customer accounts, analytics." },
      ],
    },
    {
      type: "features",
      eyebrow: "Quality Layer",
      title: "Built with QA and delivery confidence",
      subtitle: "Every product connects back to trust, testing, maintainability, and long-term support.",
      columns: 4,
      items: [
        { title: "Functional", body: "Core flow testing." },
        { title: "Regression", body: "Release stability." },
        { title: "Admin", body: "Control validation." },
        { title: "Support", body: "Scale readiness." },
      ],
    },
    {
      type: "cta",
      eyebrow: "Let's Talk",
      title: "Ready to turn a product business into a digital commerce platform?",
      body: "Present the E-commerce Product clearly and move toward a demo or consultation.",
      cta: { label: "Let's Talk", to: "/contact" },
    },
  ],
};

export const ennoblerTourismProduct: PageContent = {
  title: "En'nobler — Tourism Product",
  sections: [
    {
      type: "hero",
      eyebrow: "Products / Tourism",
      title: "A tourism product that connects places and people.",
      subtitle:
        "Bookings, property visibility, experiences, and local business connection in one tourism-focused digital product.",
      primaryCta: { label: "Start a Project", to: "/contact" },
      secondaryCta: { label: "See all products", to: "/ennobler/products" },
      chips: ["Bookings", "Listings", "Experiences", "Local"],
      image: { src: "/showcase/tourism.webp", alt: "Tourism platform preview — destination listings, booking calendar, map, and itinerary" },
    },
    {
      type: "features",
      eyebrow: "What's inside",
      title: "Everything a destination platform needs",
      items: [
        { title: "Booking Engine", body: "Real-time availability, reservations, and confirmations." },
        { title: "Property Visibility", body: "Rich listings for stays, venues, and operators." },
        { title: "Experiences", body: "Tours, activities, and packages with flexible scheduling." },
        { title: "Local Connection", body: "Surface nearby businesses and partners to travelers." },
        { title: "Payments & Payouts", body: "Secure guest payments and operator settlements." },
        { title: "Built-in QA", body: "Validated flows so a booking never falls through." },
      ],
    },
    { type: "cta", eyebrow: "Let's build", title: "Bring your destination online.", cta: { label: "Start a Project", to: "/contact" } },
  ],
};



