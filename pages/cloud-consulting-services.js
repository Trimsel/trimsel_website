import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import CarouselComponent from "../components/carouselComponent";
import ClientLogo from "../components/clientLogo";
import Header from "../components/header";
import Footer from "../components/footer";
import Stack from "react-bootstrap/Stack";
import { CgCheckO } from "@react-icons/all-files/cg/CgCheckO";
import ContactForm from "../components/ContactForm";
import ContactModal from "../components/ContactModal";

export default function CloudConsulting() {
  return (
    <>
      <Head>
        <title>Cloud Consulting Services </title>
        <meta
          name="description"
          content="Best Cloud Consulting Company in India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-min.ico" />
      </Head>
      <section className="cloud-hero">
        <Header />
        <section className="hero-dev">
          <div className="container pt-3">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="title">
                  <div className="title-inner">
                    <div className="cafe">
                      <div className="whiteLink">
                        <p className="breadcrumbs-kar">
                          <Link href="/">Home</Link> <span> &#x2027; </span>{" "}
                          <Link href="#">Services</Link> <span> &#x2027; </span>{" "}
                          Cloud Consulting Services
                        </p>
                      </div>
                    </div>
                    <div className="cafe">
                      <div className="cafe-inner news-title">
                        Cloud Consulting and Implementation
                      </div>
                    </div>
                    <div className="mozart">
                      <div className="mozart-inner">
                        <p className="cloud-para">
                          Harness the power of the cloud for lower operational
                          costs, ultimate scalability and unparalleled
                          performance with our all-inclusive cloud computing
                          consulting and implementation services.
                        </p>
                      </div>
                    </div>
                    <div className="mozarts">
                      <div className="mozarts-inner">
                        <button className="btn btn-primary dev-btn">
                          Contact Our Expert{" "}
                          <img
                            src="/images/material-symbols_arrow-right-alt.png"
                            alt="arrow-icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="imgrs">
                  <Image
                    src="/images/cloud-hero.png"
                    className="cloud-hero-image"
                    alt="Cloud Development Hero Image"
                    width={500}
                    height={356}
                    priority
                    quality={100}
                  />
                  <Image
                    src="/images/cloud-result.png"
                    className="cloud-Result-Image"
                    alt="Cloud Result Matters"
                    width={350}
                    height={350}
                    priority
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="cloud-about">
        <div className="container cloud-abt-container">
          <Stack direction="horizontal" className="pb-4">
            <div className=" badge-abot-btn">
              <img
                src="/images/Rectangle-kariot.png"
                className="me-2"
                alt="design-dot"
              />
              <p> WHAT WE DO </p>
            </div>
          </Stack>
          <h2 className="abt-title">
            All-Inclusive Cloud Computing Consulting And Implementation Services
          </h2>
          <p className="cld-abt-para">
            We embrace an end-to-end approach — from thinking over the strategic
            aspects of cloud adoption and migration to cloud, security
            consulting and cloud infrastructure management. Our team of cloud
            consultants, business analysts, developers, and DevOps engineers
            will ensure that your cloud environment is efficient, safe, and
            high-performing.
          </p>
          <div className="row">
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="hm-customize-card h-100">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/cloud-mig.png"
                    width={80}
                    height={80}
                    className="do-icon pb-3"
                    alt="Cloud Migration icon"
                  />
                  <h3 className="qs-card-heading">
                    Cloud Adoption and Migration
                  </h3>
                  <p className="qsd-para">
                    Our vetted cloud solutions consultants dive in your tech
                    infrastructure and study your needs to help you adopt the
                    best-fit cloud migration strategy. We re-platform and
                    modernize your apps and put APIs in place.
                  </p>
                  <Link href="#" passHref>
                    <Image
                      src="/images/Group2495.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="hm-customize-card h-100">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/cloud-optim.png"
                    width={80}
                    height={80}
                    className="do-icon pb-3"
                    alt="Cloud Optimization icon"
                  />
                  <h3 className="qs-card-heading"> Cloud Optimization </h3>
                  <p className="qsd-para">
                    Our vetted cloud solutions consultants dive in your tech
                    infrastructure and study your needs to help you adopt the
                    best-fit cloud migration strategy. We re-platform and
                    modernize your apps and put APIs in place.
                  </p>
                  <Link href="/web-development" passHref>
                    <Image
                      src="/images/Group2495.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="hm-customize-card h-100">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/cloud-infra.png"
                    width={80}
                    height={80}
                    className="do-icon pb-3"
                    alt="Cloud Infrastructure icon"
                  />
                  <h3 className="qs-card-heading">
                    Cloud Infrastructure Management{" "}
                  </h3>
                  <p className="qsd-para">
                    Our vetted cloud solutions consultants dive in your tech
                    infrastructure and study your needs to help you adopt the
                    best-fit cloud migration strategy. We re-platform and
                    modernize your apps and put APIs in place.
                  </p>
                  <Link href="/cloud-consulting-services" passHref>
                    <Image
                      src="/images/Group2495.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="hm-customize-card h-100">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/cloud-app.png"
                    width={80}
                    height={80}
                    className="do-icon pb-3"
                    alt="Cloud Application Development Icon"
                  />
                  <h3 className="qs-card-heading">
                    Cloud Application Development{" "}
                  </h3>
                  <p className="qsd-para">
                    Our vetted cloud solutions consultants dive in your tech
                    infrastructure and study your needs to help you adopt the
                    best-fit cloud migration strategy. We re-platform and
                    modernize your apps and put APIs in place.
                  </p>
                  <Link href="#" passHref>
                    <Image
                      src="/images/Group2495.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="hm-customize-card h-100">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/cloud-arch.png"
                    width={80}
                    height={80}
                    className="do-icon pb-3"
                    alt="Cloud Architecture icon"
                  />
                  <h3 className="qs-card-heading">
                    {" "}
                    Cloud Infrastructure Architecture{" "}
                  </h3>
                  <p className="qsd-para">
                    Our vetted cloud solutions consultants dive in your tech
                    infrastructure and study your needs to help you adopt the
                    best-fit cloud migration strategy. We re-platform and
                    modernize your apps and put APIs in place.
                  </p>
                  <Link href="#" passHref>
                    <Image
                      src="/images/Group2495.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 pt-3">
              <Card className="hm-customize-card h-100">
                <Card.Body style={{ paddingRight: "0px", paddingLeft: "0px" }}>
                  <Image
                    src="/images/cloud-roi.png"
                    width={74}
                    height={72}
                    className="do-icon pb-3"
                    alt="Quality engineering and testing icon"
                  />
                  <h3 className="asd-card-heading"> Cloud ROI Assessment </h3>
                  <p className="qsd-para">
                    Our vetted cloud solutions consultants dive in your tech
                    infrastructure and study your needs to help you adopt the
                    best-fit cloud migration strategy. We re-platform and
                    modernize your apps and put APIs in place.
                  </p>
                  <Link href="/quality-engineering-testing" passHref>
                    <Image
                      src="/images/Group2495.png"
                      width={56}
                      height={56}
                      className="do-btn-icon"
                      alt="button-icon"
                    />
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="cloud-native">
        <div className="container native-container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h3 className="native-heading">
                Expert Consulting On Cloud-Native And Cloud Agnostic Solution
              </h3>
              <p className="native-para">
                We consult on and build IaaS, PaaS, and SaaS solutions to let
                you capture the cloud value with the most fitting
                implementation. To balance technology, risks, and costs, while
                keeping your business goals in focus, our cloud computing
                consultants orchestrate multiple deployment models.
              </p>
              <Image
                src="/images/talkimg.png"
                width={284}
                height={286}
                className="talk-new-img"
                alt="Let's Talk Image"
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                src="/images/cloudnewgroup.png"
                width={600}
                className="cloud-gtoup"
              />
            </div>
          </div>
          <div className="new-cloud-row">
            <h4 className="new-cloud-text">
              <CgCheckO className="check-svg" /> Private Cloud :
            </h4>
            <p className="new-cloud-para">
              Securely govern sensitive data, keep your operations under
              control, and enjoy wider opportunities for customization
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-6 pb-4">
                <h4 className="new-cloud-text">
                  <CgCheckO className="check-svg" /> Public :
                </h4>
                <p className="new-clouds-para">
                  Providing easily accessible cloud computing consulting and
                  implementation services and launching scalable solutions
                  without infrastructure provisioning and maintenance headaches
                </p>
              </div>
              <div className="col-lg-6 col-md-6 pb-4">
                <h4 className="new-cloud-text">
                  <CgCheckO className="check-svg" /> Multicloud :
                </h4>
                <p className="new-clouds-para">
                  Avoid vendor lock-in and take advantage of best-of-breed cloud
                  solutions to expand your service portfolio and business reach
                </p>
              </div>
              <div className="col-lg-6 col-md-6 pb-4">
                <h4 className="new-cloud-text">
                  <CgCheckO className="check-svg" /> Hybrid :
                </h4>
                <p className="new-clouds-para">
                  Achieve great agility and reliability in handling data and
                  resources, balancing the advantages of on- and off-premises
                  deployment
                </p>
              </div>
              <div className="col-lg-6 col-md-6 pb-4">
                <h4 className="new-cloud-text">
                  <CgCheckO className="check-svg" /> Distributed Cloud
                </h4>
                <p className="new-clouds-para">
                  Target location-dependent use cases, eliminate latency issues,
                  and massively reduce the risk of downtime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cloud-aspect">
        <div className="container aspect-container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <h3 className="aspect-heading">
                Every Aspect Of Cloud Adoption, Taken Care Of
              </h3>
            </div>
            <div className="col-lg-4 col-md-6">
              <Button href="/contact-us" className="gif-button mt-3">
                <img
                  src="/images/slightly-smiling-face.gif"
                  alt="Smiling Face GIF Image"
                  className="new-smile"
                />
                <h6 className="smile-heading">
                  <p className=" smile-para"> Talk to a </p>
                  Cloud Expert{" "}
                  <img src="/images/gifbtniconarrow.png" alt="arrow-icon" />
                </h6>
              </Button>
            </div>
          </div>
          <p className="aspect-para pt-3">
            From analyzing your business needs and providing cloud strategy
            consulting all the way to employee training, we dedicate to
            proactively delivering quality service throughout cooperation. Our
            business analysts work hand in hand with solution architects to make
            your cloud adoption and usage journey as smooth as possible.
          </p>
          <div className="row" style={{ marginTop: "25px" }}>
            <div className="col-lg-4 col-md-6">
              <Card className="aspects-card mb-3">
                <h4 className="aspect-card-heading">
                  IT Infrastructure Assessment
                </h4>

                <p className="aspect-card-para">
                  Our cloud computing consultants get a grip on your critical
                  infrastructure, application dependencies, estimated costs, and
                  business objectives to lay out cloud use cases.
                </p>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6">
              <Card className="aspect-card mb-3">
                <h4 className="aspect-card-heading">Planning</h4>

                <p className="aspect-card-para">
                  Our solution architects and engineers design a future-proof,
                  secure, and compliant cloud architecture, choose an optimal
                  tech stack, and come up with a detailed cloud adoption plan.
                </p>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6">
              <Card className="aspect-card mb-3">
                <h4 className="aspect-card-heading">
                  Development & Deployment
                </h4>

                <p className="aspect-card-para">
                  We oversee cloud deployment or, if needed, implement your
                  cloud infrastructure, setting up best practices to speed up
                  and even automate the development process
                </p>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6">
              <Card className="aspect-card mb-3">
                <h4 className="aspect-card-heading">Optimization</h4>

                <p className="aspect-card-para">
                  If you already have a cloud environment in place and seek to
                  optimize resource consumption, improve compliance or cut
                  operating costs, we can do that for you, providing cloud
                  consulting and optimization
                </p>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6">
              <Card className="aspect-card mb-3">
                <h4 className="aspect-card-heading">Ongoing Support</h4>
                <p className="aspect-card-para">
                  We will track and optimize cloud resource usage and spend,
                  extend your cloud services provide employee trainings to keep
                  your cloud workflows swift, secure, and aligned with your
                  business processes
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="cloud-value">
        <div className="container value-container">
          <Stack direction="horizontal" className="pb-4">
            <div className=" badge-abot-btn">
              <img
                src="/images/Rectangle-kariot.png"
                className="me-2"
                alt="design-dot"
              />
              <p> OUR VALUE PROPOSITION </p>
            </div>
          </Stack>
          <h2 className="value-heading pt-3">
            Cloud Computing Consulting With Minitzon :
          </h2>
          <p className="value-para">
            Our mission as a cloud consulting firm is to help you undergo
            digital transformation with reasonable effort and little to no risk.
            Our cloud consulting services are dedicated to making your cloud
            infrastructure drive tangible business value, not costs.
          </p>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <Card className="value-card">
                <h3 className="val-card-heading">Scalability From Day One</h3>
                <p className="val-card-para">
                  A cloud infrastructure that will scale flexibly along with
                  your business for unstoppable growth
                </p>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6">
              <Card className="value-card">
                <h3 className="val-card-heading1">Built-In Security</h3>
                <p className="val-card-para">
                  Advanced security tools and best practices of cloud security
                  consulting for utmost data protection
                </p>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6">
              <Card className="value-card">
                <h3 className="val-card-heading2">
                  Compliance With Industry-Specific Standards
                </h3>
                <p className="val-card-para">
                  Comprehensive compliance controls for HIPAA, PCI-DSS, GDPR,
                  and other standards
                </p>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6">
              <Card className="value-card">
                <h3 className="val-card-heading3">Room For Innovation</h3>
                <p className="val-card-para">
                  A perfect environment for deploying AI, ML, IoT, and other
                  next-gen solutions
                </p>
              </Card>
            </div>
          </div>
          <button className="btn btn-primary dev-btn">
            Discuss My Cloud Strategy{" "}
            <img
              src="/images/material-symbols_arrow-right-alt.png"
              alt="arrow-icon"
            />
          </button>
        </div>
      </section>

      <section id="support">
        <div className="container support-container">
          <div className="row">
            <div className="col-lg-6 col-md-6 ">
              <h3 className="support-heading">
                Our Cloud <br /> Supporting Tools
              </h3>
            </div>
            <div className="col-lg-6 col-md-6 support-col">
              <div className="image-container">
                <Image
                  src="/images/awscloud-min.png"
                  width={100}
                  height={139}
                  alt="AWS Cloud Supporting Tool Image"
                  className="support-aws"
                />
                <Image
                  src="/images/googlecloud-min.png"
                  width={100}
                  height={139}
                  alt="Google Cloud Supporting Tool Image"
                  className="support-aws"
                />
                <Image
                  src="/images/azurecloud-min.png"
                  width={100}
                  height={139}
                  alt="Azure Cloud Supporting Tool Image"
                  className="support-aws"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cloud-choose">
        <div className="container dev-ser-container">
          <h3 className="dev-ser-header">Why work with Minitzon?</h3>
          <p className="dev-ser-para">
            Clients choose us because of our ability to improve business
            agility, increase efficiency, and reduce costs. We are
            differentiated by our:
          </p>

          <Tab.Container id="new-tabs" defaultActiveKey="complex">
            <Card className="cloud-card mt-5">
              <Nav variant="pills" className="new-nav">
                <Nav.Item className="ser-nav-item">
                  <Nav.Link eventKey="complex"> Vendor Agnostic </Nav.Link>
                </Nav.Item>
                <Nav.Item className="ser-nav-item">
                  <Nav.Link eventKey="skilled">
                    Skilled & Talented Engineers
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="ser-nav-item">
                  <Nav.Link eventKey="diverse">Diverse Expertise</Nav.Link>
                </Nav.Item>
                <Nav.Item className="ser-nav-item">
                  <Nav.Link eventKey="track">Proven Track Record </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
            <Tab.Content className="py-5">
              <Tab.Pane eventKey="complex">
                <Row>
                  <Col lg={8} md={8}>
                    <p className="dev-ser-para">
                      We have years of experience in helping organizations
                      streamline the release cycles of different applications,
                      from legacy to agile and beyond. Our experts ensure that
                      the best CI/CD practices are implemented for greater
                      quality and easily maintainable code, and faster product
                      release time to market.
                    </p>
                  </Col>
                  <Col lg={4} md={4}>
                    <img
                      src="/images/prjdel.png"
                      className="service-img-detail"
                      alt="project delivered icon"
                    />
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="skilled">
                <Row>
                  <Col lg={8} md={8}>
                    <p className="dev-ser-para">
                      We have years of experience in helping organizations
                      streamline the release cycles of different applications,
                      from legacy to agile and beyond. Our experts ensure that
                      the best CI/CD practices are implemented for greater
                      quality and easily maintainable code, and faster product
                      release time to market.
                    </p>
                  </Col>
                  <Col lg={4} md={4}>
                    <img
                      src="/images/prjdel.png"
                      className="service-img-detail"
                      alt="project-deliver-image"
                    />
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="diverse">
                <Row>
                  <Col lg={8} md={8}>
                    <p className="dev-ser-para">
                      We have years of experience in helping organizations
                      streamline the release cycles of different applications,
                      from legacy to agile and beyond. Our experts ensure that
                      the best CI/CD practices are implemented for greater
                      quality and easily maintainable code, and faster product
                      release time to market.
                    </p>
                  </Col>
                  <Col lg={4} md={4}>
                    <img
                      src="/images/prjdel.png"
                      className="service-img-detail"
                      alt="project-deliver-image"
                    />
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="track">
                <Row>
                  <Col lg={8} md={8}>
                    <p className="dev-ser-para">
                      We have years of experience in helping organizations
                      streamline the release cycles of different applications,
                      from legacy to agile and beyond. Our experts ensure that
                      the best CI/CD practices are implemented for greater
                      quality and easily maintainable code, and faster product
                      release time to market.
                    </p>
                  </Col>
                  <Col lg={4} md={4}>
                    <img
                      src="/images/prjdel.png"
                      className="service-img-detail"
                      alt="project-deliver-image"
                    />
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>

      <section className="cloud-sec-cta">
        <div className="container">
          <Card className="cloud-cta my-5">
            <Card.Body>
              <div className="row">
                <div className="col-lg-7 col-md-12 col-12">
                  <Stack direction="horizontal" className="pb-4">
                    <div className=" badge-abot-btn">
                      <img
                        src="/images/Rectangle-kariot.png"
                        className="me-2"
                        alt="design-dot"
                      />
                      <p> GET INTO TOUCH </p>
                    </div>
                  </Stack>
                  <h2 className="cldcta-heading pt-2">
                    You want to improve your business processes using the cloud,
                    but you’re not sure how to handle it right?
                  </h2>
                  <button className="btn btn-primary dev-btn mt-3">
                    Contact Us{" "}
                    <img
                      src="/images/material-symbols_arrow-right-alt.png"
                      alt="arrow-icon"
                    />
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section className="devops-tools">
        <div className="container devtool-container">
          <Row>
            <Col lg={6} md={6}>
              <h3 className="tools-heading">
                Cloud Tools <br /> And Platforms We Use
              </h3>
            </Col>
            <Col lg={6} md={6}>
              <p className="tools-para">
                The key to success for a successful DevOps transformation is
                scaling your systems and digital business vulnerability. We are
                DevOps tools and platforms Use for successful DevOps
                implementation:
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col lg={6} md={6} className="pt-5">
              <h5 className="tool-cat-heading pb-2">Cloud Platforms</h5>
              <div className="tools-img-container pb-5">
                <img
                  src="/images/coud-tools/aws.png"
                  className=" mbl-tools pb-3"
                  alt="aws-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/googlecloud.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="google-cloud-tools-image"
                />
                <img
                  src="/images/coud-tools/azure.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="azure-cloud-tools-image"
                />
              </div>

              <h5 className="tool-cat-heading pb-2">
                Configuration Management
              </h5>
              <div className="tools-img-container pb-5">
                <img
                  src="/images/coud-tools/puppet.png"
                  className=" mbl-tools pb-3"
                  alt="puppet-cloud-tools-images"
                />
                <img
                  src="/images/coud-tools/terraform.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="terraform-cloud-tools-image"
                />
                <img
                  src="/images/coud-tools/ansible.png"
                  className=" mbl-tools pd-right pb-3 ps-1"
                  alt="ansible-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/cfengine.png"
                  className=" mbl-tools pb-3"
                  alt="cfengine-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/chef.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="chef-cloud-tool-image"
                />
              </div>

              <h5 className="tool-cat-heading pb-2">Performance & Security</h5>
              <div className="tools-img-container">
                <img
                  src="/images/coud-tools/owasp.png"
                  className=" mbl-tools pb-3"
                  alt="owasp-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/locust.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="locust-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/jmeter.png"
                  className=" mbl-tools pd-right pb-3 ps-1"
                  alt="jmeter-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/sonar.png"
                  className=" mbl-tools pb-3"
                  alt="sonarcube-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/blaze.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="blaze-cloud-tool-image"
                />
              </div>
            </Col>
            <Col lg={6} md={6} className="pt-5">
              <h5 className="tool-cat-heading pb-2">
                Microservices & Architecture Management
              </h5>
              <div className="tools-img-container pb-5">
                <img
                  src="/images/coud-tools/aws.png"
                  className=" mbl-tools pb-3"
                  alt="aws-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/googlecloud.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="googlecloud-tool-image"
                />
                <img
                  src="/images/coud-tools/azure.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="azure-cloud-tool"
                />
              </div>

              <h5 className="tool-cat-heading pb-2">Build Automation</h5>
              <div className="tools-img-container pb-5">
                <img
                  src="/images/coud-tools/puppet.png"
                  className=" mbl-tools pb-3"
                  alt="puppet-cloud-tool"
                />
                <img
                  src="/images/coud-tools/terraform.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="terraform-cloud-tool"
                />
                <img
                  src="/images/coud-tools/ansible.png"
                  className=" mbl-tools pd-right pb-3 ps-1"
                  alt="ansible-cloud-tool"
                />
                <img
                  src="/images/coud-tools/cfengine.png"
                  className=" mbl-tools pb-3"
                  alt="cfengine-cloud-tool"
                />
                <img
                  src="/images/coud-tools/chef.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="chef-cloud-tool-image"
                />
              </div>

              <h5 className="tool-cat-heading pb-2">Alerting & Monitoring</h5>
              <div className="tools-img-container">
                <img
                  src="/images/coud-tools/owasp.png"
                  className=" mbl-tools pb-3"
                  alt="owasp-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/locust.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="locust-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/jmeter.png"
                  className=" mbl-tools pd-right pb-3 ps-1"
                  alt="jmeter-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/sonar.png"
                  className=" mbl-tools pb-3"
                  alt="sonarcube-cloud-tool-image"
                />
                <img
                  src="/images/coud-tools/blaze.png"
                  className=" mbl-tools pb-3 ps-1"
                  alt="blaze-cloud-tool-image"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section id="recent-cld-work">
        <div className="container new-ds">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <h2 className="case-heading">CASE STUDIES</h2>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="casecarousel-para">
                In 6 years we have completed more than 200 individual projects
                to develop modern websites, web and mobile applications for
                clients from all over the world.
              </p>
            </div>
            <div className="col-lg-3 col-md-3">
              <button className="about-btn">
                View All Cases{" "}
                <img
                  src="/images/material-symbols_arrow-right-alt.png"
                  alt="right-arrow-icon"
                />
              </button>
            </div>
          </div>
          <CarouselComponent />
        </div>
      </section>

      <section id="client" className="client-section">
        <div className="container mt-5">
          <Stack direction="horizontal">
            <div className=" badge-abot-btn">
              <img
                src="/images/Rectangle-kariot.png"
                className="me-2"
                alt="design-dot"
              />
              <p> OUR CLIENTS </p>
            </div>
          </Stack>
          <div className="row pt-3">
            <div className="col-lg-6 col-md-6">
              <h2 className="client-title">We're A Trusted Growth Partner</h2>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="cliented-text">
                At Minitzon, there is continuous learning that happens as we
                work on various projects. We also love to update and upgrade
                with the latest innovations in the field of technology and apps.
              </p>
            </div>
          </div>
          <ClientLogo />
        </div>
      </section>

      <ContactForm />

      <section id="blog" className="py-5">
        <div className="container blog-container">
          <div className="row py-3">
            <Stack direction="horizontal">
              <div className=" badge-abot-btn">
                <img
                  src="/images/Rectangle-kariot.png"
                  className="me-2"
                  alt="design-dot"
                />
                <p>
                  {" "}
                  <b> OUR BLOGS </b>{" "}
                </p>
              </div>
            </Stack>
            <div className="col-lg-5 col-md-5 py-4">
              <h2 className="contacts-heading">
                Read Our Latest Blogs and News
              </h2>
            </div>
            <div className="col-lg-7 col-md-7 py-4">
              <p className="blog-para">
                At Minitzon, there is continuous learning that happens as we
                work on various projects. We also love to update and upgrade
                with the latest innovations in the field of technology and apps.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="card blog-card">
                <div className="row no-gutters">
                  <div className="col-lg-5 col-md-5 py-3">
                    <img
                      className="card-img"
                      src="/images/blog-img.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-7 col-md-7">
                    <Button className="card-badge mb-2"><strong>Development</strong></Button>
                    <h5 className="blog-card-title">
                      Top 10 Mobile App Development Frameworks in 2023
                    </h5>
                    <p className="blog-card-para">
                      We've entered on age where our lives are...{" "}
                      <Link href="#">Read More</Link>
                    </p>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-lg-5 col-md-5 py-3">
                    <img
                      className="card-img"
                      src="/images/blogs-img.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-7 col-md-7 py-3">
                    <Button className="card-badge mb-2"> <strong> Development </strong></Button>
                    <h5 className="blog-card-title">
                      Top 10 Mobile App Development Frameworks in 2023
                    </h5>
                    <p className="blog-card-para">
                      We've entered on age where our lives are...{" "}
                      <Link href="#">Read More</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card blog-card">
                <div className="card-image">
                  <img className="blog-image" src="/images/blog-image.png" />
                </div>
                <div className="card-content">
                  <Button className="card-badge my-2"> <strong> Development </strong> </Button>
                  <h5 className="blogs-card-title">
                    How hybrid app development can help you build custom apps
                  </h5>
                  <p className="blog-card-para">
                    Digitization has taken over every industry and business
                    aspect. The pandemic only fuelled our shift tower...
                    <Link href="#">Read More</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal title="Need A Dedicated Cloud Partner? Contact Us"/>
      <Footer />
    </>
  );
}
