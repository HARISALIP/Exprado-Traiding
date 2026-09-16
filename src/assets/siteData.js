/**
 * EXPRADO TRADING & CONTRACTING CO.
 * Site Data — sourced exclusively from official Exprado company PDF
 *
 * CONTENT RULES:
 * - Only use facts explicitly stated in the PDF
 * - Use [placeholder] notation for missing information
 * - Do NOT invent statistics, certifications, clients, or projects
 */

import {
  HardHat,
  Zap,
  Wrench,
  Layers,
  Droplets,
  Truck,
  Users,
  CheckCircle,
  ShieldCheck,
  Building2,
  Globe,
  Target,
  Award,
  Cpu,
  BarChart3,
} from "lucide-react";

// ── Navigation ──────────────────────────────────────────────
export const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

// ── Service Divisions (8 divisions from PDF) ────────────────
export const serviceItems = [
  {
    division: "01",
    title: "Civil Construction & Infrastructure",
    description: "Delivering robust civil works from residential and commercial buildings to industrial foundations across KSA.",
    icon: Building2,
    subItems: [
      "Residential & Commercial Construction",
      "Industrial Foundations & Earthworks",
      "Structural Concrete Work",
    ],
  },
  {
    division: "02",
    title: "Electrical & Instrumentation (E&I)",
    description: "Comprehensive electrical and instrumentation solutions for industrial and commercial facilities.",
    icon: Zap,
    subItems: [
      "Power Distribution Systems",
      "Process Instrumentation",
      "Facility Lighting & Earthing",
    ],
  },
  {
    division: "03",
    title: "Mechanical & Steel Fabrication",
    description: "Structural steel erection, industrial piping, HVAC, and mechanical plant support services.",
    icon: Wrench,
    subItems: [
      "Structural Steel Erection",
      "Industrial Piping & HVAC",
      "Custom Equipment Installation",
    ],
  },
  {
    division: "04",
    title: "Asphalt & Paving Contracting",
    description: "Highway paving, industrial yard surfacing, and surface maintenance across the Kingdom.",
    icon: Layers,
    subItems: [
      "Highway & Main Road Paving",
      "Industrial Parking & Yard Surfacing",
      "Surface Maintenance & Resurfacing",
    ],
  },
  {
    division: "05",
    title: "Scaffolding & Structural Support",
    description: "Safe, certified scaffolding systems for high-rise and industrial sites, built around strict site safety standards.",
    icon: HardHat,
    subItems: [
      "System Scaffolding Supply & Assembly",
      "High-Rise & Industrial Support",
      "Certified Scaffold Inspection",
    ],
  },
  {
    division: "06",
    title: "Waterproofing",
    description: "Complete waterproofing solutions from wet areas and basements to foundations and crack repairs.",
    icon: Droplets,
    subItems: [
      "Toilet & Wet Area Waterproofing",
      "Basement & Foundation Waterproofing",
      "Expansion Joint Treatment",
      "Crack Repair & Sealing",
      "Water Leakage Treatment",
    ],
  },
  {
    division: "07",
    title: "Equipment & Logistics Support",
    description: "Heavy machinery fleet and flexible project logistics supporting complex construction operations.",
    icon: Truck,
    subItems: [
      "Excavators, Wheel Loaders & Dozers",
      "Rollers, Mobile Cranes & Trailers",
      "Site Haulage & Flexible Logistics",
    ],
  },
  {
    division: "08",
    title: "Technical Manpower & Trading",
    description: "Certified technical personnel across all disciplines, plus industrial material sourcing and trading.",
    icon: Users,
    subItems: [
      "Civil, Electrical & Mechanical Engineers",
      "Safety Officers & Skilled Labor",
      "Construction Materials & Hardware Trading",
    ],
  },
];

// ── Company Stats (from PDF) ─────────────────────────────────
// NOTE: Only "100% Saudi Owned" and "10+ Years Engineering Expertise" are explicitly stated in PDF
export const stats = [
  { value: "100%", label: "Saudi Owned" },
  { value: "10+", label: "Years Engineering Expertise" },
  { value: "8", label: "Service Divisions" },
  { value: "KSA", label: "Kingdom-Wide Operations" },
];

// ── Why Choose Exprado ──────────────────────────────────────
export const whyChooseItems = [
  {
    icon: CheckCircle,
    title: "100% Local Value & Quality",
    description: "A fully Saudi-owned enterprise delivering engineering excellence aligned with Vision 2030.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-First Approach",
    description: "Strict site safety standards across all divisions, including certified scaffold inspection and compliance.",
  },
  {
    icon: Cpu,
    title: "Multidisciplinary Capability",
    description: "Eight integrated service divisions covering civil, electrical, mechanical, and trading under one contractor.",
  },
  {
    icon: Globe,
    title: "Kingdom-Wide Operations",
    description: "Executing infrastructure, industrial, and commercial projects across the Kingdom of Saudi Arabia.",
  },
];

// ── Contact Information (from PDF) ──────────────────────────
export const contactInfo = {
  representative: "Sarath Damodar",
  title: "Civil Engineer",
  phone: "+966 563189556",
  whatsapp: "+966563189556",
  website: "www.exprado.com",
  email: "[Company Email]",       // Not in PDF — placeholder
  address: "[Office Address]",    // Not in PDF — placeholder
};
