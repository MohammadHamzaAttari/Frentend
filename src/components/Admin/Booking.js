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
import { useToast } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import axios from "axios";
import {
  DeleteBooking,
  DeleteUser,
  GETBooking,
  GETUSERS,
} from "../Constant/url";
function Booking(props) {
  const [book, setBook] = React.useState("");
  const [deleteId, setDeleteId] = React.useState("");
  const jwt = localStorage.getItem("jwt");
  const toast = useToast();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(GETBooking);
      setBook(request.data);
    }
    fetchData();
  }, []);
  const handleDelete = (value) => {
    fetch(DeleteBooking + value, {
      method: "DELETE",

      headers: { Authorization: jwt },
    }).then((response) => {
      if (response.status === 204) {
        // Success!
        toast({
          title: "Success",
          description: "Deleted Successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Failed",
          description: "You are not authorized to delete data",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    });
  };
  return (
    <div>
      <TableContainer>
        <Table
          variant='striped'
          colorScheme='teal'
          size={{ base: "sm", md: "sm", lg: "sm" }}>
          <TableCaption>Booking List</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>UserId</Th>
              <Th>FirstName</Th>
              <Th>Address</Th>
              <Th>City</Th>
              <Th>State</Th>
              <Th>Country</Th>
              <Th>ModelName</Th>
              <Th>Price</Th>
              <Th>TrimName</Th>
              <Th>Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {book &&
              book.map((ex) => {
                return (
                  <Tr key={ex.id}>
                    <Td>{ex.id}</Td>
                    <Td>{ex.userId}</Td>
                    <Td>{ex.firstName}</Td>
                    <Td>{ex.address}</Td>
                    <Td>{ex.city}</Td>
                    <Td>{ex.state}</Td>
                    <Td>{ex.country}</Td>
                    <Td>{ex.modelName}</Td>
                    <Td>{ex.price}</Td>
                    <Td>{ex.trimName}</Td>
                    <Td>{ex.trimPrice}</Td>
                    <Td>
                      <IconButton
                        colorScheme='teal'
                        aria-label='Call Segun'
                        size='lg'
                        onClick={() => handleDelete(ex.id)}
                        icon={<DeleteIcon />}
                      />
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Booking;
