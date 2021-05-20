import React, { useState } from 'react';
import useScrollView from '@/hooks/useScrollView';
import useIsInViewport from 'use-is-in-viewport';
import * as emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Image from 'next/image';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

init(`user_dCG0updxK4whLcvan908G`);
export default function contact() {
  const MySwal = withReactContent(Swal);
  const [isInViewport, targetRef] = useIsInViewport();
  const scrollView = useScrollView(isInViewport);
  const templateParams = {
    from_name: ``,
    email: ``,
    message: ``,
  };
  const [form, setform] = useState(templateParams);
  const [send, setsend] = useState(false);

  const [validate, setvalidate] = useState(false);
  const validateForm = () => {
    let error = false;
    const warningTextAux: string[] = [];
    if (form.email === ``) {
      error = true;
      warningTextAux.push(`Añade tu mail en el campo`);
    }
    if (form.from_name === ``) {
      error = true;
      warningTextAux.push(`Añade tu nombre en el campo`);
    }
    if (form.message === ``) {
      error = true;
      warningTextAux.push(`Añade un mensaje en el campo`);
    }
    if (error === true) {
      setvalidate(true);

      MySwal.fire({
        title: `Sweet!`,
        footer: `Copyright 2018`,
        didOpen: () => {
          // `MySwal` is a subclass of `Swal`
          //   with all the same instance & static methods
          MySwal.clickConfirm();
        },
      }).then(() =>
        MySwal.fire(
          <>
            <h1 className="text-gray-600">Errores</h1>
            <span className="uppercase text-sm text-black font-bold">
              {warningTextAux.length !== 0 &&
                warningTextAux.map((text) => (
                  <p className="text-gray-600">{text} </p>
                ))}
            </span>
          </>,
        ),
      );
      return false;
    }
    setvalidate(false);
    return true;
  };
  const handleSend = () => {
    if (validateForm() === true) {
      emailjs.send(`angelbatlles.me`, `template_t7z695e`, form).then(
        (response) => {
          //  console.log('SUCCESS!', response.status, response.text);
          setsend(true);
        },
        (error) => {
          //   console.log('FAILED...', error);
        },
      );
    }
  };
  const handleInputChange = (event: any) => {
    setform({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="min-h-screen min-w-full  items-center flex home">
      <main className="mt-32 sm:mt-0 flex flex-col lg:flex-row min-w-full items-center">
        <div className="content pr-8">
          <div ref={targetRef} className={scrollView ? `visible` : `invisible`}>
            <h2 className={scrollView ? `subtitle` : ``}>
              <div className="blast">C</div>
              <div className="blast">o</div>
              <div className="blast ">n</div>
              <div className="blast ">t</div>
              <div className="blast">a</div>
              <div className="blast ">c</div>
              <div className="blast ">t</div>
              <div className="blast mr-5">a</div>
              <div className="blast   ">m</div>
              <div className="blast">e</div>
            </h2>
          </div>
          <div className="contain ">
            <div className="text-zone text-center lg:text-left">
              <p>
                Me interesan las oportunidades de trabajo autónomo,
                especialmente los proyectos ambiciosos o de gran envergadura.
                Sin embargo, si tienes otra petición o pregunta, no dudes en
                utilizar el formulario.
              </p>
            </div>
            {send === false ? (
              <div className="flex flex-col ">
                <div>
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Nombre
                  </span>
                  <input
                    onChange={handleInputChange}
                    value={form.from_name}
                    className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder=""
                    name="from_name"
                  />
                </div>
                <div className="mt-8">
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Email
                  </span>
                  <input
                    value={form.email}
                    onChange={handleInputChange}
                    className=" w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    name="email"
                  />
                </div>
                <div className="mt-8">
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    Mensaje
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mt-8">
                  <div className="  cursor-pointer contactme justify-center">
                    <a className="transparent">
                      <p>
                        <span className={validate === true ? `bg` : `bgnook`} />
                        <span className="base" />
                        <span
                          className="text "
                          role="button"
                          tabIndex={0}
                          onKeyDown={() => handleSend()}
                          onClick={() => handleSend()}
                        >
                          ¡contactame!
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p className="  p-6 text-center    ">
                  ¡Enviado, en breve te contestaré!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="content-timeline py-6 lg:py-0">
          <Image
            src="/developer.gif"
            alt="Frontend Developer"
            width={640}
            height={480}
            className="rounded"
          />
        </div>
      </main>
    </div>
  );
}
