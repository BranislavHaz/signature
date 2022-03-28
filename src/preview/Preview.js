import React, { useContext } from "react";
import { InputContext } from "../App";

import Copy from "../copy/Copy";

import "./Preview.css";

const Preview = () => {
  const { input } = useContext(InputContext);

  const styles = {
    tableStyle: {
      color: `#${input.text}`,
      fontFamily: `${input.font}`,
      fontSize: "13px",
    },
    tableLinks: {
      textDecoration: "none",
      color: `#${input.link}`,
    },
    lineHeight: {
      lineHeight: "14px",
    },
    highlightName: {
      fontSize: "16px",
      fontWeight: "800",
    },
    profileImage: {
      paddingRight: "20px",
    },
    detailsIcons: {
      backgroundColor: `#${input.theme}`,
      margin: "0px 10px",
    },
    socialIcons: {
      backgroundColor: `#${input.theme}`,
      marginLeft: "4px",
    },
    horizontalLine: {
      paddingTop: "20px",
      borderBottom: `1px solid #${input.theme}`,
    },
    verticalLine: {
      borderRight: `1px solid #${input.theme}`,
      paddingRight: "20px",
    },
    footerSpace: {
      paddingTop: "20px",
    },
    footerSpaceIcons: {
      paddingTop: "20px",
      textAlign: "right",
    },
    facebookDisplay: {
      display: `${input.checkFacebook}`,
    },
    instagramDisplay: {
      display: `${input.checkInstagram}`,
    },
    linkedinDisplay: {
      display: `${input.checkLinkedin}`,
    },
    twitterDisplay: {
      display: `${input.checkTwitter}`,
    },
  };

  return (
    <div id="preview">
      <div id="preview-module">
        <div>
          <div className="main-title">Your Signature</div>
          <div id="preview-table">
            <table style={styles.tableStyle} className="signature-table">
              <tbody>
                <tr style={styles.lineHeight}>
                  <td rowSpan="3" style={styles.profileImage}>
                    <img
                      src={input.profile}
                      alt="Profile Avatar"
                      width="auto"
                      height="90px"
                    />
                  </td>
                  <td style={styles.highlightName}>{input.name}</td>
                  <td rowSpan="3" style={styles.verticalLine}></td>
                  <td>
                    <img
                      src="https://i.imgur.com/rqSjr3D.png"
                      alt="Phone Icon"
                      width="14px"
                      height="auto"
                      style={styles.detailsIcons}
                    />
                  </td>
                  <td>
                    <a href={`tel:${input.phone}`} style={styles.tableLinks}>
                      {input.phone}
                    </a>
                  </td>
                </tr>
                <tr style={styles.lineHeight}>
                  <td>{input.job}</td>
                  <td>
                    <img
                      src="https://i.imgur.com/juxpCkP.png"
                      alt="Web Icon"
                      width="14px"
                      height="auto"
                      style={styles.detailsIcons}
                    />
                  </td>
                  <td>
                    <a href={input.web} style={styles.tableLinks}>
                      {input.web}
                    </a>
                  </td>
                </tr>
                <tr style={styles.lineHeight}>
                  <td>{input.company}</td>
                  <td>
                    <img
                      src="https://i.imgur.com/7JG6SUz.png"
                      alt="Address Icon"
                      width="14px"
                      height="auto"
                      style={styles.detailsIcons}
                    />
                  </td>
                  <td>
                    {input.address1} {input.address2}
                  </td>
                </tr>
                <tr style={styles.lineHeight}>
                  <td colSpan="5" style={styles.horizontalLine}></td>
                </tr>
                <tr style={styles.lineHeight}>
                  <td colSpan="3" style={styles.footerSpace}>
                    <img
                      src={input.logo}
                      alt="Logo"
                      width="auto"
                      height="90px"
                    />
                  </td>
                  <td></td>
                  <td style={styles.footerSpaceIcons}>
                    <a href={input.facebook} style={styles.facebookDisplay}>
                      <img
                        src="https://i.imgur.com/BALfhfa.png"
                        alt="Facebook Icon"
                        width="24px"
                        height="auto"
                        style={styles.socialIcons}
                      />
                    </a>
                    <a href={input.instagram} style={styles.instagramDisplay}>
                      <img
                        src="https://i.imgur.com/A8e198R.png"
                        alt="Instagram Icon"
                        width="24px"
                        height="auto"
                        style={styles.socialIcons}
                      />
                    </a>
                    <a href={input.linkedin} style={styles.linkedinDisplay}>
                      <img
                        src="https://i.imgur.com/SySgckZ.png"
                        alt="LinkedIn Icon"
                        width="24px"
                        height="auto"
                        style={styles.socialIcons}
                      />
                    </a>
                    <a href={input.twitter} style={styles.twitterDisplay}>
                      <img
                        src="https://i.imgur.com/VMKhCsQ.png"
                        alt="Twitter Icon"
                        width="24px"
                        height="auto"
                        style={styles.socialIcons}
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Copy />
        </div>
      </div>
    </div>
  );
};

export default Preview;
