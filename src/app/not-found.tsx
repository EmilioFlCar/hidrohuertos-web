import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div>Página no encontrada</div>
      <Link href={"/"}>
        <button>Inicio</button>
      </Link>
    </div>
  );
}
