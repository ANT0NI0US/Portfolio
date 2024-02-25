import { Fragment, useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const [t, i18n] = useTranslation();
  const form = useRef();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    trigger,
    setValue,
    reset,
  } = useForm();
  const [buttonText, setButtonText] = useState(t("contact_us.send"));

  useEffect(() => {
    setButtonText(t("contact_us.send"));
    // trigger();
    reset();
  }, [i18n.language, t, reset]);

  const sendEmail = () => {
    setButtonText(t("contact_us.sending"));
    emailjs
      .sendForm("service_yijk9v8", "template_dolvl3a", form.current, {
        publicKey: "6QvN4Nf3y_u1VDO44",
      })
      .then(
        () => {
          setButtonText(t("contact_us.send"));
          toast.success("Form submitted successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const isOnlySpaces = (value) => {
    // Check if the value contains only spaces
    return !value.trim();
  };

  const handleInputChange = async (e, type) => {
    setValue(type, e.target.value);
    await trigger(type);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>{t("contact_us.get_in_touch")}</h2>
                  <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <Controller
                          name="user_name"
                          defaultValue=""
                          control={control}
                          rules={{
                            required: t("validation.this_field_is_required"),
                            validate: {
                              noOnlySpaces: (value) =>
                                !isOnlySpaces(value) ||
                                t("validation.it_must_not_contain_only_spaces"),
                            },
                          }}
                          render={({ field }) => (
                            <Fragment>
                              <input
                                type="text"
                                placeholder={t("contact_us.first_name")}
                                {...register("user_name")}
                                {...field}
                                onChange={(e) => {
                                  handleInputChange(e, "user_name");
                                }}
                              />
                              {errors.user_name && (
                                <p className="error">
                                  {errors.user_name.message}
                                </p>
                              )}
                            </Fragment>
                          )}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <Controller
                          name="user_last_name"
                          defaultValue=""
                          control={control}
                          render={({ field }) => (
                            <Fragment>
                              <input
                                type="text"
                                placeholder={t("contact_us.last_name")}
                                {...register("user_last_name")}
                                {...field}
                                onChange={(e) => {
                                  handleInputChange(e, "user_last_name");
                                }}
                              />
                              {errors.user_last_name && (
                                <p className="error">
                                  {errors.user_last_name.message}
                                </p>
                              )}
                            </Fragment>
                          )}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <Controller
                          name="user_email"
                          defaultValue=""
                          control={control}
                          rules={{
                            required: t("validation.this_field_is_required"),
                            pattern: {
                              value:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: t("validation.invalid_email"),
                            },
                            validate: {
                              noOnlySpaces: (value) =>
                                !isOnlySpaces(value) ||
                                t("validation.it_must_not_contain_only_spaces"),
                            },
                          }}
                          render={({ field }) => (
                            <Fragment>
                              <input
                                type="email"
                                placeholder={t("contact_us.email")}
                                {...register("user_email")}
                                {...field}
                                onChange={(e) => {
                                  handleInputChange(e, "user_email");
                                }}
                              />
                              {errors.user_email && (
                                <p className="error">
                                  {errors.user_email.message}
                                </p>
                              )}
                            </Fragment>
                          )}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <Controller
                          name="user_phone"
                          control={control}
                          render={({ field }) => (
                            <Fragment>
                              <input
                                placeholder={t("contact_us.phone")}
                                {...register("user_phone")}
                                {...field}
                                onChange={(e) => {
                                  handleInputChange(e, "user_phone");
                                }}
                              />
                              {errors.user_phone && (
                                <p className="error">
                                  {errors.user_phone.message}
                                </p>
                              )}
                            </Fragment>
                          )}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <Controller
                          name="message"
                          defaultValue=""
                          control={control}
                          rules={{
                            required: t("validation.this_field_is_required"),
                            validate: {
                              noOnlySpaces: (value) =>
                                !isOnlySpaces(value) ||
                                t("validation.it_must_not_contain_only_spaces"),
                            },
                          }}
                          render={({ field }) => (
                            <Fragment>
                              <textarea
                                rows="6"
                                placeholder={t("contact_us.message")}
                                {...register("message")}
                                {...field}
                                onChange={(e) => {
                                  handleInputChange(e, "message");
                                }}
                              ></textarea>
                              {errors.message && (
                                <p className="error">
                                  {errors.message.message}
                                </p>
                              )}
                            </Fragment>
                          )}
                        />
                        <button type="submit" aria-label="Submit Form">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};
