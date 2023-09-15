import {
  Box,
  Button,
  Card,
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { UseSearch } from '~/hooks/useSearchOrder';

export default function CardNewOrder(props: IOrderDetailInvoice) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { filteredOrders } = UseSearch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleBalanceNotif = async () => {
    try {
      const mailerBaseUrl = 'https://connect.mailerlite.com';
      const mailerEndPoint = '/api/subscribers';
      const mailerApiKey = process.env.MAILERLITE_API;

      const mailerData = {
        email: 'miswaripujaayu+123qowiej@gmail.com',
        fields: {
          company: 'ADD MORE BALANCE', //company berperan sebagai "title" dalam mailerlite
          last_name:
            "you need to add more balance to your platform system so that your sellers can keep sending packages to their customer without being delayed just because you're lack of money. do what you gotta do", //last_name berperan sebagai isian pesan ("message") dalam mailerlite
        },
        groups: ['98713000939095999'],
      };

      const mailerRequest = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${mailerApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailerData),
      };

      const response = await fetch(
        `${mailerBaseUrl}${mailerEndPoint}`,
        mailerRequest
      );
      const responseData = await response.json();
      console.log('Data Email :', responseData);
    } catch (error) {
      alert(error);
    }
  };

  const systembalance = 100000; //saldo LAKOE

  const afterpacking = () => {
    if (systembalance > 50000) {
      handleOrderCourier();
    } else {
      handleBalanceNotif();
    }
  };

  const handleOrderCourier = async () => {
    try {
      const baseUrl = 'https://api.biteship.com';
      const endpoint = '/v1/orders';
      const apiKey = process.env.BITESHIP_API;

      const orderData = {
        shipper_contact_name: 'megakuningan',
        shipper_contact_phone: '081277882932',
        shipper_contact_email: 'biteship@test.com',
        shipper_organization: 'Biteship Org Test',
        origin_contact_name: 'megakuningan',
        origin_contact_phone: '081740781720',
        origin_address: 'Plaza Senayan, Jalan Asia Afrika...',
        origin_note: 'Deket pintu masuk STC',
        origin_coordinate: {
          latitude: -6.2253114,
          longitude: 106.7993735,
        },
        origin_postal_code: 12440,
        destination_contact_name: 'stevanus miswari',
        destination_contact_phone: '08170032123',
        destination_contact_email: 'jon@test.com',
        destination_address: 'Lebak Bulus MRT...',
        destination_postal_code: 12950,
        destination_note: 'Near the gas station',
        destination_cash_proof_of_delivery: true,
        destination_coordinate: {
          latitude: -6.28927,
          longitude: 106.77492000000007,
        },
        courierName: 'grab',
        courierService: '',
        courier_insurance: 500000,
        delivery_type: 'later',
        delivery_date: '2024-09-24',
        delivery_time: '12:00',
        order_note: 'Please be careful',
        metadata: {},
        items: [
          {
            id: '5db7ee67382e185bd6a14608',
            name: 'Black L',
            image: '',
            description: 'White Shirt',
            value: 165000,
            quantity: 1,
            height: 10,
            length: 10,
            weight: 200,
            width: 10,
          },
        ],
      };

      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      };

      const response = await fetch(`${baseUrl}${endpoint}`, requestOptions);
      const responseData = await response.json();

      alert(responseData);
    } catch (error) {
      alert(error);
    }
  };

  const [modalText, setModalText] = useState('');

  return (
    <>
      <Card mb={5} boxShadow={'xs'}>
        <Box>
          <Box mt={5}>
            <Box>
              <Flex justifyContent={'space-between'} px={2}>
                <Button
                  bg={'#008F5D'}
                  color={'white'}
                  fontWeight={'bold'}
                  colorScheme="red.500"
                  size={'sm'}
                  pointerEvents={'none'}
                >
                  Pesanan Baru
                </Button>

                {/* SET WHAT DO YOU WANT TO DO WITH YOUR BUTTON HERE */}
                <Button
                  bg={'transparent'}
                  border={'1px solid #D5D5D5'}
                  borderRadius={'full'}
                  fontSize={'14px'}
                  onClick={() => {
                    setModalText('Apakah sudah di pack dan siap dikirim?');
                    onOpen();
                  }}
                >
                  Proses Pesanan
                </Button>
                {/*  */}
                {/* Modal */}
                <Modal
                  blockScrollOnMount={false}
                  isOpen={isOpen}
                  onClose={() => {
                    setModalText('');
                    onClose();
                  }}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Proses Pesanan</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text fontWeight="bold" mb="1rem">
                        {modalText}
                      </Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={() => {
                          setModalText('');
                          onClose();
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          afterpacking();
                          onClose();
                        }}
                      >
                        Selesai di Packing
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Flex>
              <Text my={1} fontSize={'14px'} color={'gray.400'} px={2}>
                {props.invoiceNumber}
              </Text>
              <hr />
              <Flex justifyContent={'space-between'}>
                <Box display={'flex'} w={'80%'}>
                  <Img
                    w={'52px'}
                    h={'52px'}
                    display={'inline'}
                    src={
                      'https://yandex.com/images/search?pos=4&from=tabbar&img_url=https%3A%2F%2Fwww.static-src.com%2Fwcsstore%2FIndraprastha%2Fimages%2Fcatalog%2Ffull%2Fkaosyes_kaosyes-kaos-polos-t-shirt-raglan-lengan-3-4-abu-hitam_full06.jpg&text=kaos+combad&rpt=simage&lr=114912'
                    }
                    mt={3}
                  />
                  <Text
                    mt={4}
                    id="fm500"
                    fontSize={'16px'}
                    textOverflow={'ellipsis'}
                    overflow={'hidden'}
                    whiteSpace={'nowrap'}
                    fontWeight={'700'}
                  >
                    {props.cart?.cartItems.map((a) => a.product?.name)}
                    <Text color={'gray.400'} pb={3} fontWeight={'normal'}>
                      1 Barang
                    </Text>
                  </Text>
                </Box>
                <Box mt={4} w={'15%'}>
                  <Flex gap={1}>
                    <Text color={'#909090'} fontSize={'14px'}>
                      Total
                    </Text>
                    <Text color={'#909090'} fontSize={'14px'}>
                      Belanja
                    </Text>
                  </Flex>
                  <Text fontWeight={'bold'} fontSize={'14px'}>
                    Rp {props.totalAmount}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}
