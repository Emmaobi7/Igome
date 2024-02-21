import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const CareersPageDesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-lexend sm:gap-10 md:gap-10 gap-[150px] items-center justify-end mx-auto pt-[50px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1599px] mx-auto md:px-5 w-full">
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
                <a href="javascript:">
                  <Button
                    className="cursor-pointer rounded-[25px] text-center text-lg"
                    color="gray_900_02"
                    size="sm"
                    variant="fill"
                  >
                    Careers
                  </Button>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtLexendRegular18">About</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtLexendRegular18">Security</Text>
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
                    Welcome to{" "}
                  </span>
                  <span className="text-lime-500 font-lexend text-left font-medium">
                    YourBank
                  </span>
                  <span className="text-white-A700 font-lexend text-left font-medium">
                    {" "}
                    Careers!
                  </span>
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[631px] md:max-w-full text-gray-400 text-lg"
                  size="txtLexendLight18Gray400"
                >
                  Join our team and embark on a rewarding journey in the banking
                  industry. At YourBank, we are committed to fostering a culture
                  of excellence and providing opportunities for professional
                  growth. With a focus on innovation, customer service, and
                  integrity, we strive to make a positive impact in the lives of
                  our customers and communities. Join us today and be a part of
                  our mission to shape the future of banking.
                </Text>
              </div>
              <Img
                className="absolute h-[716px] inset-y-[0] my-auto object-cover right-[0] rounded-[16px] w-full"
                src="images/img_image_716x968.png"
                alt="image"
              />
            </div>
            <Img
              className="absolute h-[505px] object-cover right-[6%] top-[6%] w-[480px]"
              src="images/img_abstractdesign_1.png"
              alt="abstractdesign"
            />
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1596px] mt-[150px] w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-lime-500 w-full"
                size="txtLexendMedium48"
              >
                Our Values
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1296px] md:max-w-full text-gray-400 text-lg"
                size="txtLexendLight18Gray400"
              >
                At YourBank, our values form the foundation of our organization
                and guide our actions. We believe in upholding the highest
                standards of integrity, delivering exceptional service, and
                embracing innovation. These values define our culture and shape
                the way we work together to achieve our goals.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="gap-20 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="border-l border-lime-500 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start sm:pl-5 pl-[30px] w-full">
                  <Text
                    className="sm:text-[44px] md:text-[50px] text-[58px] text-gray-800 w-full"
                    size="txtLexendMedium58Gray800"
                  >
                    Integrity
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[728px] md:max-w-full text-gray-400 text-lg"
                    size="txtLexendLight18Gray400"
                  >
                    We conduct ourselves with utmost honesty, transparency, and
                    ethical behavior. We believe in doing what is right for our
                    customers, colleagues, and stakeholders, even when faced
                    with difficult choices.
                  </Text>
                </div>
                <div className="border-l border-lime-500 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start sm:pl-5 pl-[30px] w-full">
                  <Text
                    className="sm:text-[44px] md:text-[50px] text-[58px] text-gray-800 w-full"
                    size="txtLexendMedium58Gray800"
                  >
                    Customer Centricity
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[728px] md:max-w-full text-gray-400 text-lg"
                    size="txtLexendLight18Gray400"
                  >
                    Our customers are at the heart of everything we do. We are
                    dedicated to understanding their needs, providing
                    personalized solutions, and delivering exceptional service
                    that exceeds expectations.
                  </Text>
                </div>
                <div className="border-l border-lime-500 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start sm:pl-5 pl-[30px] w-full">
                  <Text
                    className="sm:text-[44px] md:text-[50px] text-[58px] text-gray-800 w-full"
                    size="txtLexendMedium58Gray800"
                  >
                    Collaboration
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[728px] md:max-w-full text-gray-400 text-lg"
                    size="txtLexendLight18Gray400"
                  >
                    We foster a collaborative and inclusive work environment,
                    where teamwork and diversity are celebrated. By leveraging
                    the unique strengths and perspectives of our employees, we
                    drive innovation and achieve greater success together.
                  </Text>
                </div>
                <div className="border-l border-lime-500 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start sm:pl-5 pl-[30px] w-full">
                  <Text
                    className="sm:text-[44px] md:text-[50px] text-[58px] text-gray-800 w-full"
                    size="txtLexendMedium58Gray800"
                  >
                    Innovation
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[728px] md:max-w-full text-gray-400 text-lg"
                    size="txtLexendLight18Gray400"
                  >
                    We embrace change and constantly seek innovative solutions
                    to meet the evolving needs of our customers. We encourage
                    our employees to think creatively, challenge conventions,
                    and explore new ideas to drive the future of banking.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1596px] mt-[150px] w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-lime-500 w-full"
                size="txtLexendMedium48"
              >
                Our Benefits
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1296px] md:max-w-full text-gray-400 text-lg"
                size="txtLexendLight18Gray400"
              >
                At YourBank, we value our employees and are dedicated to their
                well-being and success. We offer a comprehensive range of
                benefits designed to support their personal and professional
                growth.
              </Text>
            </div>
            <div className="gap-[50px] grid grid-cols-3 sm:grid-cols-[repeat(0,_1fr_1596px)_1fr] md:grid-cols-[repeat(1,_1fr_1596px)_1fr] items-start min-h-[auto] w-full">
              <div
                className="bg-cover bg-gradient6  bg-no-repeat border border-solid flex flex-1 flex-col gap-[30px] h-[336px] items-center justify-start lime_500_19_gray_900_cc_border p-[50px] md:px-10 sm:px-5 rounded-bl-[20px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[20px] w-full"
                style={{ backgroundImage: "url('images/img_ctasection.png')" }}
              >
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                  <div className="bg-gradient1  flex flex-col items-start justify-start p-3 rounded-[50%] w-[98px]">
                    <div className="bg-gradient  border border-solid flex flex-col items-start justify-start lime_500_33_lime_500_33_border5 p-5 rounded-[50%] w-[74px]">
                      <Img
                        className="h-[34px] w-[34px]"
                        src="images/img_icon_58x58.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtLexendRegular24"
                  >
                    Competitive Compensation
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[648px] md:max-w-full text-gray-400 text-lg"
                  size="txtLexendLight18Gray400"
                >
                  We provide a competitive salary package that recognizes the
                  skills and expertise of our employees. YourBank believes in
                  rewarding exceptional performance and offering opportunities
                  for financial growth.
                </Text>
              </div>
              <Line className="self-center h-px bg-gray-900_02 w-full" />
              <Line className="bg-gray-900_02 h-[336px] w-full" />
              <Line className="self-center h-px bg-gray-900_02 w-full" />
              <div
                className="bg-cover bg-gradient6  bg-no-repeat border border-solid flex flex-1 flex-col gap-[30px] h-[336px] items-center justify-start lime_500_19_gray_900_cc_border2 p-[50px] md:px-10 sm:px-5 rounded-bl-[50px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[50px] w-full"
                style={{ backgroundImage: "url('images/img_ctasection.png')" }}
              >
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="bg-gradient1  flex flex-col items-start justify-start p-3 rounded-[50%] w-[98px]">
                    <div className="bg-gradient  border border-solid flex flex-col items-start justify-start lime_500_33_lime_500_33_border6 p-5 rounded-[50%] w-[74px]">
                      <Img
                        className="h-[34px] w-[34px]"
                        src="images/img_icon_34x34.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtLexendRegular24"
                  >
                    Health and Wellness
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[648px] md:max-w-full text-gray-400 text-lg"
                  size="txtLexendLight18Gray400"
                >
                  We prioritize the health and well-being of our employees by
                  providing comprehensive medical, dental, and vision insurance
                  plans. We also offer wellness programs, gym memberships, and
                  resources to support a healthy lifestyle.
                </Text>
              </div>
              <Line className="self-center h-px bg-gray-900_02 w-full" />
              <div
                className="bg-cover bg-gradient6  bg-no-repeat border border-solid flex flex-1 flex-col gap-[30px] h-[336px] items-center justify-start lime_500_19_gray_900_cc_border3 p-[50px] md:px-10 sm:px-5 rounded-bl-[50px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[50px] w-full"
                style={{ backgroundImage: "url('images/img_ctasection.png')" }}
              >
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="bg-gradient1  flex flex-col items-start justify-start p-3 rounded-[50%] w-[98px]">
                    <div className="bg-gradient  border border-solid flex flex-col items-start justify-start lime_500_33_lime_500_33_border7 p-5 rounded-[50%] w-[74px]">
                      <Img
                        className="h-[34px] w-[34px]"
                        src="images/img_icon_3.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtLexendRegular24"
                  >
                    Retirement Planning
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[648px] md:max-w-full text-gray-400 text-lg"
                  size="txtLexendLight18Gray400"
                >
                  YourBank is committed to helping employees plan for their
                  future. We offer a retirement savings plan with a generous
                  employer match to help them build a secure financial
                  foundation for the long term.
                </Text>
              </div>
              <Line className="self-center h-px bg-gray-900_02 w-full" />
              <Line className="bg-gray-900_02 h-[336px] w-full" />
              <Line className="self-center h-px bg-gray-900_02 w-full" />
              <div
                className="bg-cover bg-gradient6  bg-no-repeat border border-solid flex flex-1 flex-col gap-[30px] h-[336px] items-center justify-start lime_500_19_gray_900_cc_border4 p-[50px] md:px-10 sm:px-5 rounded-bl-[20px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[20px] w-full"
                style={{ backgroundImage: "url('images/img_ctasection.png')" }}
              >
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="bg-gradient1  flex flex-col items-start justify-start p-3 rounded-[50%] w-[98px]">
                    <div className="bg-gradient  border border-solid flex flex-col items-start justify-start lime_500_33_lime_500_33_border8 p-5 rounded-[50%] w-[74px]">
                      <Img
                        className="h-[34px] w-[34px]"
                        src="images/img_icon_4.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtLexendRegular24"
                  >
                    Work-Life Balance
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[648px] md:max-w-full text-gray-400 text-lg"
                  size="txtLexendLight18Gray400"
                >
                  We understand the importance of maintaining a healthy
                  work-life balance. YourBank offers flexible work arrangements,
                  paid time off, parental leave, and other programs that support
                  employees in managing their personal and professional
                  commitments.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1596px] mt-[150px] w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-lime-500 w-full"
                size="txtLexendMedium48"
              >
                Job Openings
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1296px] md:max-w-full text-gray-400 text-lg"
                size="txtLexendLight18Gray400"
              >
                Explore exciting job openings at YourBank, where we value
                talent, innovation, and a passion for customer service. Join our
                team and be part of shaping a brighter future in the banking
                industry
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[16px] w-full">
                  <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                        size="txtLexendSemiBold30"
                      >
                        Relationship Manager
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[161px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Location: India
                        </Button>
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[273px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          {" "}
                          Department: Retail Banking
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 items-end justify-start w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                          size="txtLexendSemiBold24"
                        >
                          About This Job
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[683px] md:max-w-full text-gray-400 text-lg"
                          size="txtLexendLight18Gray400"
                        >
                          As a Relationship Manager at YourBank, you will be
                          responsible for developing and maintaining
                          relationships with our valued customers. You will
                          proactively identify their financial needs and offer
                          tailored solutions to help them achieve their goals.
                          We are seeking individuals with excellent
                          communication skills, a strong sales acumen, and a
                          passion for delivering exceptional customer service.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                          size="txtLexendSemiBold24"
                        >
                          Requirements & Qualifications
                        </Text>
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              <>
                                Bachelor&#39;s degree in Business, Finance, or a
                                related field
                              </>
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag_One"
                            />
                            <Text
                              className="flex-1 leading-[150.00%] max-w-[649px] md:max-w-full text-gray-400 text-lg"
                              size="txtLexendLight18Gray400"
                            >
                              Minimum of 3 years of experience in sales or
                              relationship management in the banking industry
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag_Two"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              Proven track record of meeting and exceeding sales
                              targets
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag_Three"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              Excellent interpersonal and negotiation skills
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag_Four"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              Strong knowledge of banking products and services
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[157px] rounded-[29px] text-center text-lg"
                    shape="round"
                    color="lime_500"
                    size="md"
                    variant="fill"
                  >
                    Apply Now
                  </Button>
                </div>
                <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-1 flex-col gap-[50px] h-full items-start justify-between p-[50px] md:px-10 sm:px-5 rounded-[16px] w-full">
                  <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                        size="txtLexendSemiBold30"
                      >
                        Risk Analyst
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[161px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Location: India
                        </Button>
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[303px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          {" "}
                          Department: Risk Management
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 items-end justify-start w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                          size="txtLexendSemiBold24"
                        >
                          About This Job
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[683px] md:max-w-full text-gray-400 text-lg"
                          size="txtLexendLight18Gray400"
                        >
                          As a Risk Analyst at YourBank, you will play a vital
                          role in identifying and assessing potential risks to
                          our organization. You will analyze data, conduct risk
                          assessments, and develop strategies to mitigate risks.
                          We are looking for detail-oriented individuals with
                          strong analytical skills and a solid understanding of
                          risk management principles.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                          size="txtLexendSemiBold24"
                        >
                          Requirements & Qualifications
                        </Text>
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              <>
                                Bachelor&#39;s degree in Finance, Economics, or
                                a related field
                              </>
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag_One"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              Minimum of 2 years of experience in risk
                              management or a similar role
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag_Two"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              Proficiency in risk analysis tools and techniques
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag_Three"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              Strong analytical and problem-solving skills
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag_Four"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              Knowledge of regulatory requirements and industry
                              best practices
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[157px] rounded-[29px] text-center text-lg"
                    shape="round"
                    color="lime_500"
                    size="md"
                    variant="fill"
                  >
                    Apply Now
                  </Button>
                </div>
                <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start max-w-[783px] p-[50px] md:px-10 sm:px-5 rounded-[16px] w-full">
                  <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                        size="txtLexendSemiBold30"
                      >
                        IT Security Specialist
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[161px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Location: India
                        </Button>
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[353px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          {" "}
                          Department: Information Technology
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 items-end justify-start w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                          size="txtLexendSemiBold24"
                        >
                          About This Job
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[683px] md:max-w-full text-gray-400 text-lg"
                          size="txtLexendLight18Gray400"
                        >
                          As an IT Security Specialist at YourBank, you will be
                          responsible for ensuring the security and integrity of
                          our information systems. You will develop and
                          implement security protocols, conduct vulnerability
                          assessments, and respond to security incidents. We are
                          seeking individuals with a strong technical
                          background, knowledge of cybersecurity best practices,
                          and a commitment to maintaining the confidentiality of
                          customer data.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                          size="txtLexendSemiBold24"
                        >
                          Requirements & Qualifications
                        </Text>
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag"
                            />
                            <Text
                              className="flex-1 leading-[150.00%] max-w-[649px] md:max-w-full text-gray-400 text-lg"
                              size="txtLexendLight18Gray400"
                            >
                              <>
                                Bachelor&#39;s degree in Computer Science,
                                Information Security, or a related field
                              </>
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag_One"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              Minimum of 5 years of experience in IT security or
                              a similar role
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag_Two"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              In-depth knowledge of network security protocols
                              and technologies
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag_Three"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              Familiarity with regulatory frameworks such as PCI
                              DSS and GDPR
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_bag_gray_400.svg"
                              alt="bag_Four"
                            />
                            <Text
                              className="flex-1 text-gray-400 text-lg w-auto"
                              size="txtLexendLight18Gray400"
                            >
                              Professional certifications such as CISSP or CISM
                              are preferred
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[157px] rounded-[29px] text-center text-lg"
                    shape="round"
                    color="lime_500"
                    size="md"
                    variant="fill"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
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
          <div
            className="bg-cover bg-gradient5  bg-no-repeat border border-gray-900_02 border-solid flex md:flex-col flex-row md:gap-10 gap-[150px] h-72 items-center justify-start max-w-[1596px] mt-[150px] p-20 md:px-10 sm:px-5 rounded-[20px] w-full"
            style={{ backgroundImage: "url('images/img_ctasection.png')" }}
          >
            <div className="relative w-[83%] md:w-full">
              <Img
                className="absolute h-72 inset-y-[0] left-[0] my-auto object-cover w-[283px]"
                src="images/img_abstractdesign_224x213.png"
                alt="abstractdesign_One"
              />
              <div className="flex flex-col gap-3.5 items-start justify-start ml-auto my-auto relative w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-full"
                  size="txtLexendRegular40"
                >
                  <span className="text-white-A700 font-lexend text-left font-normal">
                    Start your Career with{" "}
                  </span>
                  <span className="text-lime-500 font-lexend text-left font-normal">
                    YourBank today!
                  </span>
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[1103px] md:max-w-full text-gray-400 text-lg"
                  size="txtLexendLight18Gray400"
                >
                  Lorem ipsum dolor sit amet consectetur. Blandit odio semper
                  risus pellentesque elit. Pellentesque eget ut imperdiet nulla
                  penatibus. Nascetur viverra arcu sed amet cursus purus.
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer min-w-[183px] text-center text-lg"
              shape="round"
              color="lime_500"
              size="lg"
              variant="fill"
            >
              Open Account
            </Button>
          </div>
        </div>
        <Footer className="bg-gray-900_01 flex gap-[50px] items-center justify-center pb-[50px] pt-[100px] md:px-5 px-[162px] w-full" />
      </div>
    </>
  );
};

export default CareersPageDesktopPage;
