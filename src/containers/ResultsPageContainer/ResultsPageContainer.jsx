import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Grid } from "@mui/material";
import { motion } from "framer-motion";
import TitleComponent from "../../components/TitleComponent";
import NavButton from "../../components/NavButton";
import "./styles.css";

const ResultsPageContainer = ({ contract }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const submitContract = async () => {
    const response = await axios.post(
      config.SERVER_URL + "api/openai/readContract",
      {
        content: contract,
      }
    );
    let responseObj = extractAndParseJSON(
      response.data.choices[0].message.content
    );
    setResponse(responseObj);
    setIsLoading(false);
  };

  function extractAndParseJSON(inputString) {
    try {
      const jsonRegex = /{.*}|\[.*\]/s;
      const match = inputString.match(jsonRegex);

      if (match) {
        // Attempt to parse the matched JSON string
        const jsonObj = JSON.parse(match[0]);
        return jsonObj;
      } else {
        console.error("No JSON found in the input string.");
        return null;
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (!contract) {
      navigate("/contractInput");
      return;
    }
    submitContract();
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={1} sm={2} md={3} lg={4}></Grid>
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <div className="call-to-action-content-container">
            <TitleComponent />
            <div className="result-container">
              {isLoading ? (
                <CircularProgress sx={{ color: "#B49700" }} />
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="result-title">{response?.title}</p>
                  <motion.p variants={itemVariants} className="result-value">
                    1. {response?.topFiveDetails?.firstDetail}
                  </motion.p>
                  <motion.p variants={itemVariants} className="result-value">
                    2. {response?.topFiveDetails?.secondDetail}
                  </motion.p>
                  <motion.p variants={itemVariants} className="result-value">
                    3. {response?.topFiveDetails?.thirdDetail}
                  </motion.p>
                  <motion.p variants={itemVariants} className="result-value">
                    4. {response?.topFiveDetails?.forthDetail}
                  </motion.p>
                  <motion.p variants={itemVariants} className="result-value">
                    5. {response?.topFiveDetails?.fifthDetail}
                  </motion.p>
                </motion.div>
              )}
            </div>
            <NavButton
              buttonText={"Home"}
              showIcon={false}
              route={"/contractInput"}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResultsPageContainer;
