import Experience from "../components/Experience";
import jpmorgan from "../../assets/JPMorgan.png";
import samsung from "../../assets/samsung.jpeg"
import VCE from "../../assets/VCE.png";
import CU from "../../assets/CU.png";
import TikTok from "../../assets/TikTokLogo.png";
import UWM from "../../assets/UWM.svg";

const Experiences = () => {
  return (
    <>
    {/*
      <Experience
        imageSrc={TikTok}
        imageAlt="TikTok"
        description={["ETA Models for TikTok Shop E-commerce Logistics",
          "• Implemented new features through statistical analysis of distributions, achieving a 30% reduction in prediction range and simultaneously lowering breach rates from 6% to 4.5%",
          "• Implemented two phase multi label classification model in Pytorch to predict delivery breaches: initial phase reduces feature space and do a point estimation, followed by a multi-head architecture to estimate errors around the estimate.",
          "• Developed a hierarchical multi label classification model in tensorflow, incorporating local and global loss."]}
        positionName="Machine Learning Engineer Intern"
        companyName="TikTok"
        location="Seattle, Washington, USA"
        backgroundColor="#F8F8FA"
        dateOfExperience="June 2024 - September 2024"
      />
      <Experience
        imageSrc={UWM}
        imageAlt="UC San Diego 2024"
        description={["Language Model for Mutation Prediction",
        "• Designed a Decoder-only Transformer model in Pytorch to predict the next mutations in SARS-CoV-2 genomic sequences, leveraging masked self-attention.",
        "• Conducted research on various weight initialization techniques (Xavier, Kaiming, normal) and activation functions to mitigate vanishing and exploding gradient issues in deep neural networks."]}
        positionName="Graduate Student Researcher"
        companyName="UWM"
        location="California, USA"
        backgroundColor="#FFFFFF"
        dateOfExperience="April 2024 - June 2024"
      />
      */}

       <Experience
        imageSrc={UWM}
        imageAlt="UWM"
        description={["CS 354",
        "• Guiding a class of 500+ students in C programming, memory management & assembly level concepts.",
        ]}
        positionName="Graduate Teaching Assistant"
        companyName="UWM"
        location="Wisconsin, USA"
        backgroundColor="#FFFFFF"
        dateOfExperience="August 2025 - Present"
      />
      
      <Experience
        imageSrc={jpmorgan}
        imageAlt="jpmorgan 2022"
        description={["",
          "• Generative AI: Prototyped a scalable internal chatbot assistant using Retrieval-Augmented Generation (RAG) with GPT-3.5 via AWS Bedrock API, handling over 30K queries during beta rollout.",
          "• RAG Pipeline: Developed a robust data preprocessing pipeline using Python and Apache Spark to scrape and structure internal wiki content, leveraging FAISS for fast vector-based retrieval in the RAG workflow.",
          "• Data Archival: Developed a large-scale data offloading strategy for production SQL database, reducing the active footprint by 35%, achieving a significant reduction in storage costs.",
          // "• Time Series Forecasting: Prototyped time-series forecasting models (ARIMA, VAR) integrated with MySQL to predict key mutual fund NAV components using historical benchmarks, maintaining forecast continuity and accuracy during data latency.",
          "• Cloud Computing: Automated the data archival process using a serverless AWS Lambda workflow to S3, enabling efficient, on-demand access to terabytes of archived JSON datasets.",
          "• Cloud Computing: Reduced infrastructure costs by 55% by deploying multiple Spring Boot applications on AWS using Docker, enabling seamless containerization and scalable cloud-native integration.",
        ]}
        positionName="Software Engineer"
        companyName="JPMorganChase"
        location="Bangalore, India"
        backgroundColor="#F8F8FA"
        dateOfExperience="June 2023 - Aug 2025"
      />

      <Experience
          imageSrc={jpmorgan}
          imageAlt="jpmorgan 2022"
          description={["",
            "• Frontend: Led the modernization of a key dashboard component by migrating the front-end to React JS and AG Grid with Cypress E2E test suite, enabling complex data interaction and reducing UI latency by 30%.",
            "• Cloud Computing: Implemented REST Endpoints to generate S3 presigned URL for secure client-side file transfers, reducing server load.",
          ]}
          positionName="Software Engineering Intern"
          companyName="JPMorganChase"
          location="Bangalore, India"
          backgroundColor="#FFFFFF"
          dateOfExperience="Feb 2023 - June 2023"
      />

       <Experience
        imageSrc={samsung}
        imageAlt="samsung 2022"
        description={["",
          "• Android Development: Developed a new library module for an android app using Kotlin Flow and Coroutines, streamlining asynchronous operations and reducing transaction complexity by 25%.",
          "• Pipeline Optimization: Optimized the CI/CD pipeline by implementing strategic build parallelization, leading to a 30% reduction in build time.",
        ]}
        positionName="Software Engineering Intern"
        companyName="Samsung Research"
        location="Bangalore, India"
        backgroundColor="#F8F8FA"
        dateOfExperience="June 2022 - September 2022"
        />

      {/* <Experience
        imageSrc={VCE}
        imageAlt="Vardhan Consulting Engineers"
        description={[
          "Techno-commercial Analysis of Electric Vehicles (EVs)",
          "• Completed a thorough technical analysis of hybrid, plug-in and plug-in hybrid EVs.",
          "• Completed a detailed case study on the empowerment of Electric rickshaws in India."
        ]}
        positionName="Research Intern"
        companyName="Vardhan Consulting Engineers"
        location="India"
        backgroundColor="#FFFFFF"
        dateOfExperience="April 2020 - May 2020"
      />
      <Experience
        imageSrc={CU}
        imageAlt="Calcutta University"
        description={["Switchgear and Power System Protection",
          "• The project was aimed to a state-of-the-art survey of theories and methods of protection and switchgear.",
          "• A protective scheme including CBs and protective relays was experimented with, for fast fault detection and isolation of the faulty section of the system."]}
        positionName="Research Intern"
        companyName="Calcutta University"
        location="Calcutta, India"
        backgroundColor="#F8F8FA"
        dateOfExperience="Nov 2019 - Dec 2019"
      />
      <Experience
        imageSrc={IITR}
        imageAlt="IIT Roorkee"
        description={["Detection of turn-by-turn Fault in Transformer by SFRA Method",
          "• The project was targeted to interpret SFRA algorithm for power transformer turn-to-turn fault identification.",
          "• Interfaced Octave and FEMM to derive a transformer equivalent ladder network from the mechanical description.",
          "• The network was simulated on MATLAB, Simulink and Ltspice and transfer functions are plotted as fingerprints.",
          "• Applied various statistical analyses to compare fingerprints of healthy and faulty transformers to identify the fault."]}
        positionName="Research Intern"
        companyName="Spark, IIT Roorkee"
        location="IIT Roorkee, India"
        backgroundColor="#FFFFFF"
        dateOfExperience="May 2019 - July 2019"
      /> */}
    </>
  );
};

export default Experiences;
