import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import axios from "axios";
import {
  DeleteFeedBack,
  DeleteUser,
  GETFeedBack,
  GETUSERS,
} from "../Constant/url";
function Feedback(props) {
  const [feedback, setFeedBack] = React.useState("");
  const [deleteId, setDeleteId] = React.useState("");
  const jwt = localStorage.getItem("jwt");
  const toast = useToast();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETFeedBack);
      setFeedBack(request.data);
    }
    fetchData();
  }, []);
  const handleDelete = (value) => {
    setDeleteId(value);
    fetch(DeleteFeedBack + value, {
      headers: {
        "content-type": "application/json",
        Authorization: jwt,
      },
    })
      .then((response) => {
        if (response.status == 200) {
          // Success!
          toast({
            title: "Successfully",
            description: "User Deleted",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else if (response.status == 401 || response.status == 403) {
          toast({
            title: "UnAuthorized",
            description: "You have no access to upload data",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        } else {
          // Error!
          toast({
            title: "LoggedIn Error.",
            description: "Record Not Match.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {});
  };

  return (
    <div>
      <TableContainer>
        <Table
          variant='striped'
          colorScheme='teal'
          size={{ base: "sm", md: "lg", lg: "lg" }}>
          <TableCaption>FeedBack Lists</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Message</Th>
            </Tr>
          </Thead>
          <Tbody>
            {feedback &&
              feedback.map((ex) => {
                return (
                  <Tr>
                    <Td>{ex.name}</Td>
                    <Td>{ex.email}</Td>
                    <Td>{ex.message}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Feedback;
