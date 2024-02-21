import React from "react";

import { Button, Img, Input, Line, List, Slider, Text } from "components";
import Footer from "components/Footer";

const HomePageDesktopPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-lexend items-center justify-start mx-auto w-full">
        <div className="h-[1004px] md:h-[787px] sm:h-[Infinitypx] max-w-[1850px] mx-auto md:px-5 py-[100px] relative w-full">
          <div className="absolute bottom-[10%] right-[30%] w-[42%] md:w-full">
            <Img
              className="absolute h-[382px] object-cover right-[0] top-[7%] w-[417px]"
              src="images/img_abstractdesign.png"
              alt="abstractdesign"
            />
            <div className="flex flex-col gap-[26.01px] justify-start max-w-[627px] my-auto p-[34.68px] sm:px-5 relative w-full">
              <div className="relative w-full">
                <div className="h-[624px] sm:h-[Infinitypx] ml-auto mt-auto w-[90%] sm:w-full">
                  <Img
                    className="h-[624px] m-auto object-cover rounded-[10px] w-[515px] sm:w-full"
                    src="defaultNoData.png"
                    alt="createfromframe"
                  />
                  <div className="absolute flex flex-col gap-[26px] h-max inset-[0] items-center justify-center m-auto w-[87%]">
                    <div className="flex flex-col gap-[17.34px] items-start justify-start w-full">
                      <Text
                        className="text-[17.34px] text-white-A700 w-full"
                        size="txtLexendMedium1734"
                      >
                        Your Transactions
                      </Text>
                      <div className="flex flex-col relative w-full">
                        <div className="flex flex-col mx-auto w-full">
                          <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-row items-end justify-between mx-auto sm:px-5 px-[20.81px] py-[13.87px] rounded-[10px] w-[445px] sm:w-full">
                            <div className="flex flex-row gap-[8.67px] items-center justify-start w-auto">
                              <Button
                                className="flex h-[38px] items-center justify-center w-[38px]"
                                shape="circle"
                                color="lime_500"
                                size="xs"
                                variant="fill"
                              >
                                <Img
                                  className="h-4"
                                  src="images/img_share.svg"
                                  alt="share"
                                />
                              </Button>
                              <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                                <Text
                                  className="text-[15.61px] text-white-A700 w-auto"
                                  size="txtLexendLight1561"
                                >
                                  Transaction
                                </Text>
                                <Text
                                  className="text-[17.34px] text-white-A700 w-auto"
                                  size="txtLexendRegular1734"
                                >
                                  Joel Kenley
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="sm:text-[16.81px] md:text-[18.81px] text-[20.81px] text-white-A700 w-auto"
                              size="txtLexendMedium2081"
                            >
                              -$68.00
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[-24.28px] mx-auto px-[17.34px] w-[445px] sm:w-full z-[1]">
                            <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-row items-end justify-between sm:px-5 px-[20.81px] py-[13.87px] rounded-[10px] w-full">
                              <div className="flex flex-row gap-[8.67px] items-center justify-start w-auto">
                                <Button
                                  className="flex h-[38px] items-center justify-center w-[38px]"
                                  shape="circle"
                                  color="lime_500"
                                  size="xs"
                                  variant="fill"
                                >
                                  <Img
                                    className="h-4"
                                    src="images/img_share.svg"
                                    alt="share_One"
                                  />
                                </Button>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <Text
                                    className="text-[15.61px] text-white-A700 w-auto"
                                    size="txtLexendLight1561"
                                  >
                                    Transaction
                                  </Text>
                                  <Text
                                    className="text-[17.34px] text-white-A700 w-auto"
                                    size="txtLexendRegular1734"
                                  >
                                    Mark Smith
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="sm:text-[16.81px] md:text-[18.81px] text-[20.81px] text-white-A700 w-auto"
                                size="txtLexendMedium2081"
                              >
                                -$68.00
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start mt-[-24.28px] mx-auto sm:px-5 px-[34.68px] w-full z-[1]">
                          <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-row items-end justify-between sm:px-5 px-[20.81px] py-[13.87px] rounded-[10px] w-full">
                            <div className="flex flex-row gap-[8.67px] items-center justify-start w-auto">
                              <Button
                                className="flex h-[38px] items-center justify-center w-[38px]"
                                shape="circle"
                                color="lime_500"
                                size="xs"
                                variant="fill"
                              >
                                <Img
                                  className="h-4"
                                  src="images/img_share.svg"
                                  alt="share_Two"
                                />
                              </Button>
                              <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                                <Text
                                  className="text-[15.61px] text-white-A700 w-auto"
                                  size="txtLexendLight1561"
                                >
                                  Transaction
                                </Text>
                                <Text
                                  className="text-[17.34px] text-white-A700 w-auto"
                                  size="txtLexendRegular1734"
                                >
                                  Lenen Roy
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="sm:text-[16.81px] md:text-[18.81px] text-[20.81px] text-white-A700 w-auto"
                              size="txtLexendMedium2081"
                            >
                              -$68.00
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[25.14px] items-end justify-start w-full">
                      <Text
                        className="text-[17.34px] text-white-A700 w-full"
                        size="txtLexendMedium1734"
                      >
                        Money Exchange
                      </Text>
                      <div className="border border-gray-900_02 border-solid flex flex-col items-start justify-start rounded-[10px] w-full">
                        <List
                          className="sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] justify-start w-full"
                          orientation="horizontal"
                        >
                          <div className="bg-gray-900_01 flex flex-1 flex-col gap-[8.67px] items-center justify-start sm:ml-[0] p-[17.34px] w-full">
                            <div className="flex flex-row gap-[8.67px] items-center justify-start w-full">
                              <Img
                                className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                                src="images/img_image.png"
                                alt="image"
                              />
                              <Text
                                className="flex-1 text-[15.61px] text-white-A700 w-auto"
                                size="txtLexendRegular1561"
                              >
                                INR
                              </Text>
                            </div>
                            <Text
                              className="text-[13.87px] text-gray-300 w-full"
                              size="txtLexendLight1387"
                            >
                              Indian Rupees
                            </Text>
                          </div>
                          <Line className="self-center h-[99px] bg-gray-900_02 w-px" />
                          <div className="bg-gray-900_01 flex flex-1 flex-col gap-[8.67px] items-center justify-start sm:ml-[0] p-[17.34px] w-full">
                            <div className="flex flex-row gap-[8.67px] items-center justify-start w-full">
                              <Img
                                className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                                src="images/img_image_34x34.png"
                                alt="image"
                              />
                              <Text
                                className="flex-1 text-[15.61px] text-white-A700 w-auto"
                                size="txtLexendRegular1561"
                              >
                                USD
                              </Text>
                            </div>
                            <Text
                              className="text-[13.87px] text-gray-300 w-full"
                              size="txtLexendLight1387"
                            >
                              United States Dollar
                            </Text>
                          </div>
                        </List>
                        <Line className="bg-gray-900_02 h-px w-full" />
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-center px-[17.34px] py-[26.01px] w-full">
                            <Text
                              className="text-[17.34px] text-white-A700 w-auto"
                              size="txtLexendMedium1734"
                            >
                              5,0000
                            </Text>
                          </div>
                          <Line className="bg-gray-900_02 h-[78px] sm:h-px sm:w-full w-px" />
                          <Input
                            name="container"
                            placeholder="12.00"
                            className="font-medium p-0 placeholder:text-white-A700 text-[17.34px] text-left w-full"
                            wrapClassName="flex-1 sm:flex-1 w-1/2 sm:w-full"
                            shape="square"
                            color="gray_900_01"
                            size="lg"
                            variant="fill"
                          ></Input>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer rounded-[25px] text-[15.61px] text-center w-full"
                        color="gray_900_03"
                        size="sm"
                        variant="fill"
                      >
                        Exchange
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-gray-900_03 flex flex-row gap-[8.67px] items-center justify-start left-[0] px-[17.34px] py-[13.87px] rounded-[10px] top-[0] w-auto">
                  <Button
                    className="flex h-[38px] items-center justify-center w-[38px]"
                    shape="circle"
                    color="lime_500"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-[11px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </Button>
                  <div className="flex flex-col gap-[0.87px] items-start justify-start w-auto">
                    <Text
                      className="text-[17.34px] text-white-A700 w-full"
                      size="txtLexendRegular1734"
                    >
                      + $5000,00
                    </Text>
                    <Text
                      className="text-[13.87px] text-gray-300 w-full"
                      size="txtLexendLight1387"
                    >
                      Monthly Income
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_03 flex flex-row gap-[8.67px] items-center justify-between sm:pl-5 pl-[20.81px] pr-[8.67px] py-[8.67px] rounded-[34px] w-[370px] sm:w-full">
                <Text
                  className="text-[15.61px] text-white-A700 w-auto"
                  size="txtLexendRegular1561"
                >
                  Supported Currency
                </Text>
                <Img
                  className="h-[52px] rounded-[26px] w-44"
                  src="images/img_subcontainer.svg"
                  alt="subcontainer"
                />
              </div>
            </div>
          </div>
          <div className="absolute md:h-[498px] h-[786px] left-[16%] top-[10%] w-[96%] md:w-full">
            <div className="absolute inset-y-[0] left-[0] my-auto w-[57%] md:w-full">
              <div className="flex flex-col gap-[50px] items-start justify-start ml-auto mt-auto w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="bg-gray-900_02 flex flex-row gap-1.5 items-center justify-start pl-3 pr-5 py-2.5 rounded-[22px] w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtLexendLight18"
                    >
                      No LLC Required, No Credit Check.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <Text
                      className="leading-[150.00%] text-5xl sm:text-[38px] md:text-[44px] text-lime-500"
                      size="txtLexendMedium48"
                    >
                      <>
                        Welcome to YourBank
                        <br />
                        Empowering Your Financial Journey
                      </>
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[825px] md:max-w-full text-gray-300 text-lg"
                      size="txtLexendLight18Gray300"
                    >
                      <>
                        At YourBank, our mission is to provide comprehensive
                        banking solutions that empower individuals and
                        businesses to achieve their financial goals. We are
                        committed to delivering personalized and innovative
                        services that prioritize our customers&#39; needs.
                      </>
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
              <Img
                className="absolute h-[498px] left-[0] object-cover top-[0] w-[689px]"
                src="images/img_abstractdesign_498x689.png"
                alt="abstractdesign_One"
              />
            </div>
            <header className="absolute bg-gray-900_01 border border-gray-900_02 border-solid flex md:flex-col md:gap-10 items-center justify-between sm:px-5 px-[34px] py-5 right-[0] rounded-[47px] top-[6%] w-full">
              <Img
                className="h-10 w-[155px]"
                src="images/img_logo.svg"
                alt="logo"
              />
              <ul className="flex sm:flex-col flex-row gap-[26px] sm:hidden items-center justify-start w-auto common-row-list">
                <li>
                  <a href="javascript:">
                    <Button
                      className="cursor-pointer rounded-[25px] text-center text-lg"
                      color="gray_900_02"
                      size="sm"
                      variant="fill"
                    >
                      Home
                    </Button>
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
                  <a href="javascript:" className="text-lg text-white-A700">
                    <Text size="txtLexendRegular18">Security</Text>
                  </a>
                </li>
              </ul>
              <div className="flex flex-row gap-[30px] items-center justify-start w-auto">
                <a
                  href="javascript:"
                  className="text-lg text-white-A700 w-auto"
                >
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
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1596px] mt-[168px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[300px] items-end justify-between w-full">
            <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtLexendMedium48WhiteA700"
              >
                <span className="text-white-A700 font-lexend text-left font-medium">
                  Our{" "}
                </span>
                <span className="text-lime-500 font-lexend text-left font-medium">
                  Products
                </span>
              </Text>
              <Text
                className="leading-[150.00%] max-w-[910px] md:max-w-full text-gray-400 text-lg"
                size="txtLexendLight18Gray400"
              >
                Discover a range of comprehensive and customizable banking
                products at YourBank, designed to suit your unique financial
                needs and aspirations
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
          <List
            className="sm:flex-col flex-row gap-[50px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] justify-start w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
              <div className="bg-gradient1  flex flex-col items-start justify-start p-3 rounded-[50%] w-[98px]">
                <div className="bg-gradient  border border-solid flex flex-col items-start justify-start lime_500_33_lime_500_33_border2 p-5 rounded-[50%] w-[74px]">
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_bag.svg"
                    alt="bag"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-full"
                  size="txtLexendRegular24"
                >
                  Checking Accounts
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[465px] md:max-w-full text-center text-gray-400 text-lg"
                  size="txtLexendLight18Gray400"
                >
                  Enjoy easy and convenient access to your funds with our range
                  of checking account options. Benefit from features such as
                  online and mobile banking, debit cards, and free ATM access.
                </Text>
              </div>
            </div>
            <Line className="self-center h-[319px] bg-gray-900_02 w-px" />
            <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
              <div className="bg-gradient1  flex flex-col items-start justify-start p-3 rounded-[50%] w-[98px]">
                <div className="bg-gradient  border border-solid flex flex-col items-start justify-start lime_500_33_lime_500_33_border3 p-5 rounded-[50%] w-[74px]">
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_icon_lime_500.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-full"
                  size="txtLexendRegular24"
                >
                  Savings Accounts
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[465px] md:max-w-full text-center text-gray-400 text-lg"
                  size="txtLexendLight18Gray400"
                >
                  <>
                    Build your savings with our competitive interest rates and
                    flexible savings account options. Whether you&#39;re saving
                    for a specific goal or want to grow your wealth over time,
                    we have the right account for you.
                  </>
                </Text>
              </div>
            </div>
            <Line className="self-center h-[319px] bg-gray-900_02 w-px" />
            <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
              <div className="bg-gradient1  flex flex-col items-start justify-start p-3 rounded-[50%] w-[98px]">
                <div className="bg-gradient  border border-solid flex flex-col items-start justify-start lime_500_33_lime_500_33_border4 p-5 rounded-[50%] w-[74px]">
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_icon_lime_500_34x34.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-full"
                  size="txtLexendRegular24"
                >
                  Loans and Mortgages
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[465px] md:max-w-full text-center text-gray-400 text-lg"
                  size="txtLexendLight18Gray400"
                >
                  Realize your dreams with our flexible loan and mortgage
                  options. From personal loans to home mortgages, our
                  experienced loan officers are here to guide you through the
                  application process and help you secure the funds you need.
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1596px] mt-[150px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-lime-500 w-full"
              size="txtLexendMedium48"
            >
              Use Cases
            </Text>
            <Text
              className="text-gray-400 text-lg w-full"
              size="txtLexendLight18Gray400"
            >
              At YourBank, we cater to the diverse needs of individuals and
              businesses alike, offering a wide range of financial solutions
            </Text>
          </div>
          <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
              <div className="bg-gray-900_01 flex flex-1 flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[20px] w-full">
                <div className="relative w-full">
                  <Img
                    className="absolute h-56 left-[0] object-cover top-[0] w-[213px]"
                    src="images/img_abstractdesign_224x213.png"
                    alt="abstractdesign_Two"
                  />
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between max-w-[648px] ml-auto mt-auto relative w-full">
                    <div className="bg-gray-900 border border-gray-900_02 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-[30px] sm:px-5 rounded-[16px] w-full">
                      <div className="bg-gradient1  flex flex-col items-start justify-start p-2.5 rounded-[50%] w-[78px]">
                        <Button
                          className="flex h-[58px] items-center justify-center rounded-[50%] w-[58px]"
                          shape="circle"
                          size="md"
                          variant="outline"
                          color="lime_500_33_lime_500_33"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_close.svg"
                            alt="close"
                          />
                        </Button>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[254px] md:max-w-full text-center text-white-A700 text-xl"
                        size="txtLexendRegular20"
                      >
                        Managing Personal Finances
                      </Text>
                    </div>
                    <div className="bg-gray-900 border border-gray-900_02 border-solid flex flex-1 flex-col gap-6 h-full items-center justify-start p-[30px] sm:px-5 rounded-[16px] w-full">
                      <div className="bg-gradient1  flex flex-col items-start justify-start p-2.5 rounded-[50%] w-[78px]">
                        <Button
                          className="flex h-[58px] items-center justify-center rounded-[50%] w-[58px]"
                          shape="circle"
                          size="md"
                          variant="outline"
                          color="lime_500_33_lime_500_33"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_television.svg"
                            alt="television"
                          />
                        </Button>
                      </div>
                      <Text
                        className="text-center text-white-A700 text-xl w-full"
                        size="txtLexendRegular20"
                      >
                        Saving for the Future
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                  <div className="bg-gray-900 border border-gray-900_02 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-[30px] sm:px-5 rounded-[16px] w-full">
                    <div className="bg-gradient1  flex flex-col items-start justify-start p-2.5 rounded-[50%] w-[78px]">
                      <Button
                        className="flex h-[58px] items-center justify-center rounded-[50%] w-[58px]"
                        shape="circle"
                        size="md"
                        variant="outline"
                        color="lime_500_33_lime_500_33"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_thumbsup.svg"
                          alt="thumbsup"
                        />
                      </Button>
                    </div>
                    <Text
                      className="text-center text-white-A700 text-xl w-full"
                      size="txtLexendRegular20"
                    >
                      Homeownership
                    </Text>
                  </div>
                  <div className="bg-gray-900 border border-gray-900_02 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-[30px] sm:px-5 rounded-[16px] w-full">
                    <div className="bg-gradient1  flex flex-col items-start justify-start p-2.5 rounded-[50%] w-[78px]">
                      <Button
                        className="flex h-[58px] items-center justify-center rounded-[50%] w-[58px]"
                        shape="circle"
                        size="md"
                        variant="outline"
                        color="lime_500_33_lime_500_33"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_icon_lime_500_58x58.svg"
                          alt="icon_One"
                        />
                      </Button>
                    </div>
                    <Text
                      className="text-center text-white-A700 text-xl w-full"
                      size="txtLexendRegular20"
                    >
                      Education Funding
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col md:gap-10 gap-[62px] items-start justify-start w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                    size="txtLexendMedium30"
                  >
                    For Individuals
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[748px] md:max-w-full text-gray-400 text-lg"
                    size="txtLexendLight18Gray400"
                  >
                    For individuals, our mortgage services pave the way to
                    homeownership, and our flexible personal loans provide vital
                    support during various life milestones. We also prioritize
                    retirement planning, ensuring a financially secure future
                    for our customers
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[50px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] justify-start w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="sm:text-[44px] md:text-[50px] text-[58px] text-lime-500 w-full"
                      size="txtLexendMedium58"
                    >
                      78%
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[182px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      Secure Retirement Planning
                    </Text>
                  </div>
                  <Line className="self-center h-[146px] bg-gray-900_02 w-px" />
                  <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="sm:text-[44px] md:text-[50px] text-[58px] text-lime-500 w-full"
                      size="txtLexendMedium58"
                    >
                      63%
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[182px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      Manageable Debt Consolidation
                    </Text>
                  </div>
                  <Line className="self-center h-[146px] bg-gray-900_02 w-px" />
                  <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="sm:text-[44px] md:text-[50px] text-[58px] text-lime-500 w-full"
                      size="txtLexendMedium58"
                    >
                      91%
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[182px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      Reducing financial burdens
                    </Text>
                  </div>
                </List>
                <Button
                  className="border border-gray-900_02 border-solid cursor-pointer min-w-[148px] text-center text-lg"
                  shape="round"
                  color="gray_900_01"
                  size="lg"
                  variant="fill"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
              <div className="flex flex-1 flex-col md:gap-10 gap-[62px] items-start justify-start w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                    size="txtLexendMedium30"
                  >
                    For Business
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[748px] md:max-w-full text-gray-400 text-lg"
                    size="txtLexendLight18Gray400"
                  >
                    {" "}
                    For businesses, we empower growth with working capital
                    solutions that optimize cash flow, and our tailored
                    financing options fuel business expansion. Whatever your
                    financial aspirations, YourBank is committed to providing
                    the right tools and support to achieve them
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[50px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] justify-start w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="sm:text-[44px] md:text-[50px] text-[58px] text-lime-500 w-full"
                      size="txtLexendMedium58"
                    >
                      65%
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[182px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      Cash Flow Management
                    </Text>
                  </div>
                  <Line className="self-center h-[146px] bg-gray-900_02 w-px" />
                  <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="sm:text-[44px] md:text-[50px] text-[58px] text-lime-500 w-full"
                      size="txtLexendMedium58"
                    >
                      70%
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[182px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      Drive Business Expansion
                    </Text>
                  </div>
                  <Line className="self-center h-[146px] bg-gray-900_02 w-px" />
                  <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="sm:text-[44px] md:text-[50px] text-[58px] text-lime-500 w-full"
                      size="txtLexendMedium58"
                    >
                      45%
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[182px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      Streamline payroll processing
                    </Text>
                  </div>
                </List>
                <Button
                  className="border border-gray-900_02 border-solid cursor-pointer min-w-[148px] text-center text-lg"
                  shape="round"
                  color="gray_900_01"
                  size="lg"
                  variant="fill"
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-gray-900_01 flex flex-1 flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[20px] w-full">
                <div className="relative w-full">
                  <Img
                    className="absolute h-56 object-cover right-[0] top-[0] w-[213px]"
                    src="images/img_abstractdesign_1.png"
                    alt="abstractdesign_Three"
                  />
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between max-w-[648px] mt-auto relative w-full">
                    <div className="bg-gray-900 border border-gray-900_02 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-[30px] sm:px-5 rounded-[16px] w-full">
                      <div className="bg-gradient1  flex flex-col items-start justify-start p-2.5 rounded-[50%] w-[78px]">
                        <Button
                          className="flex h-[58px] items-center justify-center rounded-[50%] w-[58px]"
                          shape="circle"
                          size="md"
                          variant="outline"
                          color="lime_500_33_lime_500_33"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_thumbsup_lime_500.svg"
                            alt="thumbsup_One"
                          />
                        </Button>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[254px] md:max-w-full text-center text-white-A700 text-xl"
                        size="txtLexendRegular20"
                      >
                        Startups and Entrepreneurs
                      </Text>
                    </div>
                    <div className="bg-gray-900 border border-gray-900_02 border-solid flex flex-1 flex-col gap-6 h-full items-center justify-start p-[30px] sm:px-5 rounded-[16px] w-full">
                      <div className="bg-gradient1  flex flex-col items-start justify-start p-2.5 rounded-[50%] w-[78px]">
                        <Button
                          className="flex h-[58px] items-center justify-center rounded-[50%] w-[58px]"
                          shape="circle"
                          size="md"
                          variant="outline"
                          color="lime_500_33_lime_500_33"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_icon_lime_500_34x34.svg"
                            alt="icon_Two"
                          />
                        </Button>
                      </div>
                      <Text
                        className="text-center text-white-A700 text-xl w-full"
                        size="txtLexendRegular20"
                      >
                        Cash Flow Management
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                  <div className="bg-gray-900 border border-gray-900_02 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-[30px] sm:px-5 rounded-[16px] w-full">
                    <div className="bg-gradient1  flex flex-col items-start justify-start p-2.5 rounded-[50%] w-[78px]">
                      <Button
                        className="flex h-[58px] items-center justify-center rounded-[50%] w-[58px]"
                        shape="circle"
                        size="md"
                        variant="outline"
                        color="lime_500_33_lime_500_33"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_icon_58x58.svg"
                          alt="icon_Three"
                        />
                      </Button>
                    </div>
                    <Text
                      className="text-center text-white-A700 text-xl w-full"
                      size="txtLexendRegular20"
                    >
                      Business Expansion
                    </Text>
                  </div>
                  <div className="bg-gray-900 border border-gray-900_02 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-[30px] sm:px-5 rounded-[16px] w-full">
                    <div className="bg-gradient1  flex flex-col items-start justify-start p-2.5 rounded-[50%] w-[78px]">
                      <Button
                        className="flex h-[58px] items-center justify-center rounded-[50%] w-[58px]"
                        shape="circle"
                        size="md"
                        variant="outline"
                        color="lime_500_33_lime_500_33"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_icon_1.svg"
                          alt="icon_Four"
                        />
                      </Button>
                    </div>
                    <Text
                      className="text-center text-white-A700 text-xl w-full"
                      size="txtLexendRegular20"
                    >
                      Payment Solutions
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1596px] mt-[150px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-center justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-lime-500 w-full"
              size="txtLexendMedium48"
            >
              Our Features
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1296px] md:max-w-full text-gray-400 text-lg"
              size="txtLexendLight18Gray400"
            >
              Experience a host of powerful features at YourBank, including
              seamless online banking, secure transactions, and personalized
              financial insights, all designed to enhance your banking
              experience
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col relative w-full">
              <Slider
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 2 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[1.00] mt-[-NaNpx] z-[1]"
                ref={sliderRef}
                className="w-full"
                items={[...Array(6)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col items-start justify-start max-w-[1258px] mx-2.5">
                      <List
                        className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-1 flex-col gap-[30px] h-full items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                          <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                            <Text
                              className="flex-1 text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                              size="txtLexendRegular22"
                            >
                              24/7 Account Access
                            </Text>
                            <Img
                              className="h-[34px] w-[34px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                          <Text
                            className="leading-[150.00%] max-w-[514px] md:max-w-full text-gray-400 text-lg tracking-[-0.11px]"
                            size="txtLexendLight18Gray400"
                          >
                            Enjoy the convenience of accessing your accounts
                            anytime, anywhere through our secure online banking
                            platform. Check balances, transfer funds, and pay
                            bills with ease.
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                          <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                            <Text
                              className="flex-1 text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                              size="txtLexendRegular22"
                            >
                              Mobile Banking App
                            </Text>
                            <Img
                              className="h-[34px] w-[34px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                          <Text
                            className="leading-[150.00%] max-w-[514px] md:max-w-full text-gray-400 text-lg tracking-[-0.11px]"
                            size="txtLexendLight18Gray400"
                          >
                            Stay connected to your finances on the go with our
                            user-friendly mobile banking app. Easily manage your
                            accounts, deposit checks, and make payments from
                            your smartphone or tablet.
                          </Text>
                        </div>
                      </List>
                    </div>
                  </React.Fragment>
                ))}
              />
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between mt-[-35px] mx-auto w-full z-[1]">
                <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                    <Text
                      className="flex-1 text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                      size="txtLexendRegular22"
                    >
                      Secure Transactions
                    </Text>
                    <Img
                      className="cursor-pointer h-[34px] w-[34px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                      onClick={() => sliderRef.current?.slidePrev?.()}
                    />
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[514px] md:max-w-full text-gray-400 text-lg tracking-[-0.11px]"
                    size="txtLexendLight18Gray400"
                  >
                    Rest assured knowing that your transactions are protected by
                    industry-leading security measures. We employ encryption and
                    multi-factor authentication to safeguard your financial
                    information.
                  </Text>
                </div>
                <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-1 flex-col gap-[30px] h-full items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                    <Text
                      className="flex-1 text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                      size="txtLexendRegular22"
                    >
                      Bill Pay and Transfers
                    </Text>
                    <Img
                      className="cursor-pointer h-[34px] w-[34px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft_One"
                      onClick={() => sliderRef.current?.slideNext?.()}
                    />
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[514px] md:max-w-full text-gray-400 text-lg tracking-[-0.11px]"
                    size="txtLexendLight18Gray400"
                  >
                    Save time and avoid late fees with our convenient bill pay
                    service. Set up recurring payments or make one-time
                    transfers between your accounts with just a few clicks.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1595px] mt-[150px] mx-auto md:px-5 w-full">
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
                      Opening an account with YourBank is easy. Simply visit our
                      website and click on the &quot;Open an Account&quot;
                      button. Follow the prompts, provide the required
                      information, and complete the application process. If you
                      have any questions or need assistance, our customer
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
                      information about the collateral (if applicable). Our loan
                      officers will guide you through the specific requirements
                      during the application process.
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
                        button. Enter your username and password to access your
                        accounts. If you haven&#39;t registered for online
                        banking, click on the &quot;Enroll Now&quot; button and
                        follow the registration process. If you need assistance,
                        our customer support team is available to guide you.
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
                      Additionally, we regularly update our security measures to
                      stay ahead of emerging threats. You can bank with
                      confidence knowing that we have robust security systems in
                      place.
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
              <div className="font-inter text-left text-lg">Load All FAQ’s</div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1596px] mt-[150px] mx-auto md:px-5 w-full">
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
                digital solutions and personalized customer service. See why our
                clients trust us for a secure and prosperous financial journey
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
                alt="arrowleft_Two"
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
                        alt="container_One"
                      />
                      <Text
                        className="leading-[150.00%] max-w-[404px] md:max-w-full text-center text-lg text-white-A700"
                        size="txtLexendRegular18"
                      >
                        YourBank has been my trusted financial partner for
                        years. Their personalized service and innovative digital
                        banking solutions have made managing my finances a
                        breeze.
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
                        alt="container_Two"
                      />
                      <Text
                        className="leading-[150.00%] max-w-[404px] md:max-w-full text-center text-lg text-white-A700"
                        size="txtLexendRegular18"
                      >
                        I recently started my own business, and YourBank has
                        been instrumental in helping me set up my business
                        accounts and secure the financing I needed. Their expert
                        guidance and tailored solutions have been invaluable.
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
                    alt="container_Three"
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
                alt="icon_Five"
              />
            </Button>
          </div>
        </div>
        <div
          className="bg-cover bg-gradient5  bg-no-repeat border border-gray-900_02 border-solid flex md:flex-col flex-row md:gap-10 gap-[150px] h-72 items-center justify-start max-w-[1596px] mt-[137px] mx-auto p-20 md:px-5 rounded-[20px] w-full"
          style={{ backgroundImage: "url('images/img_ctasection.png')" }}
        >
          <div className="relative w-[83%] md:w-full">
            <Img
              className="absolute h-72 inset-y-[0] left-[0] my-auto object-cover w-[283px]"
              src="images/img_abstractdesign_224x213.png"
              alt="abstractdesign_Four"
            />
            <div className="flex flex-col gap-3.5 items-start justify-start ml-auto my-auto relative w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-full"
                size="txtLexendRegular40"
              >
                <span className="text-white-A700 font-lexend text-left font-normal">
                  Start your financial journey with{" "}
                </span>
                <span className="text-lime-500 font-lexend text-left font-normal">
                  YourBank today!
                </span>
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1103px] md:max-w-full text-gray-400 text-lg"
                size="txtLexendLight18Gray400"
              >
                Ready to take control of your finances? Join YourBank now, and
                let us help you achieve your financial goals with our tailored
                solutions and exceptional customer service
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
        <Footer className="bg-gray-900_01 flex gap-[50px] items-center justify-center mt-[150px] pb-[50px] pt-[100px] md:px-5 px-[162px] w-full" />
      </div>
    </>
  );
};

export default HomePageDesktopPage;
