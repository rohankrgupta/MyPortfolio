import Leaps from "../../assets/LeapsLogo.png";
import Sage from "../../assets/SageV2.png";
import Joblicant from "../../assets/Joblicant.png";
import ChatPulse from "../../assets/ChatPulse.png";
import FAInitiative from "../../assets/FAInitiative.png";
import HoopsPredictor from "../../assets/HoopsPredictor.png";
import FAOutlets from "../../assets/FAOutlets.png";
import CycleScan from "../../assets/CycleScan.png";
import Repeat from "../../assets/repeat.png";
import Ship from "../../assets/ship.png";
import azn from "../../assets/azn.png";
import spn from "../../assets/spn.png";
import Project from "../components/Project";

const Projects = () => {
  return (
    <>
      <Project
        imageSrc={spn}
        imageAlt="Sage"
        projectName="Personalized E-commerce Recommendation"
        projectDescription="A retrieval based recommendation system with two tower architecture."
        projectLink="https://github.com/rohankrgupta/personalized_ecommerce_recommendation"
      />
      <Project
        imageSrc={azn}
        imageAlt="Sage"
        projectName="Review Rating prediction"
        projectDescription="Modified neural matrix factorization model for Amazon Products combining item metadata, review texts, and user-item interactions."
        projectLink="https://github.com/rohankrgupta/Review_rating_prediction"
      />
      <Project
        imageSrc={Sage}
        imageAlt="Sage"
        projectName="Multitask Learning BERT"
        projectDescription="A multitask model developed by fine-tuning pre-trained BERT on three downstream tasks."
        projectLink="https://github.com/rohankrgupta/Multi-task-Learning-BERT"
      />
      <Project
        imageSrc={HoopsPredictor}
        imageAlt="HoopsPredictor"
        projectName="Language Model From Scratch"
        projectDescription="Transformer based Text Classifier and Next word prediction model."
        projectLink="https://github.com/rohankrgupta/Language_Model"
      />

      <Project
        imageSrc={ChatPulse}
        imageAlt="ChatPulse"
        projectName="CUDA convolution Filter"
        projectDescription="Custom CUDA kernel for Image Filtering, integrated with PyTorch to incorporate GPU accelerated custom operation in deep learning workflow."
        projectLink="https://github.com/rohankrgupta/Convolution_Filter_CUDA"
      />
      <Project
        imageSrc={Leaps}
        imageAlt="Leaps"
        projectName="MultiAgent Reinforcement Learning"
        projectDescription="Q-learning based algorithm in CUDA for the mine game."
        projectLink="https://github.com/rohankrgupta/Multi_Agent_Reinforcement_Learning"
      />
      <Project
        imageSrc={FAInitiative}
        imageAlt="FAInitiative"
        projectName="Image Segmentation"
        projectDescription="Pattern classification model from scratch using Parametric Estimation and EM Algorithm."
        projectLink="https://github.com/rohankrgupta/Image-Segmentation"
      />
      <Project
        imageSrc={Joblicant}
        imageAlt="Joblicant"
        projectName="Kalman Filter"
        projectDescription="State Estimation with Linear, Unscented and Extended Kalman Filter from scratch."
        projectLink="https://github.com/rohankrgupta/Kalman-Filter"
      />
      <Project
        imageSrc={FAOutlets}
        imageAlt="FAOutlets"
        projectName="Optimization Algorithm Comparison"
        projectDescription="Detailed report on Gradient Descent Optimization Algorithms with supporting Python script."
        projectLink="https://github.com/rohankrgupta/Gradient-Descent-Optimization"
      />
      <Project
        imageSrc={Repeat}
        imageAlt="Repeat Purchase"
        projectName="Repeat Purchase Prediction"
        projectDescription="An XGBoost Classifier based model to estimate the likelihood of a customer making a repeat purchase."
        projectLink="https://github.com/rohankrgupta/repeat_purchase_prediction"
      />
      <Project
        imageSrc={CycleScan}
        imageAlt="CycleScan"
        projectName="Scene Classification"
        projectDescription="Ensemble model by leveraging transfer learning with CNNs for image classification."
        projectLink="https://github.com/rohankrgupta/scene_classification"
      />
      <Project
        imageSrc={Ship}
        imageAlt="Ship"
        projectName="Ship Detection CNN"
        projectDescription="An Xception CNN model on augmented images for image recognition"
        projectLink="https://github.com/rohankrgupta/ship_detection_CNN"
      />
    </>
  );
};

export default Projects;
