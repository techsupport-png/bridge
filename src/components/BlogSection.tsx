import React from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface BlogPost {
  id: number;
  image: string;
  title: string;
  date: string;
  users: string;
  views: string;
  description: string;
}

const BlogSection: React.FC = () => {
  useScrollReveal([
    {
      selector: ".blog-card",
      options: {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        interval: 150,
      },
    },
  ]);
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: "/img/blog-img-4.jpg",
      title: "How to Choose the Right University Abroad",
      date: "Aug 1, 2023",
      users: "1000+",
      views: "5000+",
      description:
        "A step-by-step guide to selecting the best-fit university and country for your study abroad journey, with expert tips from Bridge Bound consultants.",
    },
    {
      id: 2,
      image: "/img/blog-img-3.webp",
      title: "Top Scholarships for International Students in 2025",
      date: "Aug 1, 2023",
      users: "1000+",
      views: "5000+",
      description:
        "Discover the best scholarships available for students planning to study in the UK, USA, Canada, Australia, and more—plus how to apply and win!",
    },
    {
      id: 3,
      image: "/img/blog-img-1.webp",
      title:
        "Success Stories: Bridge Bound Students Share Their Journey",
      date: "Aug 1, 2023",
      users: "1000+",
      views: "5000+",
      description:
        "Read inspiring stories from students who achieved their dreams with Bridge Bound Academy’s support, from admission to arrival.",
    },
    {
      id: 4,
      image: "/img/blog-img-2.webp",
      title: "Your Complete Guide to Study Abroad Applications",
      date: "Aug 1, 2023",
      users: "1000+",
      views: "5000+",
      description:
        "Everything you need to know about preparing and submitting successful study abroad applications, including timelines, documents, and expert advice.",
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-white" id="blog">
      <h4 className="font-body text-orange text-sm font-semibold tracking-wider text-center mb-4">
        LATEST ARTICLES
      </h4>
      <h1 className="font-heading text-4xl lg:text-5xl font-bold text-center text-navy mb-16">
        Get News With Our Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <div 
            className="blog-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange"
            key={post.id}
          >
            <div className="h-64 relative">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-navy mb-4 line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-navy-light mb-4">
                <span className="flex items-center gap-1">
                  <i className="fa fa-calendar text-orange"></i>
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa fa-user text-orange"></i>
                  {post.users}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa fa-eye text-orange"></i>
                  {post.views}
                </span>
              </div>
              <p className="font-body text-navy-light leading-relaxed">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;