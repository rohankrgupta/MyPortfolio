import Sage from "../../assets/SageV2.png";
import Repeat from "../../assets/repeat.png";
import azn from "../../assets/azn.png";
import spn from "../../assets/spn.png";
import RobustAsianPricer from "../../assets/RobustAsianPricer.svg";
import VarianceRiskPremium from "../../assets/VarianceRiskPremium.svg";
import Project from "../components/Project";

const Projects = () => {
  return (
    <>
      <Project
        imageSrc={RobustAsianPricer}
        imageAlt="RobustAsianPricer"
        projectName="RobustAsianPricer"
        projectDescription="High-performance C++ Monte Carlo pricer for Asian options with OpenMP + SIMD and NUMA-aware thread-local RNG streams; 2× CPU speedup, 3× multi-core scaling, and +19% throughput."
        projectLink="https://github.com/rohankrgupta/RobustAsianOptionPricer"
      />
      <Project
        imageSrc={VarianceRiskPremium}
        imageAlt="VarianceRiskPremium"
        projectName="Variance Risk Premium"
        projectDescription="Python research pipeline on 15 years of SPX/VIX data with a z-score signal and VIX-regime filter; backtested through 2018 Volmageddon and 2020 COVID shocks."
        projectLink="https://github.com/rohankrgupta/Variance-Risk-Premium"
      />
      <Project
        imageSrc={spn}
        imageAlt="Personalized E-commerce Recommendation"
        projectName="Personalized E-commerce Recommendation"
        projectDescription="A retrieval-based recommendation system with two-tower architecture."
        projectLink="https://github.com/rohankrgupta/personalized_ecommerce_recommendation"
      />
      <Project
        imageSrc={azn}
        imageAlt="Review Rating Prediction"
        projectName="Review Rating Prediction"
        projectDescription="Modified neural matrix factorization model for Amazon products combining item metadata, review texts, and user-item interactions."
        projectLink="https://github.com/rohankrgupta/Review_rating_prediction"
      />
      <Project
        imageSrc={Sage}
        imageAlt="Text-2-SQL Generator"
        projectName="Text-2-SQL Generator"
        projectDescription="Fine-tuned bart-base on the GretelAI dataset to translate natural language questions into executable SQL queries."
        projectLink="https://github.com/rohankrgupta/Text-To-SQL-Generator"
      />
      <Project
        imageSrc={Repeat}
        imageAlt="Repeat Purchase Prediction"
        projectName="Repeat Purchase Prediction"
        projectDescription="An XGBoost classifier based model to estimate the likelihood of a customer making a repeat purchase."
        projectLink="https://github.com/rohankrgupta/repeat_purchase_prediction"
      />
    </>
  );
};

export default Projects;
