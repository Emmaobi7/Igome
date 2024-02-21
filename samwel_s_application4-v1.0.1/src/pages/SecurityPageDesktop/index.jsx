import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const SecurityPageDesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-lexend sm:gap-10 md:gap-10 gap-[150px] items-center justify-end mx-auto pt-[50px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1606px] mx-auto md:px-5 w-full">
          <header className="bg-gray-900_01 border border-gray-900_02 border-solid flex md:flex-col md:gap-10 items-center justify-between sm:px-5 px-[34px] py-5 rounded-[47px] w-full">
            <Img
              className="h-10 w-[155px]"
              src="images/img_logo.svg"
              alt="logo"
            />
            <ul className="flex flex-row gap-[26px] sm:hidden items-center justify-start w-auto common-row-list">
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtLexendRegular18">Home</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtLexendRegular18">Careers</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtLexendRegular18">About</Text>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <Button
                    className="cursor-pointer rounded-[25px] text-center text-lg"
                    color="gray_900_02"
                    size="sm"
                    variant="fill"
                  >
                    Security
                  </Button>
                </a>
              </li>
            </ul>
            <div className="flex flex-row gap-[30px] items-center justify-start w-auto">
              <a href="javascript:" className="text-lg text-white-A700 w-auto">
                <Text size="txtLexendRegular18">Sign Up</Text>
              </a>
              <Button
                className="cursor-pointer min-w-[109px] rounded-[27px] text-center text-lg"
                color="lime_500"
                size="md"
                variant="fill"
              >
                Login
              </Button>
            </div>
          </header>
          <div className="bg-gray-900_01 mt-[53px] p-[50px] md:px-10 sm:px-5 relative rounded-[20px] w-[1599px] md:w-full">
            <div className="h-[716px] m-auto w-[94%] md:w-full">
              <div className="absolute bg-gray-900 flex flex-col gap-[23px] items-center justify-start left-[0] max-w-[791px] p-20 md:px-10 sm:px-5 rounded-bl-[20px] rounded-br-[80px] rounded-tl-[20px] top-[0] w-full">
                <Text
                  className="leading-[130.00%] max-w-[631px] md:max-w-full sm:text-[44px] md:text-[50px] text-[58px] text-white-A700"
                  size="txtLexendMedium58WhiteA700"
                >
                  <span className="text-white-A700 font-lexend text-left font-medium">
                    Your Security is Our{" "}
                  </span>
                  <span className="text-lime-500 font-lexend text-left font-medium">
                    Top Priority
                  </span>
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[631px] md:max-w-full text-gray-400 text-lg"
                  size="txtLexendLight18Gray400"
                >
                  At YourBank, we understand the importance of keeping your
                  financial information secure. We employ robust security
                  measures and advanced technologies to protect your personal
                  and financial data. Rest assured that when you bank with us,
                  your security is our utmost priority.
                </Text>
              </div>
              <Img
                className="absolute h-[716px] inset-y-[0] my-auto object-cover right-[0] rounded-[16px] w-full"
                src="images/img_image_6.png"
                alt="image"
              />
            </div>
            <Img
              className="absolute h-[505px] object-cover right-[6%] top-[6%] w-[480px]"
              src="images/img_abstractdesign_1.png"
              alt="abstractdesign"
            />
          </div>
          <div className="flex flex-col md:gap-10 gap-[200px] items-center justify-start max-w-[1606px] mt-[150px] w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtLexendMedium48WhiteA700"
              >
                <span className="text-white-A700 font-lexend text-left font-medium">
                  How We{" "}
                </span>
                <span className="text-lime-500 font-lexend text-left font-medium">
                  Protect You
                </span>
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1306px] md:max-w-full text-gray-400 text-lg"
                size="txtLexendLight18Gray400"
              >
                At YourBank, we prioritize the security and confidentiality of
                your financial information. Our state-of-the-art encryption
                technology and stringent data protection measures ensure your
                assets and transactions are safeguarded at all times
              </Text>
            </div>
            <div className="sm:h-[631px] h-[772px] md:px-10 sm:px-5 px-[100px] relative w-full">
              <div className="absolute inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="absolute h-[631px] inset-[0] justify-center m-auto object-cover rounded-bl-[20px] rounded-br-[20px] rounded-tl-[50px] rounded-tr-[50px] w-[1593px]"
                  src="images/img_backgroundimage.png"
                  alt="backgroundimage"
                />
                <List
                  className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-start max-w-[1406px] mt-[82px] mx-auto relative w-full"
                  orientation="horizontal"
                >
                  <div
                    className="bg-cover bg-gradient6  bg-no-repeat border border-gray-900_02 border-solid flex flex-1 flex-col gap-6 h-[330px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[20px] w-full"
                    style={{
                      backgroundImage: "url('images/img_ctasection.png')",
                    }}
                  >
                    <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                      <div className="bg-gradient1  flex flex-col items-start justify-start p-3 rounded-[50%] w-[98px]">
                        <div className="bg-gradient  border border-solid flex flex-col items-start justify-start lime_500_33_lime_500_33_border9 p-5 rounded-[50%] w-[74px]">
                          <Img
                            className="h-[34px] w-[34px]"
                            src="images/img_icon_5.svg"
                            alt="icon"
                          />
                        </div>
                      </div>
                      <Text
                        className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                        size="txtLexendRegular24"
                      >
                        Secure Online Banking Platform
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[588px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      Our online banking platform is built with multiple layers
                      of security to safeguard your information. We utilize
                      industry-standard encryption protocols to ensure that your
                      data remains confidential and protected during
                      transmission.
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-gradient6  bg-no-repeat border border-gray-900_02 border-solid flex flex-1 flex-col gap-6 h-[330px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[20px] w-full"
                    style={{
                      backgroundImage: "url('images/img_ctasection.png')",
                    }}
                  >
                    <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                      <div className="bg-gradient1  flex flex-col items-start justify-start p-3 rounded-[50%] w-[98px]">
                        <div className="bg-gradient  border border-solid flex flex-col items-start justify-start lime_500_33_lime_500_33_border10 p-5 rounded-[50%] w-[74px]">
                          <Img
                            className="h-[34px] w-[34px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <Text
                        className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                        size="txtLexendRegular24"
                      >
                        Multi-Factor Authentication
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[588px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      To enhance the security of your online banking experience,
                      we employ multi-factor authentication. This additional
                      layer of security requires you to provide multiple pieces
                      of identification, such as a password and a one-time
                      verification code, to access your account.
                    </Text>
                  </div>
                </List>
              </div>
              <List
                className="absolute bottom-[0] flex-1 sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 inset-x-[0] justify-start mx-auto w-full"
                orientation="horizontal"
              >
                <div
                  className="bg-cover bg-gradient6  bg-no-repeat border border-gray-900_02 border-solid flex flex-1 flex-col gap-6 h-[330px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[20px] w-full"
                  style={{
                    backgroundImage: "url('images/img_ctasection.png')",
                  }}
                >
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="bg-gradient1  flex flex-col items-start justify-start p-3 rounded-[50%] w-[98px]">
                      <div className="bg-gradient  border border-solid flex flex-col items-start justify-start lime_500_33_lime_500_33_border11 p-5 rounded-[50%] w-[74px]">
                        <Img
                          className="h-[34px] w-[34px]"
                          src="images/img_icon_6.svg"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <Text
                      className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtLexendRegular24"
                    >
                      Fraud Monitoring
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[588px] md:max-w-full text-gray-400 text-lg"
                    size="txtLexendLight18Gray400"
                  >
                    We have sophisticated fraud detection systems in place to
                    monitor your accounts for any suspicious activities. Our
                    dedicated team works around the clock to detect and prevent
                    unauthorized transactions, providing you with peace of mind.
                  </Text>
                </div>
                <div
                  className="bg-cover bg-gradient6  bg-no-repeat border border-gray-900_02 border-solid flex flex-1 flex-col gap-6 h-[330px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[20px] w-full"
                  style={{
                    backgroundImage: "url('images/img_ctasection.png')",
                  }}
                >
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                    <div className="bg-gradient1  flex flex-col items-start justify-start p-3 rounded-[50%] w-[98px]">
                      <div className="bg-gradient  border border-solid flex flex-col items-start justify-start lime_500_33_lime_500_33_border12 p-5 rounded-[50%] w-[74px]">
                        <Img
                          className="h-[34px] w-[34px]"
                          src="images/img_icon_7.svg"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <Text
                      className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtLexendRegular24"
                    >
                      Secure Mobile Banking
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[588px] md:max-w-full text-gray-400 text-lg"
                    size="txtLexendLight18Gray400"
                  >
                    Our mobile banking app is designed with the same level of
                    security as our online banking platform. You can confidently
                    access your accounts, make transactions, and manage your
                    finances on the go, knowing that your information is
                    protected.
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1595px] mt-[150px] w-full">
            <div className="flex flex-col gap-3.5 items-center justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-lime-500 w-full"
                size="txtLexendMedium48"
              >
                <span className="text-lime-500 font-lexend text-left font-medium">
                  Frequently
                </span>
                <span className="text-white-A700 font-lexend text-left font-medium">
                  {" "}
                  Asked Questions
                </span>
              </Text>
              <Text
                className="text-gray-400 text-lg w-full"
                size="txtLexendLight18Gray400"
              >
                Still you have any questions? Contact our Team via
                support@yourbank.com
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col font-lexend gap-[30px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
                  <div className="border border-gray-900_02 border-solid flex flex-1 flex-col gap-[30px] h-full items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[14px] w-full">
                    <Text
                      className="text-white-A700 text-xl w-full"
                      size="txtLexendMedium20"
                    >
                      How do I open an account with YourBank?
                    </Text>
                    <Line className="bg-gray-900_02 h-px w-full" />
                    <Text
                      className="leading-[150.00%] max-w-[682px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      <>
                        Opening an account with YourBank is easy. Simply visit
                        our website and click on the &quot;Open an Account&quot;
                        button. Follow the prompts, provide the required
                        information, and complete the application process. If
                        you have any questions or need assistance, our customer
                        support team is available to help.
                      </>
                    </Text>
                  </div>
                  <div className="border border-gray-900_02 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[14px] w-full">
                    <Text
                      className="text-white-A700 text-xl w-full"
                      size="txtLexendMedium20"
                    >
                      What documents do I need to provide to apply for a loan?
                    </Text>
                    <Line className="bg-gray-900_02 h-px w-full" />
                    <Text
                      className="leading-[150.00%] max-w-[682px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      <>
                        The documents required for a loan application may vary
                        depending on the type of loan you are applying for.
                        Generally, you will need to provide identification
                        documents (such as a passport or driver&#39;s license),
                        proof of income (such as pay stubs or tax returns), and
                        information about the collateral (if applicable). Our
                        loan officers will guide you through the specific
                        requirements during the application process.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="relative w-full">
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between m-auto max-w-[1595px] w-full">
                    <div className="border border-gray-900_02 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[14px] w-full">
                      <Text
                        className="text-white-A700 text-xl w-full"
                        size="txtLexendMedium20"
                      >
                        How can I access my accounts online?
                      </Text>
                      <Line className="bg-gray-900_02 h-px w-full" />
                      <Text
                        className="leading-[150.00%] max-w-[682px] md:max-w-full text-gray-400 text-lg"
                        size="txtLexendLight18Gray400"
                      >
                        <>
                          Accessing your accounts online is simple and secure.
                          Visit our website and click on the &quot;Login&quot;
                          button. Enter your username and password to access
                          your accounts. If you haven&#39;t registered for
                          online banking, click on the &quot;Enroll Now&quot;
                          button and follow the registration process. If you
                          need assistance, our customer support team is
                          available to guide you.
                        </>
                      </Text>
                    </div>
                    <div className="border border-gray-900_02 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[14px] w-full">
                      <Text
                        className="text-white-A700 text-xl w-full"
                        size="txtLexendMedium20"
                      >
                        Are my transactions and personal information secure?
                      </Text>
                      <Line className="bg-gray-900_02 h-px w-full" />
                      <Text
                        className="leading-[150.00%] max-w-[682px] md:max-w-full text-gray-400 text-lg"
                        size="txtLexendLight18Gray400"
                      >
                        At YourBank, we prioritize the security of your
                        transactions and personal information. We employ
                        industry-leading encryption and multi-factor
                        authentication to ensure that your data is protected.
                        Additionally, we regularly update our security measures
                        to stay ahead of emerging threats. You can bank with
                        confidence knowing that we have robust security systems
                        in place.
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-gradient2  bottom-[0] h-[275px] inset-x-[0] mx-auto w-full"></div>
                </div>
              </div>
              <Button
                className="border border-gray-900_02 border-solid cursor-pointer flex items-center justify-center min-w-[193px]"
                rightIcon={
                  <Img
                    className="h-[22px] mb-px ml-1"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                shape="round"
                color="gray_900_01"
                size="lg"
                variant="fill"
              >
                <div className="font-inter text-left text-lg">
                  Load All FAQ’s
                </div>
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900_01 flex gap-[50px] items-center justify-center pb-[50px] pt-[100px] md:px-5 px-[162px] w-full" />
      </div>
    </>
  );
};

export default SecurityPageDesktopPage;
