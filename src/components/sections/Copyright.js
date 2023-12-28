const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Rajesh Verma</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="#"
          >
            Rajesh Verma
          </a>
        </span>
        <ul>
        <li>
                <a href="https://github.com/raj262">
                  <i className="fa-brands fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rajesh-v-b42615118/">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Raj262Kumar">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100005563082406">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
