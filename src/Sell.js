import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Sell() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dealerHome/registerDealer");
  };
  return (
    <Button
      onClick={handleClick}
      width={{ base: "100%", md: "100%", lg: "70%" }}>
      Sell Your Car
    </Button>
  );
}
