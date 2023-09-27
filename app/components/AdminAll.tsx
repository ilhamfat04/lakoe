import {
  Box,
  Tab,
  TabList,
  Tabs,
  Text,
  Flex,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Input,
  VStack,
  FormControl,
  Select,
} from '@chakra-ui/react';

import { Link } from '@remix-run/react';
import moment from 'moment';
import { useState } from 'react';
import AdminRequestPopup from './AdminRequestPopup';
import AdminSuccessPopup from './AdminSuccessPopup';
import AdminProcessingPopup from './AdminProcessingPopup';
<<<<<<< HEAD
import AdminDeclinedPopup from './AdminDeclinedPopup';
=======
import AdminApprovedPopup from './AdminApprovedPopup';
import { AiFillCloseCircle } from 'react-icons/ai';
>>>>>>> 542471b32e6294979bed6b5b00b1bfa9fb2635ac

export default function AdminRequest({ dataWithdrawal }: any) {
  const filteredDataRequest = dataWithdrawal.filter(
    (item: any) => item.status === 'REQUEST'
  );
  const filteredDataApproved = dataWithdrawal.filter(
    (item: any) => item.status === 'APPROVED'
  );
  const filteredDataProcessing = dataWithdrawal.filter(
    (item: any) => item.status === 'PROCESSING'
  );
  const filteredDataSuccess = dataWithdrawal.filter(
    (item: any) => item.status === 'SUCCESS'
  );
  const filteredDataDeclined = dataWithdrawal.filter(
    (item: any) => item.status === 'DECLINED'
  );
  function formatRupiah(amount: number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  }

  const withdrawalCountAll = dataWithdrawal.length;
  const withdrawalCountByRequest = filteredDataRequest.length;
  const withdrawalCountByApproved = filteredDataApproved.length;
  const withdrawalCountByProcessing = filteredDataProcessing.length;
  const withdrawalCountBySuccess = filteredDataSuccess.length;
  const withdrawalCountByDeclined = filteredDataDeclined.length;

  interface SelectOption {
    value: string;
    label: string;
  }

  const [selectedOption, setSelectedOption] = useState<string>('');

  const options: SelectOption[] = [
    { value: 'Status', label: 'Status' },
    { value: 'Time', label: 'Time' },
    { value: 'Saldo Penarikan', label: 'Saldo Penarikan' },
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
  };

  return (
    <>
      <Box
        width={'100%'}
        padding={'10px'}
        borderRadius={'15px'}
        boxShadow="base"
        p="6"
        rounded="md"
        bg="white"
        overflow={'auto'}
      >
        <Box>
          <Tabs defaultIndex={0}>
            <Box my={4} mx={5}>
              <Text fontWeight={'bold'} fontSize={'16px'}>
                Daftar Penarikan Dana
              </Text>
            </Box>

            <Box>
              <Box
                display={'flex'}
                overflow={'scroll'}
                sx={{
                  '::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                <TabList mx={5}>
                  <Box textAlign={'center'}>
                    <Box display={'flex'}>
                      <Link to={'/dashboardAdmin'}>
                        <Tab>
                          {/* NOTIFICATION ORDER */}
                          <Text
                            my={2}
                            color={'white'}
                            bg={'teal'}
                            borderRadius={'full'}
                            boxSize={'18px'}
                            fontSize={'12px'}
                            marginRight={2}
                          >
                            {withdrawalCountAll}{' '}
                            {/* INSERT YOUR NOTIF DATA HERE */}
                          </Text>
                          {/* END NOTIFICATION ORDER */}
                          <Flex gap={1.5}>
                            <Text fontSize={'12px'}>Semua</Text>
                          </Flex>
                        </Tab>
                      </Link>
                    </Box>
                  </Box>

                  <Box textAlign={'center'}>
                    <Box display={'flex'}>
                      <Link to={'/adminRequest'}>
                        <Tab>
                          {/* NOTIFICATION ORDER */}
                          <Text
                            my={2}
                            color={'white'}
                            bg={'teal'}
                            borderRadius={'full'}
                            boxSize={'18px'}
                            fontSize={'12px'}
                            marginRight={2}
                          >
                            {withdrawalCountByRequest}{' '}
                            {/* INSERT YOUR NOTIF DATA HERE */}
                          </Text>
                          {/* END NOTIFICATION ORDER */}
                          <Flex gap={1.5}>
                            <Text fontSize={'12px'}>Request</Text>
                          </Flex>
                        </Tab>
                      </Link>
                    </Box>
                  </Box>

                  <Box textAlign={'center'}>
                    <Box display={'flex'}>
                      <Link to={'/adminApproved'}>
                        <Tab>
                          {/* NOTIFICATION ORDER */}
                          <Text
                            my={2}
                            color={'white'}
                            bg={'teal'}
                            borderRadius={'full'}
                            boxSize={'18px'}
                            fontSize={'12px'}
                            marginRight={2}
                          >
                            {withdrawalCountByApproved}{' '}
                            {/* INSERT YOUR NOTIF DATA HERE */}
                          </Text>
                          {/* END NOTIFICATION ORDER */}
                          <Flex gap={1.5}>
                            <Text fontSize={'12px'}>Approved</Text>
                          </Flex>
                        </Tab>
                      </Link>
                    </Box>
                  </Box>

                  <Box textAlign={'center'}>
                    <Box display={'flex'}>
                      <Link to={'/adminProcessing'}>
                        <Tab>
                          {/* NOTIFICATION ORDER */}
                          <Text
                            my={2}
                            color={'white'}
                            bg={'teal'}
                            borderRadius={'full'}
                            boxSize={'18px'}
                            fontSize={'12px'}
                            marginRight={2}
                          >
                            {withdrawalCountByProcessing}{' '}
                            {/* INSERT YOUR NOTIF DATA HERE */}
                          </Text>
                          {/* END NOTIFICATION ORDER */}

                          <Flex gap={1.5}>
                            <Text fontSize={'12px'}>Processing</Text>
                          </Flex>
                        </Tab>
                      </Link>
                    </Box>
                  </Box>

                  <Box textAlign={'center'}>
                    <Box display={'flex'}>
                      <Link to={'/adminSuccess'}>
                        <Tab>
                          {/* NOTIFICATION ORDER  !*/}
                          <Text
                            my={2}
                            color={'white'}
                            bg={'teal'}
                            borderRadius={'full'}
                            boxSize={'18px'}
                            fontSize={'12px'}
                            marginRight={2}
                          >
                            {withdrawalCountBySuccess}{' '}
                            {/* INSERT YOUR NOTIF DATA HERE */}
                          </Text>
                          {/* END NOTIFICATION ORDER */}

                          <Flex gap={1.5}>
                            <Text fontSize={'12px'}>Success</Text>
                          </Flex>
                        </Tab>
                      </Link>
                    </Box>
                  </Box>
                  <Box textAlign={'center'}>
                    <Box display={'flex'}>
                      <Link to={'/adminDeclined'}>
                        <Tab>
                          {/* NOTIFICATION ORDER */}
                          <Text
                            my={2}
                            color={'white'}
                            bg={'teal'}
                            borderRadius={'full'}
                            boxSize={'18px'}
                            fontSize={'12px'}
                            marginRight={2}
                          >
                            {withdrawalCountByDeclined}{' '}
                            {/* INSERT YOUR NOTIF DATA HERE */}
                          </Text>
                          {/* END NOTIFICATION ORDER */}
                          <Flex gap={1.5}>
                            <Text fontSize={'12px'}>Declined</Text>
                          </Flex>
                        </Tab>
                      </Link>
                    </Box>
                  </Box>
                </TabList>
              </Box>
              {/* </Tabs> */}
            </Box>
          </Tabs>
        </Box>

        {/* Sort By */}
        <Flex gap={'10px'} margin={'15px'}>
          <VStack width={'50%'}>
            <FormControl>
              <Select
                value={selectedOption}
                onChange={handleSelectChange}
                placeholder="Urutkan"
                fontSize={'12px'}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
          </VStack>
          <Input fontSize={'12px'} placeholder="Filter" width={'50%'} />
        </Flex>

        {/* Table */}
        <Box>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr fontSize={'12px'}>
                  <Th px={'5px'} fontSize={'10px'} textAlign={'center'}>
                    ID Withdraw
                  </Th>
                  <Th px={'5px'} fontSize={'10px'} textAlign={'center'}>
                    Nama Store
                  </Th>
                  <Th px={'5px'} fontSize={'10px'} textAlign={'center'}>
                    Tanggal
                  </Th>
                  <Th px={'5px'} fontSize={'10px'} textAlign={'center'}>
                    Jumlah Penarikan
                  </Th>
                  <Th px={'5px'} fontSize={'10px'} textAlign={'center'}>
                    Status
                  </Th>
                  <Th px={'5px'} fontSize={'10px'} textAlign={'center'}>
                    Action
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataWithdrawal.map((item: any) => (
                  <Tr key={item.id}>
                    <Td px={'5px'} fontSize={'10px'} textAlign={'center'}>
                      123ASD
                    </Td>

                    <Td px={'5px'} fontSize={'10px'} textAlign={'center'}>
                      {item.store?.name}
                    </Td>

                    <Td px={'5px'} fontSize={'10px'} textAlign={'center'}>
                      {item.store?.name}
                    </Td>
                    <Td px={'5px'} fontSize={'10px'} textAlign={'center'}>
                      {moment(item.createdAt, 'YYYY-MM-DD HH:mm:ss').format(
                        'LLLL'
                      )}
                    </Td>
                    <Td px={'5px'} fontSize={'10px'} textAlign={'center'}>
                      {formatRupiah(item.amount)}
                    </Td>
                    <Td margin={'2px 0'}>
                      <Text>
                        {item.status === 'REQUEST' && (
                          <Text
                            bg={'Yellow'}
                            color={'black'}
                            borderRadius={'15px'}
                            px={'5px'}
                            fontSize={'10px'}
                            textAlign={'center'}
                          >
                            REQUEST
                          </Text>
                        )}

<<<<<<< HEAD
=======
                        {item.status === 'APPROVED' && (
                          <Text
                            bg={'blue.600'}
                            color={'white'}
                            borderRadius={'15px'}
                            px={'5px'}
                            fontSize={'10px'}
                            textAlign={'center'}
                          >
                            APPROVED
                          </Text>
                        )}

>>>>>>> 542471b32e6294979bed6b5b00b1bfa9fb2635ac
                        {item.status === 'PROCESSING' && (
                          <Text
                            bg={'teal'}
                            color={'white'}
                            borderRadius={'15px'}
                            px={'5px'}
                            fontSize={'10px'}
                            textAlign={'center'}
                          >
                            PROCESSING
                          </Text>
                        )}

                        {item.status === 'SUCCESS' && (
                          <Text
                            bg={'green'}
                            color={'white'}
                            borderRadius={'15px'}
                            px={'5px'}
                            fontSize={'10px'}
                            textAlign={'center'}
                          >
                            SUCCESS
                          </Text>
                        )}

                        {item.status === 'DECLINED' && (
                          <Text
                            bg={'RED'}
                            color={'white'}
                            borderRadius={'15px'}
                            px={'5px'}
                            fontSize={'10px'}
                            textAlign={'center'}
                          >
                            DECLINED
                          </Text>
                        )}
                      </Text>
                    </Td>

                    <Td padding={'5px'}>
                      {item.status === 'REQUEST' && (
                        <Text
                          color={'black'}
                          textAlign={'center'}
                          borderRadius={'15px'}
                          cursor={'pointer'}
                          px={'5px'}
                          fontSize={'10px'}
                        >
                          <AdminRequestPopup dataWithdrawal={item} />
                        </Text>
                      )}
<<<<<<< HEAD
=======
                      {item.status === 'APPROVED' && (
                        <Text
                          color={'black'}
                          textAlign={'center'}
                          borderRadius={'15px'}
                          cursor={'pointer'}
                          px={'5px'}
                          fontSize={'10px'}
                        >
                          <AdminApprovedPopup dataWithdrawal={item} />
                        </Text>
                      )}
>>>>>>> 542471b32e6294979bed6b5b00b1bfa9fb2635ac
                      {item.status === 'PROCESSING' && (
                        <Text
                          color={'black'}
                          textAlign={'center'}
                          borderRadius={'15px'}
                          cursor={'pointer'}
                          px={'5px'}
                          fontSize={'10px'}
                        >
                          <AdminProcessingPopup withdrawalData={item} />
                        </Text>
                      )}
                      {item.status === 'SUCCESS' && (
                        <Text
                          color={'black'}
                          textAlign={'center'}
                          borderRadius={'15px'}
                          cursor={'pointer'}
                          px={'5px'}
                          fontSize={'10px'}
                        >
                          <AdminSuccessPopup dataWithdrawal={item} />
                        </Text>
                      )}
                      {item.status === 'DECLINED' && (
                        <Text
<<<<<<< HEAD
                          color={'black'}
=======
                          color={'red'}
>>>>>>> 542471b32e6294979bed6b5b00b1bfa9fb2635ac
                          textAlign={'center'}
                          borderRadius={'15px'}
                          cursor={'pointer'}
                          px={'5px'}
<<<<<<< HEAD
                          fontSize={'10px'}
                        >
                          <AdminDeclinedPopup dataWithdrawal={item} />
=======
                          fontSize={'20px'}
                          ml={5}
                        >
                          <AiFillCloseCircle />
>>>>>>> 542471b32e6294979bed6b5b00b1bfa9fb2635ac
                        </Text>
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}
