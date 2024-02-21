import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const LoginPageDesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-lexend sm:gap-10 md:gap-10 gap-[137px] items-center justify-end mx-auto pt-[50px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1596px] mx-auto md:px-5 w-full">
          <Header className="bg-gray-900_01 border border-gray-900_02 border-solid flex md:flex-col md:gap-10 items-center justify-between sm:px-5 px-[34px] py-5 rounded-[47px] w-full" />
          <div
            className="bg-cover bg-gray-900_01 bg-no-repeat border border-gray-900_02 border-solid h-[890px] mt-[53px] md:px-10 sm:px-5 px-[150px] py-[100px] relative rounded-[20px] w-[1326px] md:w-full"
            style={{ backgroundImage: "url('images/img_login.png')" }}
          >
            <div className="flex flex-col items-center justify-start m-auto w-[78%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-lime-500 w-full"
                    size="txtLexendMedium48"
                  >
                    Login
                  </Text>
                  <Text
                    className="text-center text-gray-400_01 text-lg w-full"
                    size="txtLexendLight18Gray40001"
                  >
                    Welcome back! Please log in to access your account.
                  </Text>
                </div>
                <div className="flex flex-col gap-10 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start w-full">
                    <Input
                      name="inputfield"
                      placeholder="Enter your Email"
                      className="font-light p-0 placeholder:text-gray-700 text-left text-lg w-full"
                      wrapClassName="border border-gray-900_02 border-solid flex-1 sm:flex-1 w-[49%] sm:w-full"
                      type="email"
                      color="gray_900"
                      size="md"
                      variant="fill"
                    ></Input>
                    <Input
                      name="inputfield_One"
                      placeholder="Enter your Password"
                      className="font-light p-0 placeholder:text-gray-700 text-left text-lg w-full"
                      wrapClassName="border border-gray-900_02 border-solid flex flex-1 w-full"
                      type="password"
                      suffix={
                        <Img
                          className="mt-auto mb-px h-6 ml-[35px]"
                          src="images/img_icon_gray_700.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                  <a
                    href="javascript:"
                    className="text-center text-lg text-white-A700 underline w-full"
                  >
                    <Text size="txtLexendRegular18">Forgot Password?</Text>
                  </a>
                  <div className="flex flex-col gap-6 items-start justify-start md:px-10 sm:px-5 px-[254px] w-full">
                    <Button
                      className="!text-gray-900_02 cursor-pointer text-center text-lg w-full"
                      shape="round"
                      color="lime_500"
                      size="lg"
                      variant="fill"
                    >
                      Login
                    </Button>
                    <Button
                      className="border border-blue_gray-900 border-solid cursor-pointer text-center text-lg w-full"
                      shape="round"
                      color="gray_900_02"
                      size="lg"
                      variant="fill"
                    >
                      Sign Up
                    </Button>
                    <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                        <Line className="bg-gray-400 h-px w-[32%]" />
                        <a
                          href="javascript:"
                          className="text-center text-gray-400 text-lg w-auto"
                        >
                          <Text size="txtLexendRegular18Gray400">
                            Or Continue with
                          </Text>
                        </a>
                        <Line className="bg-gray-400 h-px w-[32%]" />
                      </div>
                      <Img
                        className="h-[94px] md:h-auto object-cover w-full"
                        src="images/img_buttonscontainer_lime_500.png"
                        alt="buttonscontaine"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[342px] object-cover right-[17%] top-[11%] w-[325px] md:w-full"
              src="images/img_abstractdesign_1.png"
              alt="abstractdesign"
            />
          </div>
          <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1596px] mt-[150px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[300px] items-end justify-between w-full">
              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                  size="txtLexendMedium48WhiteA700"
                >
                  <span className="text-white-A700 font-lexend text-left font-medium">
                    Our
                  </span>
                  <span className="text-lime-500 font-lexend text-left font-medium">
                    {" "}
                    Testimonials
                  </span>
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[910px] md:max-w-full text-gray-400 text-lg"
                  size="txtLexendLight18Gray400"
                >
                  Discover how YourBank has transformed lives with innovative
                  digital solutions and personalized customer service. See why
                  our clients trust us for a secure and prosperous financial
                  journey
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex sm:flex-1 flex-row items-start justify-start p-3.5 rounded-[41px] w-auto sm:w-full">
                <Button
                  className="cursor-pointer min-w-[181px] rounded-[27px] text-center text-lg"
                  color="lime_500"
                  size="md"
                  variant="fill"
                >
                  For Individuals
                </Button>
                <div className="flex flex-col items-center justify-center sm:px-5 px-6 py-3.5 w-auto">
                  <Text
                    className="text-center text-lg text-white-A700 w-auto"
                    size="txtLexendRegular18"
                  >
                    For Businesses
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start w-full">
              <Button
                className="border border-gray-900_02 border-solid flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                shape="circle"
                color="gray_900_01"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-[34px]"
                  src="images/img_arrowleft_lime_500.svg"
                  alt="arrowleft"
                />
              </Button>
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
                <div className="relative w-[65%] md:w-full">
                  <div className="flex flex-col items-center justify-start m-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex flex-1 flex-col gap-[50px] items-center justify-start w-full">
                        <Img
                          className="h-[60px] sm:h-auto object-cover w-full"
                          src="images/img_container.png"
                          alt="container"
                        />
                        <Text
                          className="leading-[150.00%] max-w-[404px] md:max-w-full text-center text-lg text-white-A700"
                          size="txtLexendRegular18"
                        >
                          YourBank has been my trusted financial partner for
                          years. Their personalized service and innovative
                          digital banking solutions have made managing my
                          finances a breeze.
                        </Text>
                        <Text
                          className="text-center text-lg text-lime-500 w-full"
                          size="txtLexendMedium18"
                        >
                          Sara T
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[50px] items-center justify-start w-full">
                        <Img
                          className="h-[60px] sm:h-auto object-cover w-full"
                          src="images/img_container.png"
                          alt="container_One"
                        />
                        <Text
                          className="leading-[150.00%] max-w-[404px] md:max-w-full text-center text-lg text-white-A700"
                          size="txtLexendRegular18"
                        >
                          I recently started my own business, and YourBank has
                          been instrumental in helping me set up my business
                          accounts and secure the financing I needed. Their
                          expert guidance and tailored solutions have been
                          invaluable.
                        </Text>
                        <Text
                          className="text-center text-lg text-lime-500 w-full"
                          size="txtLexendMedium18"
                        >
                          John D
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gradient3  h-[349px] inset-y-[0] left-[0] my-auto w-[63%]"></div>
                </div>
                <div className="relative w-[36%] md:w-full">
                  <div className="flex flex-col gap-[50px] items-center justify-start ml-auto my-auto w-full">
                    <Img
                      className="h-[60px] sm:h-auto object-cover w-full"
                      src="images/img_container.png"
                      alt="container_Two"
                    />
                    <Text
                      className="leading-[150.00%] max-w-[404px] md:max-w-full text-center text-lg text-white-A700"
                      size="txtLexendRegular18"
                    >
                      <>
                        I love the convenience of YourBank&#39;s mobile banking
                        app. It allows me to stay on top of my finances and make
                        transactions on the go. The app is user-friendly and
                        secure, giving me peace of mind.
                      </>
                    </Text>
                    <Text
                      className="text-center text-lg text-lime-500 w-full"
                      size="txtLexendMedium18"
                    >
                      Emily G
                    </Text>
                  </div>
                  <div className="absolute bg-gradient4  h-[349px] inset-[0] justify-center m-auto w-full"></div>
                </div>
              </div>
              <Button
                className="border border-gray-900_02 border-solid flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                shape="circle"
                color="gray_900_01"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-[34px]"
                  src="images/img_icon_lime_500_62x62.svg"
                  alt="icon"
                />
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900_01 flex gap-[50px] items-center justify-center pb-[50px] pt-[100px] md:px-5 px-[162px] w-full" />
      </div>
    </>
  );
};

export default LoginPageDesktopPage;
