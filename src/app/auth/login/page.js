"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./login.module.css";
import FormGroup from "@/app/(ClientView)/components/CustomTextField/FormGroup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "@/store/slices/userSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuth } from "@/app/hooks/useAuth";
import { loginUser } from "@/services/user";
export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await loginUser(data.email, data.password);
      login({ token: user?.data?.token, type: user?.data?.userType });
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.back();
  };
  return (
    <div className={styles.authSection}>
      <div className={styles.authSectionLeft}>
        <div className={styles.leftInnerWrap}>
          <div className={styles.BackBtn} onClick={handleBack}>
            <Image
              src="/images/client/back-arrow.png"
              alt=""
              width={16}
              height={8}
              className={styles.backBtnIcon}
            />
            Back To Previous{" "}
          </div>

          <form className={styles.leftInnerBox} onSubmit={handleSubmit}>
            <Image
              src="/images/logos/logo.svg"
              alt=""
              width={268}
              height={40}
              className={styles.logo}
            />
            {/* <h3 className={styles.loginHeading}>Welcome to TRAINSKILLS</h3> */}
            <p className={styles.logindesc}>
              Please log in to access exclusive features and make the most of
              your stay.
            </p>
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
                onChange={(e) => handleChange("email", e.target.value)}
                required={true}
                label="Enter your email"
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.formGroupWrap}>
              <FormGroup
                type="password"
                icon={
                  <Image
                    src="/images/client/lock.png"
                    alt=""
                    width={24}
                    height={24}
                  />
                }
                onChange={(e) => handleChange("password", e.target.value)}
                required={true}
                label="Password"
                placeholder="Enter password"
              />
            </div>
            <button
              className={styles.loginBtn}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
      <div className={styles.authSectionRight}>
        <Image
          src="/images/client/login.png"
          alt=""
          width={736}
          height={1024}
          className={styles.loginSectionRightImg}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
