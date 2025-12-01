import React from "react";
import { FileText, Video, BookOpen, Download } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Mental Health Guides",
      description:
        "Comprehensive guides on various mental health conditions and treatments.",
      type: "PDF",
      size: "2.4 MB",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Wellness Webinars",
      description:
        "Recorded sessions on mindfulness, stress management, and self-care techniques.",
      type: "Video",
      duration: "45 min",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Self-Help Workbooks",
      description:
        "Interactive workbooks for CBT, DBT, and other therapeutic approaches.",
      type: "Workbook",
      pages: "32",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Crisis Resources",
      description: "Emergency contacts and crisis intervention information.",
      type: "Resource List",
      items: "15+",
    },
  ];

  const articles = [
    {
      title: "Understanding Anxiety Disorders",
      excerpt:
        "Learn about different types of anxiety disorders and effective treatment options.",
      readTime: "5 min read",
    },
    {
      title: "The Importance of Self-Care",
      excerpt:
        "Discover practical self-care strategies for maintaining mental wellness.",
      readTime: "4 min read",
    },
    {
      title: "Breaking Mental Health Stigma",
      excerpt:
        "How we can work together to reduce stigma around mental health conditions.",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Resources & Education
          </h2>
          <p className="text-gray-custom text-lg max-w-2xl mx-auto">
            Access helpful materials and educational content to support your
            mental health journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                {resource.icon}
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-custom text-sm mb-4">
                {resource.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-light text-gray-custom px-2 py-1 rounded">
                  {resource.type} •{" "}
                  {resource.size ||
                    resource.duration ||
                    resource.pages ||
                    resource.items}
                </span>
                <button className="text-primary hover:text-accent transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">
            Latest Articles
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="border border-light rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <h4 className="font-semibold text-secondary mb-3">
                  {article.title}
                </h4>
                <p className="text-gray-custom text-sm mb-4">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-custom">
                  <span>{article.readTime}</span>
                  <button className="text-primary hover:text-accent font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
