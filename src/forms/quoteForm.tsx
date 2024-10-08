"use client";
import { getAQuote } from "@/actions/contactActions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { toast } from "@/components/ui/use-toast";
import { QuoteSquema } from "@/lib/schemas/formSchemas";
import React from "react";

export default function QuoteForm() {
  // project select
  const [selectTipo, setSelectTipo] = React.useState("");

  //form ref
  const formRef = React.useRef<HTMLFormElement>(null);

  //errors
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [empresaError, setEmpresaError] = React.useState("");
  const [giroError, setGiroError] = React.useState("");
  const [serviceError, setServiceError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const setErrorMessages = (
    issues: { path: (string | number)[]; message: string }[]
  ) => {
    issues.forEach((issue) => {
      if (issue.path[0] === "name") setNameError(issue.message);
      else if (issue.path[0] === "email") setEmailError(issue.message);
      else if (issue.path[0] === "phone") setPhoneError(issue.message);
      else if (issue.path[0] === "enterprise") setEmpresaError(issue.message);
      else if (issue.path[0] === "businessLine") setGiroError(issue.message);
      else if (issue.path[0] === "service") setServiceError(issue.message);
    });
  };

  // fields
  const [checkbox1, setCheckbox1] = React.useState<string[]>([]);
  const [checkbox2, setCheckbox2] = React.useState<string[]>([]);
  const [textArea, setTextArea] = React.useState<string>("");
  const [radioGroup, setRadioGroup] = React.useState<string>("rest");

  const handleRadioChange = (value: string) => {
    setRadioGroup(value);
  };

  const handleTextArea = (value: string) => {
    setTextArea(value);
  };

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
            handleTextArea={handleTextArea}
          />
        );
      case "app":
        return (
          <AplicacionesWebForm
            handleCheckbox={handleCheckbox1}
            handleTextArea={handleTextArea}
          />
        );
      case "api":
        return (
          <ApiForm
            handleCheckbox={handleCheckbox1}
            handleTextArea={handleTextArea}
            handleRadioChange={handleRadioChange}
          />
        );
      case "other":
        return <OtherForm handleTextArea={handleTextArea} />;
      default:
        return null;
    }
  };

  const makeAQuote = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current!);
    try {
      // Reset form
      setSelectTipo("");
      setNameError("");
      setEmailError("");
      setPhoneError("");
      setEmpresaError("");
      setGiroError("");
      setServiceError("");
      //client side validation
      const result = QuoteSquema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        businessLine: formData.get("businessLine"),
        enterprise: formData.get("enterprise"),
        service: selectTipo,
        checkbox1: checkbox1,
        checkbox2: checkbox2,
        textarea: textArea,
        radiogroup1: radioGroup,
      });
      if (!result.success) {
        // Handle error or display error message
        setErrorMessages(result.error.issues);
        return;
      }
      formRef.current?.reset();

      // Create a new FormData instance and append form data
      const newFormData = new FormData();
      Object.entries(result.data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          newFormData.append(key, JSON.stringify(value));
        } else {
          newFormData.append(key, value as string);
        }
      });

      const response = await getAQuote(newFormData);

      if (!response.success && response.errors) {
        //  set errors from the server response
        setErrorMessages(response.errors);
        return {};
      }

      toast({
        title: "¡Cotizacion enviada correctamente!",
        description: `Tu mensaje ha sido enviado correctamente ${
          response.data?.name ?? ""
        }`,
      });
    } catch (e: any) {
      console.log(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form
        ref={formRef}
        onSubmit={makeAQuote}
        autoComplete="off"
        className="container mx-auto flex flex-col md:flex-row justify-center w-full"
      >
        {/* ¡Formulario! */}
        {/* Client info section */}
        <div className="flex flex-col items-start gap-2 me-2 w-full">
          <h2 className=" text-white text-xl w-full text-center -mb-2 bg-gradient-to-r from-[#7e02b7] to-[#c240ff] bg-300% animate-gradient">
            Datos del cliente
          </h2>
          <div className="flex flex-col md:flex-row gap-2 w-full ">
            <div className="flex flex-col w-full gap-2">
              <Input
                type="text"
                placeholder="Nombre"
                name="name"
                className={` rounded-none ${
                  nameError ? "ring-2 ring-red-500" : ""
                }`}
              />
              <p className="text-red-500 -mt-2 text-xs">{nameError}</p>
            </div>
            <div className="flex flex-col w-full  gap-2">
              <Input
                type="tel"
                placeholder="Telefono"
                name="phone"
                className={` rounded-none ${
                  phoneError ? "ring-2 ring-red-500" : ""
                }`}
              />
              <p className="text-red-500 -mt-2 text-xs">{phoneError}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="flex flex-col w-full  gap-2">
              <Input
                type="text"
                placeholder="Empresa"
                name="enterprise"
                className={` rounded-none ${
                  empresaError ? "ring-2 ring-red-500" : ""
                }`}
              />
              <p className="text-red-500 -mt-2 text-xs">{empresaError}</p>
            </div>
            <div className="flex flex-col w-full  gap-2">
              <Input
                type="text"
                placeholder="Giro"
                name="businessLine"
                className={` rounded-none ${
                  giroError ? "ring-2 ring-red-500" : ""
                }`}
              />
              <p className="text-red-500 -mt-2 text-xs">{giroError}</p>
            </div>
          </div>
          <Input
            type="mail"
            placeholder="Correo"
            name="email"
            className={` rounded-none ${
              emailError ? "ring-2 ring-red-500" : ""
            }`}
          />
          <p className="text-red-500 -mt-2 text-xs">{emailError}</p>
        </div>

        {/* Project info section */}
        <div className="flex flex-col items-start gap-2 me-2 w-full">
          <h2 className="bg-gradient-to-r from-[#7e02b7]   to-[#c240ff] bg-300% animate-gradient text-white text-xl w-full text-center -mb-2">
            Datos del proyecto
          </h2>
          <div className="flex flex-col gap-2 w-full">
            <Select
              name="service"
              value={selectTipo}
              onValueChange={(e) => setSelectTipo(e)}
            >
              <SelectTrigger
                className={` rounded-none ${
                  serviceError ? "ring-2 ring-red-500" : ""
                }`}
              >
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
            <p className="text-red-500 -mt-2 text-xs">{serviceError}</p>
            {renderSelect()}
            {/* <Input type="text" placeholder="Otro" name="otro"className="rounded-none" /> */}
          </div>
          <Button
            disabled={isLoading}
            className="self-end bg-gradient-to-r from-[#7e02b7]   to-[#c240ff] bg-300% animate-gradient"
            type="submit"
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </Button>
        </div>
      </form>
    </>
  );
}
type CheckboxProps = {
  handleCheckbox: (value: string) => void;
  handleCheckbox1: (value: string) => void;
  handleTextArea: (value: string) => void;
};

type TextAreaProps = {
  handleTextArea: (value: string) => void;
};

function DesarrolloWebForm({
  handleCheckbox,
  handleCheckbox1,
  handleTextArea,
}: CheckboxProps) {
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
        onChange={(e) => handleTextArea(e.target.value)}
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
  handleTextArea: (value: string) => void;
};
function AplicacionesWebForm({
  handleCheckbox,
  handleTextArea,
}: CheckboxProps2) {
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
        onChange={(e) => handleTextArea(e.target.value)}
        placeholder="Cuentanos un poco sobre tu proyecto:"
        className="resize-none rounded-none"
      />
    </>
  );
}

type ApiProps = {
  handleCheckbox: (value: string) => void;
  handleTextArea: (value: string) => void;
  handleRadioChange: (value: string) => void;
};
function ApiForm({
  handleCheckbox,
  handleTextArea,
  handleRadioChange,
}: ApiProps) {
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
      label: "Rest",
    },
    {
      id: "graphql",
      label: "GraphQL",
    },
    {
      id: "soap",
      label: "SOAP",
    },
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
  ];
  return (
    <>
      <p className="font-bold">Selecciona las características: </p>
      <div className="flex gap-2 flex-wrap px-1">
        <Checkboxes options={items} handleCheckbox={handleCheckbox} />
      </div>
      <Textarea
        onChange={(e) => handleTextArea(e.target.value)}
        placeholder="Cuentanos un poco sobre tu proyecto:
"
        className="resize-none rounded-none"
      />
      <RadioGrouping options={items2} handleRadioChange={handleRadioChange} />
    </>
  );
}
function OtherForm({ handleTextArea }: TextAreaProps) {
  return (
    <>
      <Textarea
        onChange={(e) => handleTextArea(e.target.value)}
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
  }[];
  handleRadioChange: (value: string) => void; // Definición del tipo de las opciones
};

function RadioGrouping({ options, handleRadioChange }: RadioProps) {
  return (
    <>
      <RadioGroup
        defaultChecked
        defaultValue="rest"
        className="flex gap-2"
        onValueChange={(value) => handleRadioChange(value)}
      >
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
