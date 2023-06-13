import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span>
          Copyright:{" "}
          <a href="https://www.linkedin.com/in/bejdi7-undefined-a6393b273/">
            Bejdi
          </a>
        </span>
      </p>
    </div>
  );
};
