import React from 'react';

function Form1(props) {
  const { change, student, updateStudent } = props;

  function onSubmit(e) {
    e.preventDefault();
    console.log(student);
    change(2);
  }

  return (
    <div className="border-2 bg-white border-gray-300 rounded-xl h-full w-full sm:h-auto sm:w-80 md:w-96  p-8">
      <div>
        <img
          className="mx-auto h-auto w-auto"
          src="/img/mouratech.png"
          alt="OK"
        />
        <h2 className="text-center text-2xl font- tracking-tight text-black mt-10 ">
          Informe sua matrícula
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <input
              value={student.enrollment}
              onChange={(e) => {
                const newStudent = { ...student, enrollment: e.target.value };
                updateStudent(newStudent);
              }}
              id="enrollment"
              name="enrollment"
              type="text"
              autoComplete="enrollment"
              required
              className="relative block w-full rounded-t-md rounded-b-md border-1 text-center py-1.5 text-gray-900 ring-1 ring-inset placeholder:text-gray-600 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-azul2 sm:text-sm sm:leading-6 px-2"
              placeholder="Matrícula"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="group relative flex w-24 justify-center rounded-md bg-blue-800 py-2 px-3 text-sm font-semibold  text-white hover:blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul cursor-pointer"
          >
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form1;