import Link from "next/link"

const notFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
    <h1 className="text-8xl font-bold">404</h1>
    <p className="text-4xl font-medium">指定されたページが見つかりませんでした</p>
    <Link
        href="/"
        className="mt-4 text-xl text-blue-600 hover:underline"
    >
        <p>Go Back home</p>
    </Link>
</div>
  )
}

export default notFoundPage
