import { Button, Chip } from "@mui/material";
import classes from "./jobDescription.module.css";
import { useTranslation } from "react-i18next";
export default function JobDescription() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="job-description">
        <h2>{t("description")}</h2>
        <p>
          <strong>Position Overview:</strong> The Content Writer will be
          responsible for producing high-quality written content for various
          marketing channels, including websites, blogs, social media, email
          campaigns, and more. This role requires a passion for storytelling, a
          knack for research, and the ability to adapt content to different
          platforms and target audiences.
        </p>
      </section>
      <section className="job-responsibilities">
        <h2>{t("Key_Responsibilities")}:</h2>
        <ul>
          <li>
            <strong>Content Creation:</strong> Develop clear, concise, and
            engaging content that aligns with our brand voice and objectives.
          </li>
          <li>
            <strong>Content Strategy:</strong> Collaborate with the marketing
            team to create content strategies that support marketing campaigns
            and initiatives.
          </li>
          <li>
            <strong>Research:</strong> Conduct research to gather information
            and data for content topics, ensuring accuracy and credibility.
          </li>
          <li>
            <strong>SEO Optimization:</strong> Optimize content for search
            engines (SEO) to improve organic visibility and website traffic.
          </li>
          <li>
            <strong>Editing and Proofreading:</strong> Review and edit content
            to ensure it is error-free, well-structured, and aligned with our
            brand guidelines.
          </li>
          <li>
            <strong>Content Calendar:</strong> Contribute to the development and
            maintenance of a content calendar to ensure consistent and timely
            content delivery.
          </li>
          <li>
            <strong>Audience Engagement:</strong> Monitor engagement metrics and
            use feedback to refine content and improve its effectiveness.
          </li>
          <li>
            <strong>Content Distribution:</strong> Assist in the distribution of
            content across various platforms, including social media and email
            marketing.
          </li>
          <li>
            <strong>Stay Current:</strong> Stay up-to-date with industry trends
            and best practices in content marketing and digital communication.
          </li>
        </ul>
      </section>
      <section className={classes["jobSummary"]}>
        <h2>{t("Summary")}:</h2>
        <ul>
          <li>
            <strong>Salary range:</strong> 4,00 - 5,00
          </li>
          <li>
            <strong>Languages Required:</strong> EN - Fluent or Bilingual
            Proficiency
          </li>
          <li>
            <strong>Experience Required:</strong> 1 year minimum
          </li>
          <li>
            <strong>Major:</strong> English Language and Literature
          </li>
          <li>
            <strong>Career Level:</strong> Junior
          </li>
          <li>
            <strong>Minimum GPA:</strong> 3.0
          </li>
        </ul>
      </section>

      <section className={classes["job-skills"]}>
        <h3>{t("Required_Skills")}</h3>
        <ul>
          <Chip label="SEO Optimization" variant="outlined" />
          <Chip label="Content Creation" variant="outlined" />
          <Chip label="Creative Writing" variant="outlined" />
          <Chip label="Social Media" variant="outlined" />
        </ul>
      </section>
      <section className={classes.buttonContainer}>
        <Button variant="contained">{t("Apply")}</Button>
      </section>
    </>
  );
}
