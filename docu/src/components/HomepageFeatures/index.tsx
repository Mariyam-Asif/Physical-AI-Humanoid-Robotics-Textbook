import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type ModuleCard = {
  weeks: string;
  title: string;
  focus: string;
  description: ReactNode;
  outcomes: string[];
};

const Modules: ModuleCard[] = [
  {
    weeks: "Weeks 3–5",
    title: "Module 1: The Robotic Nervous System (ROS 2)",
    focus: "Middleware for robot control.",
    description: (
      <>
        ROS 2 Nodes, Topics, Services, and Actions.  
        Bridging Python agents with <code>rclpy</code>.  
        URDF for robot modeling and visualization.
      </>
    ),
    outcomes: [
      "Explain the ROS 2 computation graph",
      "Create publishers, subscribers, and services",
      "Define robot structure using URDF and visualize in RViz2",
    ],
  },
  {
    weeks: "Weeks 6–7",
    title: "Module 2: The Digital Twin (Gazebo & Unity)",
    focus: "Create simulation environments for robotics.",
    description: (
      <>
        Build digital twins using Gazebo and Unity.  
        Simulate sensors, physics, and test algorithms before deployment.
      </>
    ),
    outcomes: [
      "Create Gazebo environments with physics + sensors",
      "Integrate Unity for photorealistic simulation",
      "Test navigation and perception algorithms in simulation",
    ],
  },
  {
    weeks: "Weeks 8–10",
    title: "Module 3: The AI-Robot Brain (NVIDIA Isaac™)",
    focus: "GPU-accelerated robotics, VSLAM, Nav2, autonomous behavior.",
    description: (
      <>
        Use Isaac Sim for synthetic data, VSLAM, and navigation.  
        Implement Nav2 for humanoid movement planning.
      </>
    ),
    outcomes: [
      "Configure NVIDIA Isaac Sim",
      "Implement Visual SLAM",
      "Deploy Nav2 for autonomous navigation",
    ],
  },
  {
    weeks: "Weeks 11–13",
    title: "Module 4: Vision-Language-Action (VLA)",
    focus: "LLMs + Robotics for natural human-robot interaction.",
    description: (
      <>
        Voice-to-Action with Whisper.  
        Cognitive LLM planning.  
        Capstone: Autonomous humanoid performing tasks.
      </>
    ),
    outcomes: [
      "Calculate humanoid kinematics",
      "Implement manipulation primitives",
      "Integrate conversational AI with robot action planning",
    ],
  },
];

function ModuleCardItem({ weeks, title, focus, description, outcomes }: ModuleCard) {
  return (
    <div className={clsx("col col--6 margin-bottom--lg")}>
      <div className="card shadow--md">
        <div className="card__header">
          <Heading as="h3">{weeks}</Heading>
          <h4>{title}</h4>
          <p style={{ fontStyle: "italic", marginTop: "0.3rem" }}>{focus}</p>
        </div>
        <div className="card__body">
          <p>{description}</p>
          <strong>Learning Outcomes:</strong>
          <ul>
            {outcomes.map((outcome, idx) => (
              <li key={idx}>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features} style={{ paddingTop: "2rem" }}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Course Modules
        </Heading>

        <div className="row">
          {Modules.map((props, idx) => (
            <ModuleCardItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
