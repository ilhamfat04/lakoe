// import { Stack } from '@chakra-ui/react';
// import { redirect, type ActionArgs, type LoaderArgs } from '@remix-run/node';
// import { useLoaderData } from '@remix-run/react';
// import ProductBody from '~/components/product/ProductBody';
// import { ImplementGrid } from '~/layouts/Grid';
// import {
//   deleteProduct,
//   getProductByStoreId,
//   update,
// } from '~/modules/product/product.service';

// export async function loader({ params }: LoaderArgs) {
//   return await getProductByStoreId(params.storeId);
// }

// export async function action({ request, params }: ActionArgs) {
//   if (request.method.toLowerCase() === 'delete') {
//     const formData = await request.formData();
//     const id = formData.get('id') as string;

//     await deleteProduct(id);
//   }

//   if (request.method.toLowerCase() === 'patch') {
//     const formData = await request.formData();

//     const id = formData.get('id') as string;
//     const price = formData.get('price');
//     const stock = formData.get('stock');

//     console.log('id', id);
//     console.log('price', price);
//     console.log('stock', stock);

//     await update({ id, price, stock });
//   }

//   return redirect(`/product/${params.storeId}`);
// }

// export default function Product() {
//   const data = useLoaderData<typeof loader>();
//   return (
//     <ImplementGrid>
//       <Stack mt={'7.5vh'} spacing={4}>
//         <ProductBody product={data} />
//       </Stack>
//     </ImplementGrid>
//   );
// }