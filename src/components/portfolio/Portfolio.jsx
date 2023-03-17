import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Image from "next/image";
import ModalMain from "./modal/ModalMain";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);
  const [modalData, setModalData] = useState({});

  const handleModal = (id, item) => {
    setModalId(id);
    setModalData(item);
    setGetModal(true);
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>ALL</Tab>
            <Tab>WEBSITE</Tab>
            <Tab>APPLICATION</Tab>
          </TabList>

          <div className="container">
            {/* normal */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map((item) => {
                  const { id, type, image, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id, item)}
                      >
                        <Image src={image} style={{
                          objectFit: "contain",
                        }} alt="portfolio project demo" />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            {/* website */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("website")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => {
                            handleModal(id, item)
                          }}
                        >
                          <Image src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

            {/* application */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("application")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    console.log(item);
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => {
                            handleModal(id, item)
                          }}
                        >
                          <Image src={image} style={{
                            objectFit: "contain",
                          }} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

          </div>
        </Tabs>
      </div>
      {getModal && <ModalMain modalId={modalId} setGetModal={setGetModal} modalData={modalData} />}{" "}
    </>
  );
};

export default Portfolio;
