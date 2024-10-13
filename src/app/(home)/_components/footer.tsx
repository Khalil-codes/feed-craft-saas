import React from "react";

const Footer = () => {
  return (
    <footer className="my-16 flex flex-col items-center justify-center gap-3 border-t border-muted-foreground/40 pt-8">
      <p className="text-lg text-muted-foreground">
        FeedCraft &copy; {new Date().getFullYear()}
      </p>
      <p>
        <a
          className="text-sm text-muted-foreground hover:underline"
          href="https://github.com/vercel/next.js"
          target="_blank"
          rel="noopener noreferrer">
          Built with Next JS
        </a>
      </p>
    </footer>
  );
};

export default Footer;
