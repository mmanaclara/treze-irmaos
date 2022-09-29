import {
    Button,
    DialogDismiss,
    DialogHeading,
    DialogDescription,
    useDialogState,
  } from "ariakit"
  
import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa"
import { ImWhatsapp } from "react-icons/im"
  
  import { BuyButtonContainer, DialogContainer } from "./styles"

export function BuyButton() {
    const dialog = useDialogState();
    
    return (
        <BuyButtonContainer>
            <Button onClick={dialog.toggle}>
                <FaShoppingCart />
                Comprar
            </Button>

            <DialogContainer state={dialog}>
                <button><DialogDismiss /></button>
                <header>
                    <DialogHeading>Olá! 👋</DialogHeading>
                </header>
                <p>
                    <DialogDescription>
                    Você pode comprar este livro entrando em contato com a gente pelo WhatsApp. A retirada é na nossa casa espírita, na rua Pastor Rodolfo Beuttenmullher, 314 - Jardim Cidade Universitária, João Pessoa. <br /><br />
                    Muita paz! 🙏
                    </DialogDescription>
                </p>

                <Link 
                    href="https://wa.me/5583993820257"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <a>
                    <ImWhatsapp />
                    Fala com a gente!
                    </a>
                </Link>
            </DialogContainer>
        </BuyButtonContainer>
    )
}