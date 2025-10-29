type Props = {
  ano: number | string;
};
 
export default function Footer({
  ano
}: Props){
 
return <footer className="border-t border-primary-600 mt-auto">
    <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-neutral-600 text-center">
        &copy; {ano} Crono Auto. Todos los derechos reservados.
    </div>
</footer>
}