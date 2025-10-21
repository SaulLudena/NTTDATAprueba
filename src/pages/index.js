import Head from "next/head";
import Persons from "../components/persons/person";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Prueba técnica NTT Data</title>
        <meta name="description" content="Welcome to the Home Page" />
      </Head>

      <div className="max-w-[1900px] m-auto w-[90%] pb-24">
        <h1 className="text-4xl py-16 ">
          {" "}
          <h1 className="text-4xl my-2 font-light text-center">
            Nuestros usuarios mas félices en NTT Data
          </h1>
          <h1 className="text-xl my-2 font-light text-center">
            conoce a nuestro mejor personal de NTT Data
          </h1>
        </h1>
        <Persons />
      </div>
    </div>
  );
}
