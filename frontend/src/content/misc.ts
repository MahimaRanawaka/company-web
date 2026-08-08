import type { PageContent } from "./types";

export const ennoblerProducts: PageContent = {
  title: "En'nobler — Products",
  description:
    "Ready-built, QA-tested digital products from En'nobler — an e-commerce platform and a tourism platform, customizable and ready to launch.",
  sections: [
    {
      type: "hero",
      eyebrow: "Products",
      title: "Ready-built products for businesses that need to move now.",
      subtitle:
        "Two production-ready platforms — for online selling and for tourism businesses — built, tested, and ready to customize for your brand. No blank-page development, no guesswork.",
      primaryCta: { label: "View E-commerce Product", to: "/ennobler/products/ecommerce-product" },
      secondaryCta: { label: "View Tourism Product", to: "/ennobler/products/tourism-product" },
      heroArt: "products-overview-diagram",
    },
    {
      type: "productPreview",
      eyebrow: "Our Products",
      title: "Two ready-built platforms, built for real businesses",
      subtitle: "Pick the platform that matches your business, then see exactly what's inside.",
      items: [
        {
          title: "E-commerce Product",
          body: "A ready-built commerce platform for businesses that need catalogue management, product discovery, checkout flow, order handling, stock visibility, and admin-side control. Catalogue · Checkout · Orders · Admin Panel. Best for retail brands, local sellers, product teams, and marketplace businesses.",
          cta: { label: "Open Detail Page", to: "/ennobler/products/ecommerce-product" },
        },
        {
          title: "Tourism Product",
          body: "A ready-built tourism platform for accommodation booking, experience promotion, destination visibility, and local business participation. Bookings · Promotions · Experiences · Tourism Growth. Best for tourism brands, villa owners, experience providers, and local partners.",
          cta: { label: "Open Detail Page", to: "/ennobler/products/tourism-product" },
        },
      ],
    },
    {
      type: "stats",
      items: [
        { value: "2", label: "Ready-Built Products" },
        { value: "100%", label: "QA Tested" },
        { value: "Live", label: "Ready to Deploy" },
        { value: "Custom", label: "Branded to You" },
      ],
    },
    {
      type: "features",
      eyebrow: "Why Start Here",
      title: "Skip the blank page. Start from something proven.",
      subtitle: "Both products are already built, tested, and ready to adapt — not a from-scratch engineering project.",
      columns: 4,
      numbered: true,
      items: [
        { title: "See It Running", body: "Explore a live product walkthrough before you commit to anything — not a mockup, the real platform." },
        { title: "Customized to Your Brand", body: "Your branding, your catalogue or listings, your business rules — built on a proven foundation instead of a blank page." },
        { title: "QA-Tested at Every Release", body: "Every core flow — checkout, booking, admin controls — is tested before it reaches your customers." },
        { title: "Launch Support Included", body: "We help you go live: data setup, configuration, and a working handover, not just a codebase." },
      ],
    },
    {
      type: "features",
      eyebrow: "What You Get",
      title: "Everything you need to launch, not just the code.",
      subtitle: "Each product includes the platform, the setup support, and the ongoing quality layer — packaged as one engagement.",
      columns: 4,
      items: [
        { title: "The Platform", body: "A fully built, production-ready application — not a template or a starting point." },
        { title: "Setup & Configuration", body: "We configure it around your business — branding, catalogue or listings, and business rules." },
        { title: "QA & Reliability", body: "Every release is tested against real user flows before it reaches your customers." },
        { title: "Ongoing Support", body: "Updates, fixes, and improvements after launch — not a one-time handover." },
      ],
    },
    {
      type: "cta",
      eyebrow: "Get Started",
      title: "Want one of these products built around your business?",
      body: "Talk to us about branding, customization, and what it takes to get either product live for you.",
      cta: { label: "Start a Project", to: "/contact" },
    },
  ],
};

export const ennoblerEcommerceProduct: PageContent = {
  title: "En'nobler — E-commerce Product",
  description:
    "A ready-built commerce platform for structured online selling — catalogue, checkout, order handling, and admin control, live and ready to customize.",
  sections: [
    {
      type: "hero",
      eyebrow: "Product Detail Page",
      title: "E-commerce Product for structured online selling.",
      subtitle:
        "A ready-built commerce platform for structured online selling — catalogue browsing, checkout, order handling, admin control, and full business visibility, live and ready to customize for your brand.",
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
        { title: "Built for selling products online", body: "Move from manual selling into a structured digital commerce experience with clear customer journeys and full admin-side control — business-ready, scalable, QA-tested, and built for real order volume." },
        { title: "Designed for business operations", body: "Product management, stock visibility, customer order tracking, and reporting — with room to add integrations as your business grows." },
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
  description:
    "A ready-built tourism platform for bookings, property visibility, experiences, and local business connection — live and ready to customize.",
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



