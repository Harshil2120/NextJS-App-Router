export default function Product({params}:{params:{productId:string}}) {
    return (
     <h1>Product Page {params.productId}</h1>
    );
  }
  