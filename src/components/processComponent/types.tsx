/* --------------------------------- Assets --------------------------------- */
import ICONS from "../../assets/icons/icons";
/* ------------------------------ Basic Import ------------------------------ */
import { ReactElement } from "react";

export interface IProcessList {
  title: string;
  svg: ReactElement;
  description: string;
}

export const ProcessListFirst: Array<IProcessList> = [
  {
    title: "1. Strategy",
    description:
      "When we start getting acquainted with a client, we dive into all the details of the product we will build together. It helps us make sure that everything we develop is feasible and create a prioritized roadmap of outcome-based goals that contribute to a product vision. Our team is experienced in creating products from scratch.",
    svg: <ICONS.strategy />,
  },
  {
    title: "2. Discovery",
    description:
      " SOME TEXT ABOUT DISCOVERY we develop is feasible and create a prioritized roadmap of outcome-based goals that contribute to a product vision. Our team is experienced in creating products from scratch.",
    svg: <ICONS.discovery />,
  },
  {
    title: "3. Delivery",
    description:
      "SOME TEXT ABOUT DISCOVERY dive into all the details of the product we will build together. It helps us make sure that everything we develop is feasible and create a prioritized roadmap of outcome-based goals that contribute to a product vision. Our team is experienced in creating products from scratch.",
    svg: <ICONS.delivery />,
  },
];

export const ProcessListSecond: Array<IProcessList> = [
  {
    title: "1. Selection",
    description:
      "After collecting all the requirements concerning the developers you need, we start to select candidates among those who are working with us. Then we interview developers who want to join Teonica. Our goal is to find best-suited employees for your team. After choosing the right people we send you their resumes.",
    svg: <ICONS.selection />,
  },
  {
    title: "2. Interview",
    description:
      " SOME TEXT ABOUT Interview After collecting all the requirements concerning the developers you need, we start to select candidates among those who are working with us. Then we interview developers who want to join Teonica. Our goal is to find best-suited employees for your team. After choosing the right people we send you their resumes.",
    svg: <ICONS.interview />,
  },
  {
    title: "3. Activity",
    description:
      "SOME TEXT ABOUT Activity After collecting all the requirements concerning the developers you need, we start to select candidates among those who are working with us. Then we interview developers who want to join Teonica. Our goal is to find best-suited employees for your team. After choosing the right people we send you their resumes.",
    svg: <ICONS.activity />,
  },
];
