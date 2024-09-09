import { Poppins, B612, Allan, Montserrat} from "next/font/google";

const b612_init = B612({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-b612",
    display: "swap"
  })

  const poppins_init = Poppins({
    subsets: ["latin"],
    weight: ["500", "700"],
    variable: "--font-poppins",
    display: "swap"
  })

  const allan_init = Allan({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-allan",
    display: "swap"
  })

  const monserrat_init = Montserrat({
    subsets: ["latin"],
    weight: ["200", "400", "500", "700"],
    variable: "--font-montserrat",
    display: "swap"
  })

  export const b612 = b612_init.variable;

  export const poppins = poppins_init.variable;

  export const allan = allan_init.variable;

  export const montserrat = monserrat_init.variable;

  
  