import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This dictionary was coded by Lisa Valentina Riedel with SheCodes. It is
        open-sourced on{" "}
        <a
          href="https://github.com/lisa-valentina/dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{" "}
        and hosted on Netlify.
      </p>
    </div>
  );
}
