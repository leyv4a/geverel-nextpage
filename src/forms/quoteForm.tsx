"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { QuoteSquema } from "@/lib/schemas/formSchemas";
import React from "react";

export default function QuoteForm() {
  const [selectTipo, setSelectTipo] = React.useState("");

  const [checkbox1, setCheckbox1] = React.useState<string[]>([]);
  const [checkbox2, setCheckbox2] = React.useState<string[]>([]);

  const handleCheckbox1 = (id: string) => {
    setCheckbox1(
      (prev) =>
        prev.includes(id)
          ? prev.filter((option) => option !== id) // Remueve si ya está seleccionado
          : [...prev, id] // Agrega si no está seleccionado
    );
  };
  const handleCheckbox2 = (id: string) => {
    setCheckbox2(
      (prev) =>
        prev.includes(id)
          ? prev.filter((option) => option !== id) // Remueve si ya está seleccionado
          : [...prev, id] // Agrega si no está seleccionado
    );
  };
  const renderSelect = () => {
    switch (selectTipo) {
      case "web":
        return (
          <DesarrolloWebForm
            handleCheckbox={handleCheckbox1}
            handleCheckbox1={handleCheckbox2}
          />
        );
      case "app":
        return <AplicacionesWebForm handleCheckbox={handleCheckbox1} />;
      case "api":
        return <ApiForm handleCheckbox={handleCheckbox1} />;
      case "other":
        return <OtherForm />;
      default:
        return null;
    }
  };

  const makeAQuote = async (formData: FormData) => {
    const result = QuoteSquema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      businessLine: formData.get("businessLine"),
      enterprise: formData.get("enterprise"),
      service: formData.get("service"),
      checkbox1: checkbox1,
      checkbox2: checkbox2,
    });
    console.log(result);
  };
  return (
    <>
      <form
        action={makeAQuote}
        autoComplete="off"
        className="container mx-auto flex flex-col md:flex-row justify-center w-full"
      >
        {/* ¡Formulario! */}
        {/* Client info section */}
        <div className="flex flex-col items-start gap-2 me-2 w-full">
          <h2 className="bg-primary text-white text-xl w-full text-center -mb-2">
            Datos del cliente
          </h2>
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <Input
              type="text"
              placeholder="Nombre"
              name="name"
              className="rounded-none"
            />
            <Input
              type="tel"
              placeholder="Telefono"
              name="phone"
              className="rounded-none"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <Input
              type="text"
              placeholder="Empresa"
              name="enterprise"
              className="rounded-none"
            />
            <Input
              type="text"
              placeholder="Giro"
              name="businessLine"
              className="rounded-none"
            />
          </div>
          <Input
            type="mail"
            placeholder="Correo"
            name="email"
            className="rounded-none mb-2"
          />
        </div>

        {/* Project info section */}
        <div className="flex flex-col items-start gap-2 me-2 w-full">
          <h2 className="bg-primary text-white text-xl w-full text-center -mb-2">
            Datos del proyecto
          </h2>
          <div className="flex flex-col gap-2 w-full">
            <Select name="service" onValueChange={(e) => setSelectTipo(e)}>
              <SelectTrigger className=" rounded-none  ">
                <SelectValue placeholder="Selecciona un tipo de proyecto" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Proyectos</SelectLabel> */}
                  <SelectItem value="web">Desarrollo web</SelectItem>
                  <SelectItem value="app">Aplicaciones web</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {renderSelect()}
            {/* <Input type="text" placeholder="Otro" name="otro"className="rounded-none" /> */}
          </div>
        </div>
        <Button type="submit">Enviar</Button>
      </form>
    </>
  );
}
type CheckboxProps = {
  handleCheckbox: (value: string) => void;
  handleCheckbox1: (value: string) => void;
};

function DesarrolloWebForm({ handleCheckbox, handleCheckbox1 }: CheckboxProps) {
  const items = [
    {
      id: "dominion",
      label: "Dominio.",
    },
    {
      id: "hospedaje",
      label: "Hospedaje.",
    },
    {
      id: "correos",
      label: "Correos electronicos.",
    },
    {
      id: "noTerms",
      label: "No conozco los terminos.",
    },
    {
      id: "actualizacion",
      label: "Ya cuento con página, quiero actualizarla.",
    },
    {
      id: "nada",
      label: "No cuento con nada de lo mencionado.",
    },
  ];

  const items2 = [
    {
      id: "pagina",
      label: "Página informativa.",
    },
    {
      id: "cotizador",
      label: "Cotizador en línea.",
    },
    {
      id: "catalogo",
      label: "Catálogo de productos sin venta.",
    },
    {
      id: "bolsa",
      label: "Bolsa de trabajo.",
    },
    {
      id: "comercio",
      label: "Comercio electrónico.",
    },
    {
      id: "mantenimiento",
      label: "Mantenimiento.",
    },
    {
      id: "otros",
      label: "Otros.",
    },
  ];
  return (
    <>
      <p className="font-bold">Selecciona si ya cuentas con alguno de estos:</p>
      <div className="flex gap-2 flex-wrap px-1">
        <Checkboxes options={items} handleCheckbox={handleCheckbox} />
      </div>
      <Textarea
        placeholder="Enlista ejemplos de páginas web que te gusten para tu negocio:
"
        className="resize-none rounded-none"
      />
      <p className="font-bold">Funcionalidades requeridas.</p>
      <div className="flex gap-2 flex-wrap px-1">
        <Checkboxes options={items2} handleCheckbox={handleCheckbox1} />
      </div>
    </>
  );
}

type CheckboxProps2 = {
  handleCheckbox: (value: string) => void;
};
function AplicacionesWebForm({ handleCheckbox}: CheckboxProps2) {
  const items = [
    {
      id: "base",
      label: "Base de datos.",
    },
    {
      id: "autenticacion",
      label: "Autenticación.",
    },
    {
      id: "integraciones",
      label: "Integraciones.",
    },
    {
      id: "escalabilidad",
      label: "Escalabilidad.",
    },
    {
      id: "mantenimiento",
      label: "Mantenimiento y soporte.",
    },
    {
      id: "tecnologias",
      label: "Tecnologías específicas.",
    },
  ];
  return (
    <>
      <p className="font-bold">Funcionalidades requeridas: </p>
      <div className="flex gap-2 flex-wrap px-1">
        <Checkboxes options={items} handleCheckbox={handleCheckbox} />
      </div>
      <Textarea
        placeholder="Cuentanos un poco sobre tu proyecto:"
        className="resize-none rounded-none"
      />
    </>
  );
}

function ApiForm({ handleCheckbox}: CheckboxProps2) {
  const items = [
    {
      id: "autenticacion",
      label: "Autenticación.",
    },
    {
      id: "documentacion",
      label: "Documentación.",
    },
    {
      id: "niveles",
      label: "Niveles de acceso.",
    },
    {
      id: "versionamiento",
      label: "Versionamiento.",
    },
    {
      id: "seguridad",
      label: "Seguridad.",
    },
  ];
  const items2 = [
    {
      id: "rest",
      label: "Rest"
    },{
      id: "graphql",
      label: "GraphQL"
    },{
      id: "soap",
      label: "SOAP"
    }
    // {
    //   id: "publico",
    //   label: "Público.",
    // },
    // {
    //   id: "privado",
    //   label: "Privado.",
    // },
    // {
    //   id: "anónimo",
    //   label: "Anónimo.",
    // },
    // {
    //   id: "token",
    //   label: "Token.",
    // },
    // {
    //   id: "oauth",
    //   label: "OAuth.",
    // },
    // {
    //   id: "api",
    //   label: "API.",
    // },
    // {
    //   id: "rest",
    //   label: "REST.",
    // },
  ]
  return (
    <>
      <p className="font-bold">Selecciona las características: </p>
      <div className="flex gap-2 flex-wrap px-1">
        <Checkboxes options={items} handleCheckbox={handleCheckbox}/>
      </div>
      <Textarea
        placeholder="Cuentanos un poco sobre tu proyecto:
"
        className="resize-none rounded-none"
      />
        <RadioGrouping options={items2}/>
    </>
  );
}
function OtherForm() {
  return (
    <>
       <Textarea
        placeholder="Cuentanos un poco sobre tu proyecto:
"
        className="resize-none rounded-none"
      />
    </>
  );
}

type Props = {
  options: {
    id: string;
    label: string;
  }[]; // Definición del tipo de las opciones
  handleCheckbox: (value: string) => void;
};
function Checkboxes({ options, handleCheckbox }: Props) {
  return (
    <>
      {options.map((option) => (
        <div key={option.id} className="mb-2 flex gap-2">
          <Checkbox
            name={option.id}
            id={option.id}
            className="mb-2"
            onCheckedChange={() => handleCheckbox(option.id)}
          />
          <label
            htmlFor={option.id}
            className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
}

type RadioProps = {
  options: {
    //  name: string,
    id: string;
    label: string;
  }[]; // Definición del tipo de las opciones
};

function RadioGrouping({ options }: RadioProps) {
  return (
    <>
      <RadioGroup defaultChecked defaultValue="rest" className="flex gap-2">
        {options.map((option, key) => (
          <div key={key} className="flex gap-2 items-center flex-wrap px-1">
            <RadioGroupItem value={option.id} id={option.id} />
            <label
              className="text-sm font-medium -ms-1 cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor={option.id}
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup>
    </>
  );
}
