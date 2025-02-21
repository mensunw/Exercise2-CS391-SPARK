import Link from "next/link";
import { useEffect, useState } from "react"

export default function About() {
    const [name, setName] = useState("");
    useEffect(() => {
        async function getData() {
            const data = await fetch("api/hello.ts").then((res) => res.json())
            setName(data)
        }
        getData()
    }, [])

    return (
        <div>
            <br />
            <h1>About me: {name}</h1>
            <h2>{"I'm a SWE and I don't like Java that much."}</h2>
            <br />
            <Link href="/blog">Go to Blog</Link>
            <br />
            <Link href="/news">SpaceNews!</Link>
            <br />
            <Link href="/">Back home</Link>
        </div>
    )
}