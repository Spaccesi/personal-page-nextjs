import Link from "next/link"

const LinkList = () => {
  return (
    <>
      <Link href='/'>
        <li className='ml-10 py-4 text-sm uppercase hover:border-b'>Home</li>
      </Link>
      <Link href='/'>
        <li className='ml-10 py-4 text-sm uppercase hover:border-b'>Home</li>
      </Link>
      <Link href='/'>
        <li className='ml-10 py-4 text-sm uppercase hover:border-b'>Home</li>
      </Link>
      <Link href='/'>
        <li className='ml-10 py-4 text-sm uppercase hover:border-b'>Home</li>
      </Link>
    </>
  )
}

export default LinkList;