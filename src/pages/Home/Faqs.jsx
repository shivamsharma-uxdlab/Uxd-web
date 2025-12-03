import React, { useState, useMemo } from "react";
import {
  Plus,
  Minus,
  MessageCircle,
  ArrowRight,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  Clock,
  Zap,
} from "lucide-react";

// Categorized FAQ Data
const FAQData = [
  {
    id: 1,
    category: "Services & Product",
    question: "What services does Uxdlab offer?",
    answer:
      "Uxdlab provides a wide range of services, including UX/UI design, web development, mobile app development, custom software solutions, and digital transformation consulting. We help businesses enhance user experiences and achieve their digital goals.",
  },
  {
    id: 9,
    category: "Services & Product",
    question: "What technologies do you use?",
    answer:
      "We use modern stacks including React, Next.js, Node.js, and Python for development. For design, we primarily use Figma and Adobe Creative Cloud to ensure top-tier visuals and prototyping.",
  },
  {
    id: 8,
    category: "Services & Product",
    question: "Can you redesign my existing website or app?",
    answer:
      "Yes, redesigns are one of our specialties. We conduct a thorough UX audit of your current product to identify pain points and opportunities for improvement before creating a fresh, modern interface.",
  },
  {
    id: 3,
    category: "Services & Product",
    question: "Who can benefit from your services?",
    answer:
      "Startups, SMEs, and large enterprises looking to modernize their digital presence can all benefit. Whether you need a brand new product or a revamp of legacy software, our solutions scale to fit your specific business needs.",
  },
  {
    id: 5,
    category: "Process & Timing",
    question: "How do I get started with Uxdlab?",
    answer:
      "Simply reach out via our contact page to schedule a discovery call. We'll discuss your project requirements, timeline, and goals to propose a tailored strategy for your success.",
  },
  {
    id: 7,
    category: "Process & Timing",
    question: "How long does it take to complete a project?",
    answer:
      "Timelines vary depending on project scope. A simple landing page might take 2-3 weeks, while a comprehensive web application could take 3-6 months. We provide a detailed timeline after our initial assessment.",
  },
  {
    id: 10,
    category: "Process & Timing",
    question: "Do you provide ongoing support after the project is complete?",
    answer:
      "Yes, we offer various maintenance and support packages. From bug fixes and security updates to feature enhancements, we ensure your product remains robust and up-to-date long after launch.",
  },
  {
    id: 2,
    category: "Company & Location",
    question: "How can I contact Uxdlab?",
    answer:
      "You can reach us via the contact form on our website or email us directly at hello@uxdlab.com. Our team will get back to you promptly.",
  },
  {
    id: 4,
    category: "Company & Location",
    question: "Where is Uxdlab located?",
    answer:
      "We are a digital-first agency with a distributed team, allowing us to serve clients globally. Our headquarters are based in the tech hub of San Francisco, with satellite offices in London and Singapore.",
  },
  {
    id: 6,
    category: "Company & Location",
    question: "Do you work with international clients?",
    answer:
      "Absolutely! We work with clients worldwide. We use asynchronous communication tools and schedule meetings that respect your time zone to ensure smooth collaboration regardless of location.",
  },
];

// Define the tabs and associated data/icons
const tabs = [
  { name: "Services & Product", icon: Briefcase },
  { name: "Process & Timing", icon: Clock },
  { name: "Company & Location", icon: Globe },
];

const FAQCard = ({ item, isOpen, toggle }) => {
  return (
    <div
      onClick={() => toggle(item.id)}
      className={`
        relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer group
        ${
          isOpen
            ? "bg-primary border-primary shadow-xl"
            : "bg-card border-border hover:border-primary hover:shadow-lg hover:-translate-y-1"
        }
      `}
    >
      <div className="p-6">
        <div className="flex justify-between items-start gap-4">
          <h3
            className={`text-lg font-bold leading-tight transition-colors duration-300 ${
              isOpen ? "text-primary-foreground" : "text-card-foreground"
            }`}
          >
            {item.question}
          </h3>
          <span
            className={`
            flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300
            ${
              isOpen
                ? "bg-primary-foreground/20 text-primary-foreground rotate-180"
                : "bg-muted text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground"
            }
          `}
          >
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        </div>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-4"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p
              className={`text-sm leading-relaxed ${
                isOpen ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}
            >
              {item.answer}
            </p>
            {isOpen && (
              <button className="mt-4 flex items-center text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                Read more <ArrowRight size={12} className="ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Decorative background element for active card */}
      {isOpen && (
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary rounded-full blur-2xl opacity-50 pointer-events-none" />
      )}
    </div>
  );
};

export default function Faqs() {
  // State for active tab, defaulting to the first category name
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Filter FAQ data based on the active tab
  const filteredFAQ = useMemo(() => {
    return FAQData.filter((item) => item.category === activeTab);
  }, [activeTab]);

  // Effect to reset openId when switching tabs to ensure a relevant card is open
  React.useEffect(() => {
    if (
      filteredFAQ.length > 0 &&
      !filteredFAQ.some((item) => item.id === openId)
    ) {
      setOpenId(filteredFAQ[0].id); // Open the first question of the new tab
    } else if (filteredFAQ.length > 0 && openId === null) {
      setOpenId(filteredFAQ[0].id);
    }
  }, [filteredFAQ]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground pb-20 dark">
      {/* Header Section */}
      <header className="bg-card border-b border-border pt-16 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-primary text-xs font-bold uppercase tracking-wide mb-6">
            {/* <MessageCircle size={14} /> */}
            <span>Common Questions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-card-foreground mb-6 tracking-tight">
            We’ve got{" "}
            <span className="text-primary underline decoration-4 decoration-primary/20 underline-offset-4">
              answers
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our services, process, and how we
            can help transform your business.
          </p>
        </div>

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        {/* Contact Strip */}
        <div className="bg-card rounded-xl p-6 md:p-8 text-card-foreground shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Still have questions?</h3>
              <p className="text-muted-foreground text-sm">
                Can't find the answer you're looking for?
              </p>
            </div>
          </div>
          <button className="px-6 py-3 bg-background text-gray-900 rounded-lg font-bold hover:bg-accent transition-colors w-full md:w-auto">
            Get in touch
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="mb-10 bg-card p-2 rounded-xl shadow-lg flex flex-wrap justify-center gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                ${
                  activeTab === tab.name
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-accent hover:text-gray-900"
                }
              `}
            >
              {/* The icon component is dynamically rendered here */}
              <tab.icon size={18} />
              <span className="hidden sm:inline">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Responsive Grid with filtered data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFAQ.map((item) => (
            <FAQCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggle={toggle}
            />
          ))}
        </div>

        {/* Empty State message */}
        {filteredFAQ.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Zap size={48} className="mx-auto mb-4 text-muted-foreground/50" />
            <p className="text-xl font-semibold">
              No questions in this category yet.
            </p>
            <p className="text-sm">
              We are working on adding more information soon!
            </p>
          </div>
        )}

        
      </main>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
