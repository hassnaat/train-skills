"use client";
import Image from "next/image";
import styles from "./contact.module.css";
import FormGroup from "../components/CustomTextField/FormGroup";
import { useState } from "react";

export default function Contact() {
  const [charsLeft, setCharsLeft] = useState(3000);
  return (
    <main className={styles.contactSection}>
      <div className={styles.contactSectionLeft}>
        <Image
          src="/images/client/contact.png"
          alt=""
          width={568}
          height={340}
          className={styles.homeSectionLeftImg}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "568px",
            objectFit: "contain",
          }}
        />
        <div className={styles.needHelp}> Need Help? Contact Us!</div>
        <div className={styles.leftDescription}>
          {` We're here to help! If you're experiencing any technical issues or
          have a question about our product, please reach out to our support
          team using the email below. We'll get back to you as soon as possible.`}
        </div>
        <div className={styles.emailWrap}>
          {" "}
          <Image
            src="/images/client/email-icon.png"
            alt=""
            width={44}
            height={44}
            className={styles.emailIcon}
          />
          <div className={styles.emailAddress}>help@athletefocus.com</div>
        </div>
      </div>
      <div className={styles.contactSectionRight}>
        <div className={styles.RightSecHeading}>Get In Touch</div>
        <div className={styles.RightSecDesc}>
          You can also get in touch with using the form below. Just write your
          issue and we’ll try to contact you back as soon as possible.
        </div>
        <div className={styles.formGroupWrap}>
          <FormGroup
            icon={
              <Image
                src="/images/client/envelop.png"
                alt=""
                width={24}
                height={24}
              />
            }
            required={true}
            label="Your Email"
            placeholder="contact@mountbanyak.com"
          />
        </div>
        <div className={styles.formGroupWrap}>
          <FormGroup
            textarea={true}
            required={true}
            label="Message"
            placeholder="State your problem here!"
            infoText={`${charsLeft} character left`}
            onChange={(e) => {
              setCharsLeft(3000 - e.target.value.length);
            }}
          />
        </div>
        <button className={styles.submitBtn}>Submit Message</button>
      </div>
    </main>
  );
}
