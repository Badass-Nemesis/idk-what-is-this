import QRCode from "@/components/QRCode";

export default function Home() {
  return (
    <main>
      <h1 className="m-2 p-2 flex justify-center items-center text-2xl">Your QR Code</h1>
      <QRCode />
      {/* displaying the url here for testing phase */}
      <div id="qr-url" className="mt-4 p-2 text-center bg-gray-100"></div>
    </main>
  )
}