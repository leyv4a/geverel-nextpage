import { Poppins, B612, Allan} from "next/font/google";

const b612_init = B612({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-b612",
  })

  const poppins_init = Poppins({
    subsets: ["latin"],
    weight: ["500", "700"],
    variable: "--font-poppins",
  })

  const allan_init = Allan({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-allan",
  })

  export const b612 = b612_init.variable;

  export const poppins = poppins_init.variable;

  export const allan = allan_init.variable;

  