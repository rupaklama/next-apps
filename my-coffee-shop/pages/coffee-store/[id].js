import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  // param id
  const router = useRouter();

  return (
    <div>
      {router.query.id}

      <br />
      <Link href="/">Back to home</Link>
    </div>
  );
};
export default CoffeeStore;
