import { Link } from "react-router-dom"
import { useGetAllProductsQuery } from "../features/productsApi"

export default function Home() {
  const { data, err, isLoading } = useGetAllProductsQuery()

  return (
    <>
      <title>Lupine Home</title>
      <h2>Home</h2>

    </>
  )
}
