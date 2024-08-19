import { Chip } from "@mui/material";
import classes from "./jobTitle.module.css";
import moment from "moment";
import { useTranslation } from "react-i18next";
export default function JobTitle({ title, posted_at }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className={classes.jobTitle}>
        <h1>{title}</h1>
        <Chip label="Full Time" variant="outlined" />
      </div>
      <div>
        <p>
          {t("posted_on")} : {moment(posted_at).format("YYYY-MM-DD hh:mm:ss")}
        </p>
      </div>
    </div>
  );
}
