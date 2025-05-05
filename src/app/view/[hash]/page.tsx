export default async function QRViewPage({
    params
}: {
    params: { hash: string }
}) {
    const res = await fetch(`${process.env.BASE_URL}/api/qr/check?hash=${params.hash}`)
    const data = await res.json()

    if (!data.valid) {
        return <div>QR Expired!</div>
    }

    return (
        <div>
            <h1>Questions</h1>
            <ul>
                {data.questions.map((q: string, i: number) => (
                    <li key={i}>{q}</li>
                ))}
            </ul>
        </div>
    )
}