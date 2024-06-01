import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function TicketView() {
  let { id } = useParams();
  let [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/tasks`);
        res.data.forEach((ele, i) => {
          if (id === String(i)) {
            setData(ele);
          }
        });
        console.log(res.data);
      } catch (error) {
        console.log("ERROR: " + error);
      }
    };

    getData();
  }, [id]);

  return (
    <Box bg='green.100' p={5} borderRadius={'xl'}>
      {data ? (
        <>
          <Text>{data.title}</Text>
          <Text>{data.status}</Text>
          <Text>{data.priority}</Text>
          <Text>{data.assignee}</Text>
          <Text>{data.description}</Text>
          <Button color={'green.500'} onClick={() => navigate(`/ticketedit/${id}`)}>Edit</Button>
          <Button color={'red'} onClick={() => navigate(`/ticketedit/${id}`)}>Delete</Button>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
}
