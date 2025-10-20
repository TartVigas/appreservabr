js
import { supabase } from '../lib/supabaseClient'

export default function Home({ data }) {
  return (
    <div>
      <h1>Dados:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await supabase.from('sua_tabela').select('*')
  return { props: { data } }
}


