import React, { useState, useEffect } from "react";
import axios from "axios";
import ModelsSideBar from "./ModelsSidebar";
import ModelsCards from "./ModelsCards";
import { Flex } from "@chakra-ui/react";
import { GETCompanies } from "./Constant/url";
function Modelshero(props) {
  const data = props.fetch;
  const [result, setResult] = useState();
  const [company, setCompany] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${GETCompanies}/${data}`);
      setCompany(request.data);
      setResult(request.data.name);
    }
    fetchData();
  }, []);

  return (
    <Flex>
      {/*<ModelsSideBar data={result} />*/}
      <ModelsCards data={company} />
    </Flex>
  );
}

export default Modelshero;
