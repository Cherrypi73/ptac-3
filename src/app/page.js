'use client'
import Link from 'next/link'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { push, refresh } = useRouter();
  const handlerGenerationToken = () => {
    Cookies.set('token', 'ceceeecwfewcewe');
    push('/pages/private');
    refresh();
  };

  return (
    <div>
      <h1>Home</h1>
      <Link href={"/pages/private"} className='flex'>Página Privada</Link>
      <Link href={"/pages/public"}>Página Pública</Link>
      <button onClick={() => handlerGenerationToken()} className='flex'>Gerar Token</button>
    </div>

  )
}
