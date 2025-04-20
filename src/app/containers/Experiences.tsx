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
        imageSrc={jpmorgan}
        imageAlt="jpmorgan 2022"
        description={["",
          "• Market Mix Modeling: Developed of a Hierarchical Bayesian Regression model to decode contribution of KPIs, ROI of sales drivers and provide insights for improving Organic Search Ranks on Amazon e-commerce.",
          "• Generative AI: Developed a POC on the application of Computer Vision in cosmetic surgeries using Generative Adversarial Network (GAN) with landmark detection for face reenactment and post-operative face estimation.",
          "• Time Series Forecasting: Developed time-series forecasting models utilizing ARIMA & VAR and integrated with a postgreSQL database to predict different components of P&L, which resulted in tax reduction.",
          "• Explainable AI: Developed, optimized, and deployed an Azure-based ML pipeline on surrogate models (SHAP/LIME) using Synapse- ML on Python and PySpark scripts to obtain an interpretable and visual explanation of black box models.",
          "• Clinical Trail Pipeline: Developed a POC of a clinical trial pipeline utilizing scispaCy to assess patient attributes for optimal patient selection and cluster formation. Created synthetic clinical data and used CNN for medical image analysis."
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
            "• Market Mix Modeling: Developed of a Hierarchical Bayesian Regression model to decode contribution of KPIs, ROI of sales drivers and provide insights for improving Organic Search Ranks on Amazon e-commerce.",
            "• Generative AI: Developed a POC on the application of Computer Vision in cosmetic surgeries using Generative Adversarial Network (GAN) with landmark detection for face reenactment and post-operative face estimation.",
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
          "• Market Mix Modeling: Developed of a Hierarchical Bayesian Regression model to decode contribution of KPIs, ROI of sales drivers and provide insights for improving Organic Search Ranks on Amazon e-commerce.",
          "• Generative AI: Developed a POC on the application of Computer Vision in cosmetic surgeries using Generative Adversarial Network (GAN) with landmark detection for face reenactment and post-operative face estimation.",
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
