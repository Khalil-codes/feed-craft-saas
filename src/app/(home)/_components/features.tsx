import React from "react";

const featues = [
  {
    title: "Seamless Integration",
    description: "Easily intergrate with your existing tools and services",
  },
  {
    title: "Scalable",
    description: "Scale your team and projects with ease",
  },
  {
    title: "Powerful",
    description: "Get the most out of FeedCraft",
  },
  {
    title: "Customizable",
    description: "Customize Feedcraft to fit your needs and style",
  },
  {
    title: "Powerfull Analytics",
    description: "Get insights into your feedback and performance",
  },
];

const Features = () => {
  return (
    <section
      className="mx-auto my-24 flex max-w-screen-xl scroll-mt-28 flex-col items-center"
      id="features">
      <h2 className="mb-6 text-3xl font-bold">Features</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {featues.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;

type FeatureProps = {
  title: string;
  description: string;
};

const Feature = ({ title, description }: FeatureProps) => {
  return (
    <div className="rounded-lg border p-5 shadow-md">
      <h5 className="mb-2 font-semibold">{title}</h5>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
