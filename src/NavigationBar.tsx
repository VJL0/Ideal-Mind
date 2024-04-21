import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Style = styled.div`
  position: absolute;
  width: 100%;

  .NavigationBar {
    position: sticky;
    z-index: 2000000000;
  }

  .nav-container {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 40px 0 40px;
    text-transform: uppercase;

    h1 {
      margin: 0;
    }
    .menu-button:hover {
      cursor: pointer;
    }
  }

  .expanded-nav-container {
    display: flex;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: black;
    color: beige;

    .close-button {
      align-self: flex-end;
      margin: 35px 40px 0 0;
      text-transform: uppercase;
    }

    ul {
      width: 100%;

      padding: 0%;
      list-style: none;
      margin-top: 40px;

      li {
        overflow: hidden;
        margin: 20px 0;
        overflow-y: hidden;
        user-select: none;

        a {
          text-decoration: none;
          color: inherit;
        }

        div {
          text-align: center;
          text-transform: capitalize;
          font-size: 60px; // Text size for menu options
        }
      }
      li:last-of-type {
        margin-top: 100px;
      }
    }
  }
`;

const navLinks = [
  { title: "Home", to: "/Ideal-Mind/" },
  { title: "About", to: "/Ideal-Mind/about" },
  { title: "Solution", to: "/Ideal-Mind/solution" },
  { title: "Chat", to: "/Ideal-Mind/chat" },
];

const NavigationBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Style>
      <div className="NavigationBar">
        <motion.nav
          initial="closed"
          animate={mobileNavOpen ? "opened" : "closed"}
        >
          <div className="nav-container">
            <motion.h1 variants={hideNavItemsVariant}>Ideal Mind</motion.h1>
            <motion.div
              variants={hideNavItemsVariant}
              className="menu-button"
              onClick={() => setMobileNavOpen(true)}
            >
              Menu
            </motion.div>
          </div>
          <motion.div
            variants={mobileMenuVariant}
            className="expanded-nav-container"
          >
            <motion.div
              className="close-button"
              variants={fadeInVariant}
              whileHover={{ cursor: "pointer" }}
              onClick={() => setMobileNavOpen(false)}
            >
              Close
            </motion.div>
            <motion.ul variants={ulVariant}>
              {navLinks.map((navItem) => (
                <motion.li whileTap={{ scale: 0.95 }} key={navItem.title}>
                  <Link to={navItem.to}>
                    <motion.div
                      variants={liVariant}
                      whileHover={{
                        scale: 1.2,
                        //fontStyle: "italic",
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                        cursor: "pointer",
                      }}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      {navItem.title}
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.nav>
      </div>
    </Style>
  );
};

export default NavigationBar;
