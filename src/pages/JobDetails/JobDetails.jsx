import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import JobCard from "../../components/JobCard/JobCard";
import connector from "../../helpers/Handler";
import classes from "./jobDetails.module.css";
import JobTitle from "../../components/jobTitle/JobTitle";
import JobDescription from "../../components/JobDescription/JobDescription";
import Loading from "../../components/Loading/Loading";

const JobDetails = () => {
  const [jobsList, setJobsList] = useState(null);
  const [isLoading, setiIsLoading] = useState(true);
  const { state } = useLocation(); // *********i had to use this way because there is no api provided for geting the job details for a specific job **********
  //   console.log(state);
  const getJobList = (itemQuery) => {
    // get all jobs
    setiIsLoading(true);
    // using connecter to get the job list as it has already added the required headers
    connector
      .get("/jobs", {
        params: {
          language_profile_uuid: "ee5d991c-cdc6-4e83-b0b3-96f147208549",
          page: 1,
          limit: 8,
          itemQuery: itemQuery,
        },
      })
      .then((res) => {
        // store jobs list in state
        setJobsList(res.data.results);
        setiIsLoading(false);
      })
      .catch((err) => {
        alert(err);
        setiIsLoading(false);
      });
  };

  useEffect(() => {
    // call getJobList with itemQuery params to search based on title
    getJobList();
  }, []);

  return (
    <>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        job Description is filled with static data because there was no api
        provided for the job details
      </p>
      <div style={{ margin: "2rem 0" }} className={classes.mainContainer}>
        <div className={classes.detailsContainer}>
          <JobTitle title={state.job.title} posted_at={state.job.posted_at} />
          <JobDescription />
          {/* job Description is filled with static data because there was no api provided for the job details */}
        </div>
        <div className={classes.sideCardContainer}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {jobsList?.jobs?.map((job) => (
                <JobCard job={job} key={job.uuid} noButton={true} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default JobDetails;
